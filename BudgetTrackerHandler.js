//Connects the Budget and UI classes

class BudgetTrackerHandler {
    budget = new Budget();
    DOMHandler = new DOMInteractionHandler();

    constructor() {}



    updateTotal() {
       this.DOMHandler.processDOMInputValues(({usersIncome, usersExpenses}) => {
           console.log(usersIncome, usersExpenses);
       })
       
       
        // this.budget.expense(userAmt);
    }

    updateExpenseInputs() {
    }

    updateIncomeInputs() {}



}

