import { getfromURL } from './functionapi.js';

const playerList = async () => {
  const users = await getfromURL();
  users.result.sort((a, b) => b.score - a.score);
  const list = document.querySelector('.userboard');
  users.result.forEach((el) => {
    const adduser = document.createElement('tr');
    adduser.innerHTML = `
    <td class="cols">${el.user}: ${el.score}</td>
      `;
    list.appendChild(adduser);
  });
};

const clearInputs = () => {
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
};

export { playerList, clearInputs };