const localStoragekey = 'to-do-list';

function validatenewtask()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
    let inputValue = document.getElementById('input-tarefa').value;
    let exists = values.find(x => x.name == inputValue);
    return !exists ? false : true;
}

function novatarefa() {
    let input = document.getElementById('input-tarefa');
    input.style.border='';

    if(!input.value)
    {
        input.style.border='1px solid red';
        alert('Adicione alguma tarefa!')
    }
    else if(validatenewtask())
    {
        alert('Tarefa já existente!')
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
        values.push({
            name: input.value
        });
        localStorage.setItem(localStoragekey,JSON.stringify(values));
        showValues()
    }
        input.value = ''
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg></button></li>`;
    }
}
function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
    let index = values.findIndex(x => x.name == data);
    values.splice(index, 1);
    localStorage.setItem(localStoragekey,JSON.stringify(values));
    showValues();
}

showValues();