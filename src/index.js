import './styles.css';
import { playerList, clearInputs } from './js/app.js';
import { savetoURL } from './js/functionapi.js';

const submitButton = document.getElementById('submitting');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  savetoURL();
  clearInputs();
});

document.addEventListener('DOMContentLoaded', playerList);