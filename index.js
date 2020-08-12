console.log(`The very first line: connected`);
// z9HFex3z94$5@Ep
class UI {
    constructor() {
        this.budgetForm = document.getElementById("budget-form");
        this.budgetName = document.getElementById('budget-name')
        this.budgetInput = document.getElementById("budget-input");
        this.budgetWarning = document.getElementById("budget-warning");
        this.budgetOutput = document.getElementById('budget-output')
        this.expenseOutput = document.getElementById('expenses-output')
        this.expenseForm = document.getElementById('expense-form')
        this.expenseName = document.getElementById('expense-name')
        this.expenseAmt = document.getElementById('expense-amount')
        this.expenseWarning = document.getElementById('expense-warning')
        this.expenseList = document.getElementById('expense-list')
        this.incomeList = document.getElementById('income-list')
        this.allList = document.getElementById('all-list')
        this.balance = document.getElementById('balance-output')
        this.itemList = []
        this.itemID = 0
        this.budgetList = []
        this.budgetID = 0
    }

    // budget | take in income form method
    submitBudgetForm() {
        // console.log(`your budget has been noted`);
        if (this.budgetName.value === '' || this.budgetInput.value === "" || this.budgetInput.value <= 0) {
            this.budgetWarning.classList.remove("d-none");
            const self = this
            setTimeout(function () {
                // console.log(self);
                self.budgetWarning.classList.add("d-none");
            }, 4000);
        } else {
            let budgetAmount = Number(this.budgetInput.value)

            let income = {
                id: this.budgetID,
                budgetName: this.budgetName.value,
                budgetAmount
            }
            this.budgetID++
            this.budgetList.push(income)
            this.addIncome(income)
            this.ShowBalance()

            this.budgetInput.value = ''
            this.budgetName.value = ''

        }
    }

    // add income
    addIncome(income) {
        const div = document.createElement('div')
        div.classList.add('singleton-expenses')
        div.innerHTML = `
        <h6>${income.budgetName}</h6>
    <h6>${income.budgetAmount}</h6>
    <a data-id=${income.id}><i class='fas fa-edit edit-inc'></i></a>
    <a data-id=${income.id}><i class='fas fa-trash del-inc red'></i></a>
        `
        this.incomeList.appendChild(div)
    }

    // balance method
    ShowBalance() {
        // console.log(`this is the balance`)
        const expense = this.totalExpense()
        const income = this.totalIncome()
        this.balance.innerHTML = income - expense

        const thisBalance = Number(this.balance.innerHTML)

        if (thisBalance === 0) {
            this.balance.classList.remove('red', 'green');
            this.balance.classList.add('white');
        } else if (thisBalance < 0) {
            this.balance.classList.remove('white', 'green');
            this.balance.classList.add('red');
        } else if (thisBalance > 0) {
            this.balance.classList.remove('red', 'white');
            this.balance.classList.add('green');
        }
    }

    // total income
    totalIncome() {
        let totalInc = 0

        if (this.budgetList.length > 0) {
            totalInc = this.budgetList.reduce((acc, currval) => {
                acc += currval.budgetAmount
                return acc
            }, 0)
        }
        this.budgetOutput.innerHTML = totalInc

        return totalInc
    }

    // total expenses
    totalExpense() {
        let total = 0

        if (this.itemList.length > 0) {
            total = this.itemList.reduce((acc, currval) => {
                acc += currval.amount
                return acc
            }, 0)
        }
        this.expenseOutput.innerHTML = total
        return total
    }

    // expense form method
    submitExpenseForm() {
        // console.log(`now expense form is working too`)
        if (this.expenseName.value === '' || this.expenseAmt.value === '' || this.expenseAmt.value <= 0) {
            this.expenseWarning.classList.remove('d-none')
            const self = this
            setTimeout(function () {
                self.expenseWarning.classList.add('d-none')
            }, 4000)
        } else {

            let amount = Number(this.expenseAmt.value)


            let expenseObj = {
                id: this.itemID,
                title: this.expenseName.value,
                amount
            }
            this.itemID++
            console.log(expenseObj)
            this.itemList.push(expenseObj)
            this.addExpense(expenseObj)
            this.ShowBalance()

            this.expenseName.value = ''
            this.expenseAmt.value = ''

            // console.log(expenseObj)
        }
    }

    // add individual expense 
    addExpense(expenseObj) {
        //  console.log(`add expense is working`)
        const newDiv = document.createElement('div')
        newDiv.classList.add('singleton-expenses')
        newDiv.innerHTML = `
        
        <h6>${expenseObj.title}</h6>
        <h6>${expenseObj.amount}</h6>
        <a data-id=${expenseObj.id}><i class="fas fa-edit edit-exp"></i></a>
        <a data-id=${expenseObj.id}><i class="fas fa-trash delete-exp"></i></a>

        `
        this.expenseList.appendChild(newDiv)
    }

    // edit expense
    editExpense(element) {
        const el = element.target.parentElement
        console.log(el)
        const parent = el.parentElement
        const id = Number(el.dataset.id)
        console.log(el.dataset.id)
        this.expenseList.removeChild(parent)

        let expense = this.itemList.filter((item) => {
            return item.id === id
        })
        this.expenseName.value = expense[0].title
        this.expenseAmt.value = expense[0].amount

        let tempList = this.itemList.filter((item) => {
            return item.id !== id
        })
        this.itemList = tempList
        console.log(this.itemList)
        this.ShowBalance()
    }

    // edit income
    editIncome(e) {
        const editIncomeId = Number(e.target.parentElement.dataset.id)
        const parent = e.target.parentElement.parentElement
        this.incomeList.removeChild(parent)

        let income = this.budgetList.filter(item => {
            return item.id === editIncomeId
        })
        this.budgetName.value = income[0].budgetName
        this.budgetInput.value = income[0].budgetAmount

        let tempIncome = this.budgetList.filter(item => {
            return item.id !== editIncomeId
        })
        this.budgetList = tempIncome
        console.log(this.budgetList)
        this.ShowBalance()

    }

    // delete expense
    deleteExpense(element) {
        const el = element.target.parentElement
        const parent = el.parentElement
        const id = Number(el.dataset.id)
        // console.log(el.dataset.id)
        this.expenseList.removeChild(parent)
        let tempList = this.itemList.filter((item) => {
            return item.id !== id
        })
        this.itemList = tempList
        console.log(this.itemList)
        this.ShowBalance()
    }

    // delete income
    deleteIncome(e) {
        const editIncomeId = Number(e.target.parentElement.dataset.id)
        const parent = e.target.parentElement.parentElement
        this.incomeList.removeChild(parent)

        let tempIncome = this.budgetList.filter(item => {
            return item.id !== editIncomeId
        })
        this.budgetList = tempIncome
        console.log(this.budgetList)
        this.ShowBalance()
    }

    // display all
    displayAll() {
        const expensesToDisplay = this.itemList
        const incomesToDisplay = this.budgetList

        const destructureExpense = Object.assign({}, ...expensesToDisplay)
        const destructureIncome = Object.assign({}, ...incomesToDisplay)

        const allExpense = {
            ...destructureExpense,
            ...destructureIncome
        }

        console.log(allExpense)
        this.addAll(allExpense)
    }

    //add all expense

    addAll(allExpense) {
        const allDiv = document.createElement('div')
        allDiv.classList.add('all-design')

        if ( `${allExpense.title}` === 'undefined' || `${allExpense.amount}` === 'undefined' ){
            allDiv.innerHTML = `
            <div class='all--income'>
            <h6 class="topics">Income</h6>
            <h6>${allExpense.budgetAmount}</h6>
            <h6>${allExpense.budgetName}</h6>
            </div>
            `
        } else if ( `${allExpense.budgetAmount}` === 'undefined' || `${allExpense.budgetName}` === 'undefined' ){
            allDiv.innerHTML = `
            <div class='all--expense'>
        <h6 class="topics">Expenses</h6>
        <h6>${allExpense.title}</h6>
        <h6>${allExpense.amount}</h6>
        </div>
            `
        } else
        allDiv.innerHTML = `
        <div class='all--expense'>
        <h6 class="topics">Expenses</h6>
        <h6>${allExpense.title}</h6>
        <h6>${allExpense.amount}</h6>
        </div>
       <div class='all--income'>
       <h6 class="topics">Income</h6>
       <h6>${allExpense.budgetAmount}</h6>
       <h6>${allExpense.budgetName}</h6>
       </div>
        `
        this.allList.appendChild(allDiv)

    }

}

function eventListeners() {
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById('expense-form')
    const expenseList = document.getElementById('expense-list')
    const incomeList = document.getElementById('income-list')
    const displayExpense = document.getElementById('div--expenses')
    const expense = document.getElementById('dashboard-expenses')
    const displayIncome = document.getElementById('div--income')
    const income = document.getElementById('dashboard-income')
    const displayAll = document.getElementById('div--all')
    const all = document.getElementById('dashboard-all')

    // instantiating the ui class
    const ui = new UI();

    // working on the budget form
    budgetForm.addEventListener("submit", function (e) {
        e.preventDefault();
        ui.submitBudgetForm();
    });

    // working on the expense form
    expenseForm.addEventListener('submit', function (e) {
        e.preventDefault();
        ui.submitExpenseForm();
    })

    // edit and delete expense buttons
    expenseList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-exp')) {
            ui.editExpense(e)
        } else if (e.target.classList.contains('delete-exp')) {
            ui.deleteExpense(e)
        }
    })

    // edit and delete income
    incomeList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-inc')) {
            ui.editIncome(e)
        } else if (e.target.classList.contains('del-inc')) {
            ui.deleteIncome(e)
        }
    })

    //display expense
    expense.addEventListener('click', () => {
        displayAll.classList.add('d-none')
        displayIncome.classList.add('d-none')
        displayExpense.classList.remove('d-none')
    })

    //display income
    income.addEventListener('click', () => {
        console.log(`income was clicked`)
        displayAll.classList.add('d-none')
        displayExpense.classList.add('d-none')
        displayIncome.classList.remove('d-none')
    })

    //display all expenses
    all.addEventListener('click', () => {
        displayExpense.classList.add('d-none')
        displayIncome.classList.add('d-none')
        displayAll.classList.remove('d-none')

        ui.displayAll()
    })

}

document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
});