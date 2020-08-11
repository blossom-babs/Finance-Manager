console.log(`The very first line: connected`);
// z9HFex3z94$5@Ep
class UI {
    constructor() {
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetWarning = document.getElementById("budget-warning");
        this.budgetOutput = document.getElementById('budget-output')
        this.expenseOutput = document.getElementById('expenses-output')
        this.expenseForm = document.getElementById('expense-form')
        this.expenseName = document.getElementById('expense-name')
        this.expenseAmt = document.getElementById('expense-amount')
        this.expenseWarning = document.getElementById('expense-warning')
        this.expenseList = document.getElementById('single-expense')
        this.balance = document.getElementById('balance-output')
        this.itemList = []
        this.itemID = 0
    }

    // budget form method
    submitBudgetForm() {
        // console.log(`your budget has been noted`);
        if (this.budgetInput.value === "" || this.budgetInput.value <= 0) {
            this.budgetWarning.classList.remove("d-none");
            const self = this
            setTimeout(function () {
                // console.log(self);
                self.budgetWarning.classList.add("d-none");
            }, 4000);
        } else {
            this.budgetOutput.innerHTML = this.budgetInput.value
            this.budgetInput.value = ''
            this.ShowBalance()
        }
    }

    // balance method
    ShowBalance() {
        // console.log(`this is the balance`)
        const expense = this.totalExpense()
        this.balance.innerHTML = Number(this.budgetOutput.textContent) - expense

        if (this.balance.textContent === 0) {
            this.balance.style.color = '#000';
        } else if (this.balance.textContent < 0) {
            this.balance.style.color = '#ff0000';
        } else if (this.balance.textContent > 0) {
            this.balance.style.color = '#008000';
            //  console.log(`the green is working`)
        }
    }

    // total expenses
    totalExpense() {
        let total = 0
        if (this.itemList.length > 0) {
            total = this.itemList.reduce((acc, currval) => {
                //console.log(`this is ths ${acc} and ${currval.amount}`)
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
        newDiv.classList.add('single-expense')
        newDiv.innerHTML = `
        <div class='exp-name' id="exp-names">${expenseObj.title}</div>
        <div class='exp-amt' id="exp-amts">${expenseObj.amount}</div>
        <div data-id=${expenseObj.id}><i class="fas fa-edit edit-exp"></i></div>
        <div data-id=${expenseObj.id}><i class="fas fa-trash delete-exp"></i></div>
        `
        this.expenseList.appendChild(newDiv)
    }

    // edit expense
    editExpense(element) {
        const el = element.target.parentElement
        const parent = el.parentElement
        const id = Number(el.dataset.id)
        // console.log(el.dataset.id)
        this.expenseList.removeChild(parent)

        let expense = this.itemList.filter((item) => {
            return item.id === id
        })
        this.expenseName.value = expense[0].title
        this.expenseAmt.value = expense[0].amount

        let tempList = this.itemList.filter( (item)=> {
            return item.id !== id
        })
        this.itemList = tempList
        console.log(this.itemList)
        this.ShowBalance()
    }

    // delete expense
    deleteExpense(element) {
        const el = element.target.parentElement
        const parent = el.parentElement
        const id = Number(el.dataset.id)
        // console.log(el.dataset.id)
        this.expenseList.removeChild(parent)
        let tempList = this.itemList.filter( (item)=> {
            return item.id !== id
        })
        this.itemList = tempList
        console.log(this.itemList)
        this.ShowBalance()
    }

}

function eventListeners() {
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById('expense-form')
    const expenseList = document.getElementById('single-expense')

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

    // edit and delete buttons
    expenseList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-exp')) {
            ui.editExpense(e)
        } else if (e.target.classList.contains('delete-exp')) {
            ui.deleteExpense(e)
        }
    })

}

document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
});