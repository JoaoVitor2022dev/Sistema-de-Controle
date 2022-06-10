const transactionUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus'); 
const balanceDisplay = document.querySelector('#balance'); 
const form = document.querySelector('#form'); 
const inputTrasactionName =  document.querySelector('#text'); 
const inputTrasactionAmount = document.querySelector('#amount'); 

console.log({ inputTrasactionAmount , inputTrasactionName });  

const dummyTransactions = [
    { id: 1 , name: 'bolo de brigadeiro ', amount: -20 } ,
    { id: 2 , name: ' salario', amount: 300 } ,
    { id: 3 , name: ' torta de franco ', amount: -10 } ,
    { id: 4 , name: ' Violão ', amount: 150 } , 
    { id: 5 , name: 'arroz ', amount : -25  } , 
    { id: 6 , name: 'bolo de chocolate', amount : -25}
];   


const addTransactionIntoDom = transaction => {
   const operator = transaction.amount < 0 ? '-' : '+';
   const CSSclass = transaction.amount  < 0 ? 'minus' : 'plus'; 
   const amountWithoutOperator = Math.abs(transaction.amount)
   const li = document.createElement('li') 

   li.classList.add(CSSclass)
   li.innerHTML = `
      ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
   `
   transactionUl.append(li); 
}
  
const updateBalanceValue = () => {
   const transactionAmounts = dummyTransactions
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
   dummyTransactions.forEach(addTransactionIntoDom)
   updateBalanceValue(); 
}

init() 


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
     amount: transactionAmount
  }
  
 dummyTransactions.push(transaction)
 init()

 inputTrasactionName.value = ''
 inputTrasactionAmount.value = ''

})


// tempo do video é 52:23 para voltar o projeto amanha... 
