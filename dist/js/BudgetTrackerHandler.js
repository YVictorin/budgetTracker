//Connects the Budget and UI classes
class BudgetTrackerHandler {
    budget = new Budget();
    DOMHandler = new DOMInteractionHandler();

    constructor() {}

    updateGrandTotal() {
        this.DOMHandler.processDOMInputValues(({ amount, type }) => {
            if (type === 'reset') {
                // Reset the budget
                this.budget = new Budget(); // resets the budget by instantiating a brand-new budget 
                return;
            }

            if (type === "income") {
                this.budget.income = amount;
            } else {
                this.budget.expenses = amount;
            }
            
            const total = this.budget.whatIsMyBudget();
            this.DOMHandler.updateDOMSummaryValue(total);
        });
    }

}

