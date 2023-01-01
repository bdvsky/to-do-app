const btn = document.querySelector('.submit');
const input = document.querySelector('input');
const result = document.querySelector('.result');

input.addEventListener('click', () => {
  input.classList.add('input-active');
});

let tasksData = [];

btn.addEventListener('click',() => {
    let value = input.value;
    if (value === '') { return; }
    tasksData.push(value);
    input.value = '';

    createElements(tasksData);
    console.log(tasksData);
});

function createElements(data) {
  const ul = document.createElement('ul');


  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.append(li);

    const btnDelete = document.createElement('BUTTON');
    btnDelete.textContent = '✖';
    btnDelete.classList.add('delete-btn');
    li.append(btnDelete);
    
    btnDelete.addEventListener('click', () => {
      filterData(item);
      btnDelete.parentNode.remove();
      if(tasksData.length === 0 ) {
        input.classList.remove('input-active');
      }
    });

  });

  result.innerHTML = '';
  result.append(ul);

}


function filterData(str) {
  tasksData = tasksData.filter( element => element !== str);
}
