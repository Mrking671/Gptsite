const API_URLS = {
    'gpt4': "https://telesevapi.vercel.app/chat-gpt?question={}",
    'chatgpt': "https://chatgpt.darkhacker7301.workers.dev/?question={}",
    'girlfriend': "https://chatgpt.darkhacker7301.workers.dev/?question={}&state=girlfriend",
    'jarvis': "https://jarvis.darkhacker7301.workers.dev/?question={}&state=jarvis",
    'zenith': "https://ashlynn.darkhacker7301.workers.dev/?question={}&state=Zenith",
    'evil': "https://white-evilgpt.ashlynn.workers.dev/?username=Yourtgusername&question={}",
    'lord': "https://lord.ashlynn.workers.dev/?question={}&state=Poet",
    'business': "https://bjs-tbc.ashlynn.workers.dev/?username=YourTGI'dhere&question={}",
    'developer': "https://bb-ai.ashlynn.workers.dev/?question={}&state=helper",
    'bing': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Bing",
    'meta': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Llama",
    'blackbox': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Blackbox",
    'qwen': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Qwen",
    'gemini': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Gemini"
};

function sendMessage() {
    const userMessage = document.getElementById('user-input').value;
    const selectedAI = document.getElementById('ai-select').value;
    const chatBox = document.getElementById('chat-box');

    if (!userMessage) return;

    // Append user message to chat
    appendMessage('user', userMessage);
    document.getElementById('user-input').value = '';

    // Call the AI API
    const apiUrl = API_URLS[selectedAI].replace("{}", encodeURIComponent(userMessage));
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (selectedAI === 'gpt4') {
                appendMessage('ai', data.message);
            } else {
                appendMessage('ai', data.answer);
            }
        })
        .catch(err => {
            appendMessage('ai', 'Sorry, something went wrong.');
            console.error(err);
        });
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
