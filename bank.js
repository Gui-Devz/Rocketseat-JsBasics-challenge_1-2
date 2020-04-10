const users = [
    {
        name: "Guilherme",
        transactions: [],
        balance: 0
    },
    {
        name: "Kátia",
        transactions: [],
        balance: 0
    },
    {
        name: "Maranhão",
        transactions: [],
        balance: 0
    },
]


function createTransaction(obj, pos){
    for (const tran of obj) {
        users[pos].transactions.push(tran)
        
        if(tran.type === "credit"){
            users[pos].balance += tran.value
        } else if (tran.type === "debit"){
            users[pos].balance -= tran.value
        }
    }
}

//Logs about transactions

//Only two types accepted 'credit' or 'debit'
function getHigherTransactionByType(type, pos){
    if(type === "credit"){
        let value = 0

        for (const transactions of users[pos].transactions) {
            if(transactions.type === "credit"){
                if (transactions.value > value) {
                    value = transactions.value
                }
            }  
        }
        
        for (const transactions of users[pos].transactions) {
            if(transactions.type === "credit"){
                if (transactions.value === value) {
                    return transactions
                }
            }  
        }
    }

    if(type === "debit"){
        let value = 0

        for (const transactions of users[pos].transactions) {
            if(transactions.type === "debit"){
                if (transactions.value > value) {
                    value = transactions.value
                }
            }  
        }
        
        for (const transactions of users[pos].transactions) {
            if(transactions.type === "debit"){
                if (transactions.value === value) {
                    return transactions
                }
            }  
        }
    }
}

function getAverageTransactionValue(pos){
    let sum = 0;
    let count = 0;
    for (const transaction of users[pos].transactions) {
        sum += transaction.value
        count++
    }
    let averageValue = sum/count;

    return averageValue
}

function getTransactionsCount(pos){
    const transactionsCount = {credit: 0, debit: 0}

    for (const transactions of users[pos].transactions) {
        if(transactions.type === "credit"){
            transactionsCount.credit++
        } else if (transactions.type === "debit"){
            transactionsCount.debit++
        }
    }
    return transactionsCount;
}

const transactions = [
    {
        type: 'credit',
        value: 50
    },

    {
        type: 'credit',
        value: 120
    },

    {
        type: 'credit',
        value: 150
    },

    {
        type: 'debit',
        value: 80
    },

    {
        type: 'debit',
        value: 30
    },
]

createTransaction(transactions, 0)

console.log(users[0].balance) // 60

console.log(getHigherTransactionByType("credit", 0)) // { type: 'credit', value: 120 }

console.log(getHigherTransactionByType("debit", 0)) // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue(0)) // 70


console.log(getTransactionsCount(0)) // { credit: 2, debit: 2 }