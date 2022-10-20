const data = [
  {
    name: 'first',
    score: '1',
  },
  {
    name: 'second',
    score: '3',
  },
  {
    name: 'bye',
    score: '10',
  },
  {
    name: 'winner',
    score: '4',
  },
  {
    name: 'oh yes',
    score: '2',
  },
];

const displayList = () => {
  const sortedData = data.sort((a, b) => a.score - b.score);
  const userBoard = document.querySelector('.userboard');
  sortedData.forEach((el) => {
    const adduser = document.createElement('tr');
    adduser.innerHTML = `
        <tr class="cols">${el.name}: ${el.score}</tr>
       `;
    userBoard.appendChild(adduser);
  });
};

export default displayList;