const playerName = document.querySelector('#name');
const playerScore = document.querySelector('#score');

const savetoURL = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AoSvcvAve7z0Jc7kb3OL/scores/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      user: playerName.value,
      score: playerScore.value,
    }),
  });
  const players = await response.json();
  return players;
};

const getfromURL = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AoSvcvAve7z0Jc7kb3OL/scores/');
  const players = await response.json();
  return players;
};

export { savetoURL, getfromURL };