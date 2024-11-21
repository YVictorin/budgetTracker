//Connects the Budget and UI classes

class BudgetTrackerHandler {
    budget = new Budget();
    DOMHandler = new DOMInteractionHandler();

    constructor() {}



    updateIncomeInputs() {
        this.DOMHandler.processDOMInputValues();
    }

    updateExpenseInputs() {

    }



}

