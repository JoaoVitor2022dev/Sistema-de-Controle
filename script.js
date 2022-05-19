const transactionUl = document.querySelector('#transactions');


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
   const transactionAmounts = dummyTransactions.map(transaction =>  transaction.amount )
   console.log(transactionAmounts)
}

const init = () => {
   dummyTransactions.forEach(addTransactionIntoDom)
   updateBalanceValue(); 
}

init() 

/// parte da exlpicação do professor 


 const home = ( homedESENVELOP , homecenter) => { 'oi'}

 const numbers = [1,2,3]; 
undefined

const sum = numbers.reduce(() => { return  }  ) 
