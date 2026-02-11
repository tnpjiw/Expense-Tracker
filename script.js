const addBtn = document.querySelector('.btn')
const description = document.querySelector('#description')
const amount = document.querySelector('#amount')
const transaction = document.querySelector('.transaction')
const totalBalance = document.querySelector('#total-balance')
const incomeBalance = document.querySelector('#income-balance')
const expensesBalance = document.querySelector('#expenses-balance')

let balance = 0
let income = 0
let expense = 0

addBtn.addEventListener('click', () =>{
    const text = description.value.trim()
    const num = amount.value.trim()

    if(text !== '' && num !== ''){
        const task = document.createElement('div')
        task.classList.add('new-task')
        const amountValue = Number(amount.value)
        const p = document.createElement('p')
        const span = document.createElement('span')
        
        if(amountValue < 0){
            p.textContent = text    
            span.classList.add('expense')
            span.textContent = num + ' ฿'
            task.append(p,span)
            transaction.appendChild(task)
            task.classList.add('is-expense')

            description.value = ''
            amount.value = ''
            totalBalance.textContent = balance += amountValue
            expensesBalance.textContent = expense += amountValue
        }else{
            p.textContent = text
            span.classList.add('income')
            span.textContent = num + ' ฿'
            task.append(p,span)
            transaction.appendChild(task)
            task.classList.add('is-income')

            description.value = ''
            amount.value = ''
            totalBalance.textContent = balance += amountValue
            incomeBalance.textContent = income += amountValue
        }
    }else{
        alert('กรุณากรอกข้อมูล')
    }
})

