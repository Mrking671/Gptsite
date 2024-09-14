// Script for handling AI selection and sending messages

document.getElementById('send-btn').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const selectedAI = document.getElementById('ai-select').value;

    if (!userInput) {
        alert("Please enter a message");
        return;
    }

    const apiUrls = {
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

    const apiUrl = apiUrls[selectedAI].replace("{}", encodeURIComponent(userInput));

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayResponse(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });

    // Clear the input field
    document.getElementById('user-input').value = '';
}

function displayResponse(data) {
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = `
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
}
