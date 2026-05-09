const BASE_URL = "http://localhost:3000/api";

async function runTests() {
  console.log("🚀 Starting API Tests for PalmShield...");

  let projectId;
  let milestoneId;

  // 1. Test Project Creation
  console.log("\n[1] Testing POST /api/projects...");
  try {
    const res = await fetch(`${BASE_URL}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Test API Project",
        description: "Testing API endpoint flow",
        clientWallet: "TestClientWallet123",
        totalBudget: 1000,
        category: "Development",
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        milestones: [
          { title: "M1", description: "First Phase", amount: 500 },
          { title: "M2", description: "Second Phase", amount: 500 }
        ]
      })
    });
    
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    console.log("✅ Success! Project Created. ID:", data.id);
    projectId = data.id;
  } catch (err) {
    console.error("❌ Failed:", err.message);
  }

  // 2. Test Get Projects
  console.log("\n[2] Testing GET /api/projects...");
  try {
    const res = await fetch(`${BASE_URL}/projects`);
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    console.log(`✅ Success! Found ${data.length} open projects.`);
  } catch (err) {
    console.error("❌ Failed:", err.message);
  }

  // 3. Test Get Single Project
  if (projectId) {
    console.log(`\n[3] Testing GET /api/projects/${projectId}...`);
    try {
      const res = await fetch(`${BASE_URL}/projects/${projectId}`);
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      console.log(`✅ Success! Fetched Project: ${data.title}`);
      milestoneId = data.milestones[0]?.id;
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }

  // 4. Test Update Project (Acceptance)
  if (projectId) {
    console.log(`\n[4] Testing PUT /api/projects/${projectId} (Accepting)...`);
    try {
      const res = await fetch(`${BASE_URL}/projects/${projectId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "ACTIVE",
          freelancerWallet: "TestFreelancerWallet456"
        })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      console.log(`✅ Success! Project status updated to: ${data.status}`);
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }

  // 5. Test Update Milestone (Submit Work)
  if (milestoneId) {
    console.log(`\n[5] Testing PUT /api/milestones/${milestoneId} (Submitting)...`);
    try {
      const res = await fetch(`${BASE_URL}/milestones/${milestoneId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          status: "SUBMITTED",
          submissionNote: "Here is the Figma link."
        })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      console.log(`✅ Success! Milestone status updated to: ${data.status}`);
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }

  // 6. Test Dispute Creation
  if (projectId && milestoneId) {
    console.log(`\n[6] Testing POST /api/disputes...`);
    try {
      const res = await fetch(`${BASE_URL}/disputes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId,
          milestoneId,
          raisedBy: "client",
          raisedAgainst: "TestFreelancerWallet456",
          reason: "Did not follow instructions.",
          evidenceCid: "ipfs://testcid123"
        })
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      console.log(`✅ Success! Dispute Raised. ID: ${data.id}`);
    } catch (err) {
      console.error("❌ Failed:", err.message);
    }
  }

  console.log("\n🎉 API Tests Completed!");
}

runTests();
