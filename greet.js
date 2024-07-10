// Greet Function
function greet(neighborsName, language) {
    const greetings = {
        'en': 'Hello',
        'ts': 'Avuxeni',
        'zu': 'Sawubona'
    };
    return `${greetings[language] || greetings['en']}, ${neighborsName}`;
}

function displayGreeting() {
    const name = document.getElementById('neighborName').value;
    const lang = document.getElementById('language').value;
    document.getElementById('greeting').innerText = greet(name, lang);
}