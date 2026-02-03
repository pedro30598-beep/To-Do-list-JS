const localStoragekey = 'to-do-list';

function novatarefa() {
    let input = document.getElementById('input-tarefa');
    if(!input.value)
    {
        alert('Adicione alguma tarefa!')
    }
    // else if()
    else{
        let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
        values.push({
            name: input.value
        });
        localStorage.setItem(localStoragekey,JSON.stringify(values));
        showValues()
    }
}

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || '[]');
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}</li>`;
    }
}