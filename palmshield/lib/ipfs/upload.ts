export async function uploadToIPFS(file: File): Promise<string> {
  const token = process.env.WEB3_STORAGE_TOKEN;
  if (!token) {
    console.warn("WEB3_STORAGE_TOKEN is missing. Returning a mock IPFS CID for testing.");
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `ipfs://bafybeimockcidfor${file.name.replace(/[^a-z0-9]/gi, "").toLowerCase()}testing`;
  }

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://api.web3.storage/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`IPFS upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return `ipfs://${data.cid}`;
  } catch (error) {
    console.error("IPFS Upload Error:", error);
    throw error;
  }
}
