const API_URLS = {
  chatgpt: "https://chatgpt.darkhacker7301.workers.dev/?question={}",
  girlfriend: "https://chatgpt.darkhacker7301.workers.dev/?question={}&state=girlfriend",
  jarvis: "https://jarvis.darkhacker7301.workers.dev/?question={}&state=jarvis",
  zenith: "https://ashlynn.darkhacker7301.workers.dev/?question={}&state=Zenith",
  evil: "https://white-evilgpt.ashlynn.workers.dev/?username=Yourtgusername&question={}",
  lord: "https://lord.ashlynn.workers.dev/?question={}&state=Poet",
  business: "https://bjs-tbc.ashlynn.workers.dev/?username=YourTGI'dhere&question={}",
  developer: "https://bb-ai.ashlynn.workers.dev/?question={}&state=helper",
  gpt4: "https://telesevapi.vercel.app/chat-gpt?question={}",
  bing: "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Bing",
  meta: "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Llama",
  blackbox: "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Blackbox",
  qwen: "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Qwen",
  gemini: "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Gemini"
};

async function sendQuestion() {
  const aiModel = document.getElementById('ai-model').value;
  const userInput = document.getElementById('user-input').value.trim();
  if (!userInput) return;

  // Display the user's message in the chat window
  const messageArea = document.getElementById('message-area');
  const userMessage = document.createElement('div');
  userMessage.textContent = `You: ${userInput}`;
  messageArea.appendChild(userMessage);

  // Clear input field
  document.getElementById('user-input').value = "";

  // Fetch API response
  const apiUrl = API_URLS[aiModel].replace('{}', encodeURIComponent(userInput));
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Format response based on API model
    let reply;
    if (aiModel === 'gpt4') {
      reply = `GPT-4: ${JSON.stringify(data, null, 2)}`;
    } else {
      reply = `AI: ${JSON.stringify(data, null, 2)}`;
    }

    // Append the AI's response to the chat
    const aiMessage = document.createElement('div');
    aiMessage.textContent = reply;
    messageArea.appendChild(aiMessage);

    // Scroll to the bottom of the chat window
    messageArea.scrollTop = messageArea.scrollHeight;

  } catch (error) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = `Error: Unable to fetch response.`;
    messageArea.appendChild(errorMessage);
  }
}
