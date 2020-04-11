const users = [
    {
        name: "Salvio",
        income: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        income: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        income: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function sumNumbers(numbers) {
    let sum = 0

    for (const calculate of numbers) {
        sum = sum + calculate
    }
    return sum
}

function calculateIncomeBalance(inc, exp) {
    const income = sumNumbers(inc)
    const expenses = sumNumbers(exp)

    const balance = income - expenses

    return balance.toFixed(2)
}

for (const user of users) {
    const incomeBalance = calculateIncomeBalance(user.income, user.expenses)

    if (incomeBalance > 0) {
        console.log(`${user.name} has a POSITIVE balance of ${incomeBalance}`)
    } else {
        console.log(`${user.name} has a NEGATIVE balance of ${incomeBalance}`)
    }
}