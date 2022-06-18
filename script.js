const transactionUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus'); 
const balanceDisplay = document.querySelector('#balance'); 
const form = document.querySelector('#form'); 
const inputTrasactionName =  document.querySelector('#text'); 
const inputTrasactionAmount = document.querySelector('#amount'); 


const localStorageTransactions = JSON.parse(localStorage
   .getItem('transactions'))
let transactions = localStorage
.getItem('transactions') !== null ? localStorageTransactions : []

const removeTransaction = ID => {
   transactions = transactions
   .filter(transaction => transaction.id !== ID)
   updateLocalstorage(); 
   init()
} 

const addTransactionIntoDom = transaction => {
   const operator = transaction.amount < 0 ? '-' : '+';
   const CSSclass = transaction.amount  < 0 ? 'minus' : 'plus'; 
   const amountWithoutOperator = Math.abs(transaction.amount)
   const li = document.createElement('li') 

   li.classList.add(CSSclass)
   li.innerHTML = `
      ${transaction.name} 
      <span>${operator} R$ ${amountWithoutOperator}</span>
      <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`
   transactionUl.append(li); 
}
  
const updateBalanceValue = () => {
   const transactionAmounts = transactions
   .map(transaction =>  transaction.amount )
   const  total = transactionAmounts
   .reduce((accumulator, transaction) => accumulator + transaction, 0 ) 
   .toFixed(2)  
   const income = transactionAmounts
   .filter( value => value > 0 )
   .reduce((accumulator, value) => accumulator + value , 0)
   .toFixed(2); 
   const expense =  Math.abs(transactionAmounts
   .filter( value => value < 0 )
   .reduce((accumulator , value) => accumulator  + value  , 0 ))
   .toFixed(2)
 
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent =  `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () => {
   transactionUl.innerHTML = ''
   transactions.forEach(addTransactionIntoDom)
   updateBalanceValue(); 
}

init() 

const updateLocalstorage = () => {
   localStorage.setItem('transaction', JSON.stringify(transactions)); 
}


const generateID = () => Math.round(Math.random() * 1000); 


form.addEventListener('submit' , event => {
   event.preventDefault(); 
 
 const transactionName = inputTrasactionName.value.trim()
 const transactionAmount = inputTrasactionAmount.value.trim()


  if( inputTrasactionAmount === '' || inputTrasactionAmount  === '' ){
     window.alert(' Por favor, preencha tanto o nome quanto o valor da transação')
     return 
  }
  
 
  const transaction = { 
     id: generateID(),
     name: transactionName,
     amount: Number(transactionAmount)
  }
  
 transactions.push(transaction)
 init()
 updateLocalstorage(); 

 inputTrasactionName.value = ''
 inputTrasactionAmount.value = ''

})


// tempo do video é 1:06:41 para voltar o projeto amanha... 
