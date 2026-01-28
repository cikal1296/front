async function sendPrompt() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  result.textContent = "Loading...";

  const res = await fetch(
    "https://gemini-backend-w8a2.vercel.app/api/chat",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    }
  );

  const data = await res.json();

  result.textContent =
    data.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response";
}
