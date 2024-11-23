//Encapsulates the core math of the budget tracker
class Budget {
    #income = [];
    #expenses = [];
    totalBudget = 0;

    constructor() {}

    set income(income) {
        const incomeValue = Number(income);
        this.#income.push(incomeValue);
    }

    get income() {
        return this.#income.reduce((a, b) => a + b, 0);
    }

    set expenses(expense) {
        const expenseValue = Number(expense);
        this.#expenses.push(expenseValue);
    }

    get expenses() {
        return this.#expenses.reduce((a, b) => a + b, 0);
    }

    whatIsMyBudget() {
        this.totalBudget = this.income - this.expenses;
        return this.totalBudget;
    }
}