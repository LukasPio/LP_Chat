const inputMessage = document.querySelector(".message-input");

function saveUserName() {
  const name = prompt("Please, Enter your name:");
  localStorage.setItem("user-name", name);
}

function clearInput() {
  inputMessage.value = null;
}

function getMessageData() {
  if (isMessageTextEmpty()) {
    alert("Empty messages are no allowed.");
    return null;
  }
  if (isUserNameEmpty()) saveUserName();
  const text = inputMessage.value;
  const userName = localStorage.getItem("user-name");
  return (data = {
    text: text,
    name: userName,
  });
}

function isUserNameEmpty() {
  return localStorage.getItem("user-name") == null;
}

function isMessageTextEmpty() {
  const messageText = inputMessage.value;
  return messageText.length === 0;
}

function createAndRenderMessage() {
  const messageData = getMessageData();
  if (messageData == null) return;
  const message = createMessage(messageData.name, messageData.text);
  const messages = document.querySelector(".messages");
  messages.append(message);
  messages.scrollTop = messages.scrollHeight;
  clearInput();
}

function createMessage(name, text) {
  const message = document.createElement("div");
  message.classList.add("message-camp");
  const userName = document.createElement("h3");
  userName.classList.add("user-name");
  const messageText = document.createElement("p");
  messageText.classList.add("message-text");

  userName.textContent = name + " says:";
  messageText.textContent = text;

  message.append(userName);
  message.append(messageText);

  return message;
}

const button = document.querySelector(".send-button");
button.addEventListener("click", createAndRenderMessage);
