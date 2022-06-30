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

const addTransactionIntoDom = ({amount , name , id }) => {
   const operator = amount < 0 ? '-' : '+';
   const CSSclass = amount  < 0 ? 'minus' : 'plus'; 
   const amountWithoutOperator = Math.abs(transaction.amount)
   const li = document.createElement('li') 

   li.classList.add(CSSclass)
   li.innerHTML = `
      ${name} 
   <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn" onclick="removeTransaction(${id})">x</button>`
   transactionUl.append(li); 
}
  
const getExpenses = () => { Math.abs(transactionAmounts
   .filter( value => value < 0 )
   .reduce((accumulator , value) => accumulator  + value  , 0 ))
   .toFixed(2)
}


const getIcone = transactionAmounts => { 
   transactionAmounts
   .filter( value => value > 0 )
   .reduce((accumulator, value) => accumulator + value , 0)
   .toFixed(2); 
}


const getTotal = transactionAmounts => { 
   transactionAmounts
   .reduce((accumulator, transaction) => accumulator + transaction, 0 ) 
   .toFixed(2) 
} 


const updateBalanceValue = () => {
   const transactionAmounts = transactions.map(({ amount}) => amount ); 
   const  total = getTotal(transactionAmounts); 
   const income = getIcone(transactionAmounts); 
   const expense = getExpenses(transactionAmounts); 
 
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

const addToTransactionsArray = (transactionName , transactionAmount) =>{ 
    transactions.push(
   { id: generateID(),
    name: transactionName,
    amount: Number(transactionAmount)
   }); 
    
}


 const cleanInput = () => { 
   inputTrasactionName.value = ''
   inputTrasactionAmount.value = ''
 } ; 

const handleFormSubmit = event => {
   event.preventDefault(); 
 
 const transactionName = inputTrasactionName.value.trim()
 const transactionAmount = inputTrasactionAmount.value.trim()
 const isSomeInputEmpty = inputTrasactionAmount === '' || inputTrasactionAmount  === '' ;  

  if(!isSomeInputEmpty){
     window.alert(' Por favor, preencha tanto o nome quanto o valor da transação')
     return 
  }
  
 addToTransactionsArray( transactionName , transactionAmount) ; 
 init()
 updateLocalstorage(); 
 cleanInput(); 

}

form.addEventListener('submit' , handleFormSubmit ); 
