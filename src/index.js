import { io } from 'socket.io-client';
import ClientGame from './client/ClientGame';
import { getTime } from './common/util';
import './index.scss';

window.addEventListener('load', () => {
  const socket = io('https://jsprochat.herokuapp.com');
  const $startGame = document.getElementById('start');
  const $nameForm = document.getElementById('nameForm');
  const $inputName = document.getElementById('name');
  const $chatWrap = document.querySelector('.chat-wrap');
  const $form = document.getElementById('form');
  const $input = document.getElementById('input');
  const $message = document.querySelector('.message');
  let name = '';
  const submitName = (e) => {
    e.preventDefault();
    if ($inputName.value) {
      ClientGame.init({ tagId: 'game', playerName: $inputName.value });
      socket.emit('start', $inputName.value);
      name = $inputName.value;
      $chatWrap.style.display = 'block';
      $nameForm.removeEventListener('submit', submitName);
      $startGame.remove();
    }
  };
  $nameForm.addEventListener('submit', submitName);

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    if ($input.value) {
      socket.emit('chat message', $input.value);
      $input.value = '';
    }
  });

  socket.on('chat connection', (data) => {
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> ${data.msg}</p>`);
  });
  socket.on('chat online', (data) => {
    $message.insertAdjacentHTML('beforeend', `<p>${'Current online'} ${data.online}</p>`);
  });
  socket.on('chat disconnect', (data) => {
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> ${data.msg}</p>`);
  });
  socket.on('chat message', (data) => {
    if (data.name === name) {
      $message.insertAdjacentHTML(
        'beforeend',
        `<p><strong>${getTime(data.time)}</strong> - <font color="red">${data.msg}</font></p>`,
      );
    } else {
      $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
    }
  });
});
