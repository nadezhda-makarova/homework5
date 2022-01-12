const chat = document.querySelector('.chat-widget');
const inputField = document.getElementById('chat-widget__input');


const answerRobots = [
  'Добрый день!',
  'Нет никого!',
  'Приходите завтра'
]

chat.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
});

inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const message = e.target.value;
    if (message) {
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();

      const messagesPlace = document.getElementById('chat-widget__messages');
      messagesPlace.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${hour}:${minute}</div>
          <div class="message__text">
            ${message}
          </div>
        </div>
      `;
      const numberAnswer = Math.floor(Math.random() * answerRobots.length);
      messagesPlace.innerHTML += `
          <div class="message">
            <div class="message__time">${hour}:${minute}</div>
            <div class="message__text">
              ${answerRobots[numberAnswer]}
            </div>
          </div>
        `;
    }
    e.target.value = '';
  }
});