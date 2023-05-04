let groceries = ['cheese','bread','milk']

const input = document.getElementById('input')

ShopList()

function ShopList(){
    for(let i = 0 ; i < groceries.length;i++){

        const listItems = document.getElementById('itemList')

        const list = document.createElement('li')

        const span = document.createElement('span')

        span.className = 'close'

        span.textContent = '\u00D7'

        list.textContent = groceries[i]

        list.appendChild(span)

        listItems.appendChild(list)

        span.addEventListener('click', () => {
            list.style.display = 'none'
        })

        span.addEventListener('click', () => {
            listItems.removeChild(list)
        })

        list.addEventListener('click', toggled)
    }
}


function up(){
    const input3 = document.getElementById('input')
    input3.value = input3.value.toLowerCase()
}
function update(){

    groceries = []

    if(input.value == ''){
        alert('please enter an item')
    }

    groceries.push(input.value)

    input.value = ''

    ShopList()
}

function toggled(){
    this.classList.toggle('checked')
}

    const input2 = document.getElementById('input')
    input2.addEventListener('keypress', function (event){
        if(event.key == 'Enter'){
            event.preventDefault()
            document.getElementById('addBtn').click()
        }
    })