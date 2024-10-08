// script.js

function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    // Exibe a mensagem do usuário no chat
    displayMessage(userInput, "user");

    // Limpa o campo de entrada
    document.getElementById("user-input").value = "";

    // Responde com base no que o usuário escreveu
    generateBotResponse(userInput);
}

function displayMessage(message, sender) {
    let chatBox = document.getElementById("chat-box");
    let messageElement = document.createElement("div");
    messageElement.classList.add(sender + "-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Rola o chat para o fim sempre que uma nova mensagem for adicionada
    chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotResponse(userMessage) {
    let botResponse = "";

    // Respostas simples baseadas em palavras-chave
    if (userMessage.toLowerCase().includes("olá")) {
        botResponse = "Olá! Como posso te ajudar hoje?";
    } else if (userMessage.toLowerCase().includes("nome")) {
        botResponse = "Meu nome é BotdoEsterMouta, prazer em te conhecer!";
    } else if (userMessage.toLowerCase().includes("tecnologia")) {
        botResponse = "A tecnologia está sempre evoluindo! Qual parte da tecnologia você gostaria de aprender mais?";
    } else if (userMessage.toLowerCase().includes("adeus")) {
        botResponse = "Adeus! Foi bom conversar com você.";
    } else {
        botResponse = "Desculpe, eu ainda sou um bot simples e não entendi sua pergunta.";
    }

    // Exibe a resposta do bot no chat
    displayMessage(botResponse, "bot");
}
