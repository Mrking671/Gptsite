const apiUrls = {
    'chatgpt': "https://chatgpt.darkhacker7301.workers.dev/?question={}",
    'girlfriend': "https://chatgpt.darkhacker7301.workers.dev/?question={}&state=girlfriend",
    'jarvis': "https://jarvis.darkhacker7301.workers.dev/?question={}&state=jarvis",
    'zenith': "https://ashlynn.darkhacker7301.workers.dev/?question={}&state=Zenith",
    'evil': "https://white-evilgpt.ashlynn.workers.dev/?username=Yourtgusername&question={}",
    'lord': "https://lord.ashlynn.workers.dev/?question={}&state=Poet",
    'business': "https://bjs-tbc.ashlynn.workers.dev/?username=YourTGI'dhere&question={}",
    'developer': "https://bb-ai.ashlynn.workers.dev/?question={}&state=helper",
    'gpt4': "https://telesevapi.vercel.app/chat-gpt?question={}",
    'bing': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Bing",
    'meta': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Llama",
    'blackbox': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Blackbox",
    'qwen': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Qwen",
    'gemini': "https://lord-apis.ashlynn.workers.dev/?question={}&mode=Gemini"
};

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    const ai = document.getElementById('ai-select').value;
    
    if (message) {
        fetch(apiUrls[ai].replace('{}', encodeURIComponent(message)))
            .then(response => response.json())
            .then(data => {
                const messageContainer = document.getElementById('message-container');
                const newMessage = document.createElement('div');
                newMessage.textContent = data.answer || "Error: No response.";
                messageContainer.appendChild(newMessage);
                messageInput.value = '';
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});
