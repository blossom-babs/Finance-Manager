console.log(`The very first line: connected`);
// z9HFex3z94$5@Ep
class UI {
    constructor() {
        this.budgetForm = document.getElementById("budget-form");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetWarning = document.getElementById("budget-warning");
        this.budgetOutput = document.getElementById('budget-output')
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
        console.log(`your budget has been noted`);
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
        console.log(`this is the balance`)
        const expense = this.totalExpense()
        this.balance.innerHTML = Number(this.budgetOutput.textContent) - expense

        if (this.balance.textContent === 0) {
            this.balance.style.color = '#000';
        } else if (this.balance.textContent < 0) {
            this.balance.style.color = '#ff0000';
        } else if (this.balance.textContent > 0) {
            this.balance.style.color = '#008000';
            console.log(`the green is working`)
        }
    }

    // total expenses
    totalExpense() {
        let total = 400
        return total
    }

    // expense form method
    submitExpenseForm() {
        console.log(`now expense form is working too`)
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

            this.expenseName.value = ''
            this.expenseAmt.value = ''

            console.log(expenseObj)
        }
    }

    // add individual expense 

    addExpense(expenseObj){
        console.log(`add expense is working`)
        const newDiv = document.createElement('div')
        newDiv.classList.add('single-expense')
        newDiv.innerHTML = `
        <div id="exp-names">${expenseObj.title}</div>
        <div id="exp-amts">${expenseObj.amount}</div>
        <div data-id=${expenseObj.id}><i class="fas fa-edit"></i></div>
        <div data-id=${expenseObj.id}><i class="fas fa-trash"></i></div>
        `
        this.expenseList.appendChild(newDiv)
    }
}

function eventListeners() {
    const budgetForm = document.getElementById("budget-form");
    const expenseForm = document.getElementById('expense-form')

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

}

document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
});