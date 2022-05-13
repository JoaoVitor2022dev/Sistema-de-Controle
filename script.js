const dummtTransactions = [
    { id: 1 , name: 'bolo de brigadeiro ', amount: -20 } ,
    { id: 2 , name: ' salario', amount: 300 } ,
    { id: 3 , name: ' torta de franco ', amount: -10 } ,
    { id: 4 , name: ' Violão ', amount: 150 } 
]


const addTransactionIntoDom = transaction => {
   const operator = transaction.amount < 0 ? '-' : '+'
   console.log(operator); 

    {/*<li class="minus">
          Salário <span>-$400</span><button class="delete-btn">x</button>
  </li>*/} 
}
