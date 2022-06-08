const list = document.getElementById('list')
const btn = document.getElementById('btn')
const forq = document.getElementById('form__input')
const arr = [{
    text: "Сделать первую таску",
    done: true
},
{
    text: 'Пойти в универ',
    done: false
},
{
    text: 'Пойти на тренировку',
    done: false
},
{
    text: 'Купить продукты',
    done: true
}
]

const render = (listOftodos) => {
    list.textContent = ''
    for (let i = 0; i < listOftodos.length; i++) {

        const todoFirstDiv = document.createElement('div')
        const box = document.createElement('input')
        const textDiv = document.createElement('div')
        const removeButton = document.createElement('button')

        todoFirstDiv.classList.add('list__item')

        todoFirstDiv.append(box, textDiv, removeButton);

        box.type = 'checkbox'
        box.checked = listOftodos[i].done;

        removeButton.textContent = 'x'

        btn.addEventListener('click', (e) => {
            if (forq.value !== '') {
                addTodo(forq.value)
                forq.value = ''

            }
            e.preventDefault()
        }
        )

        removeButton.addEventListener('click', () => {
            remove(i)
        })

        box.addEventListener('change', () => {
            checkTodo(i);
        })

        if (listOftodos[i].done === true) {
            todoFirstDiv.classList.add('list__item_checked')
        }
        textDiv.textContent = listOftodos[i].text
        list.append(todoFirstDiv)
    }

}

const remove = (index) => {
    arr.splice(index, 1)

    render(arr)
}

const checkTodo = (index) => {
    arr[index].done = !arr[index].done
    render(arr)
    
    console.log(arr);
}

const addTodo = (text) => {
    arr.push({
        text: text,
        done: false
    })
    render(arr)

}



render(arr)
