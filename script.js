const API_URLS = {
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

function askAI(model) {
    const question = prompt(`Ask your question to ${model}:`);
    if (!question) return;

    const url = API_URLS[model].replace("{}", encodeURIComponent(question));

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const responseElement = document.getElementById('response-container');
            if (model === 'gpt4') {
                responseElement.innerHTML = `<pre>${JSON.stringify(data.message, null, 2)}</pre><br><a href="${data.Credit}" target="_blank">Source</a>`;
            } else {
                responseElement.innerHTML = `<pre>${JSON.stringify(data.answer, null, 2)}</pre><br><a href="https://t.me/Ashlynn_Repository" target="_blank">Join Channel</a>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to get a response from the AI.');
        });
}
