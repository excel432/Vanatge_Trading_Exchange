function toggleChat() {
  var box = document.getElementById('chatBox');
  if (box.style.display === 'block') {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
  }
}

function sendMessage() {
  var input = document.getElementById('userInput');
  var messages = document.getElementById('chatMessages');
  var userText = input.value;
  if (userText === '') return;
  messages.innerHTML += '<div class="user-msg">' + userText + '</div>';
  var reply = getReply(userText.toLowerCase());
  messages.innerHTML += '<div class="bot-msg">' + reply + '</div>';
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}

function getReply(msg) {
  if (msg.indexOf('forex') !== -1) {
    return 'We offer forex trading on all major pairs with tight spreads!';
  } else if (msg.indexOf('crypto') !== -1) {
    return 'Trade Bitcoin, Ethereum and top altcoins 24/7 on Kendit!';
  } else if (msg.indexOf('gold') !== -1) {
    return 'We offer gold, oil and silver commodities trading!';
  } else if (msg.indexOf('account') !== -1) {
    return 'Fill out the contact form and we will reach out within 24 hours!';
  } else {
    return  'For further assistance please contact our customer care team directly! Whatsapp: +1(561) 325-2198 or Email companiesvantage@gmail.com. We are happy to help!';
  }
}



