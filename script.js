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
  const question = document.getElementById('question').value;
  const apiUrl = API_URLS[aiModel].replace('{}', encodeURIComponent(question));

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    // Determine response format based on API type
    let displayResponse;
    if (aiModel === 'gpt4') {
      displayResponse = JSON.stringify(data, null, 2); // GPT-4 has a different format
    } else {
      displayResponse = JSON.stringify(data, null, 2); // Pretty print format for all others
    }
    
    document.getElementById('response').textContent = displayResponse;
  } catch (error) {
    document.getElementById('response').textContent = "Error fetching response.";
  }
}
