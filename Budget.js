//Encapsulates the core math of the budget tracker

 class Budget {
    //Private fields
    #income = [];
    #expenses = [];
    totalBudget = 0;

    constructor() {}

    set income(income) {
        this.#income.push(income);
    }
    
    get income() {
        return this.#income.reduce((a, b) => a + b, 0);
    }
    
    set expenses(expense) {
        this.#expenses.push(expense);
    }
    
    get expenses() {
        return this.#expenses.reduce((a, b) => a + b, 0);
    }

    whatIsMyBudget() {
        this.totalBudget = this.expenses() - this.income();
        return this.totalBudget;
    }

}