
class DOMInteractionHandler {
    submitBtn = document.getElementById('submitBtn');
    inputtedAmount;
    inputtedDesc;
    cashflowItems;

    constructor() {}



    addInputsToDOM() {           // TODO make this functionality
    }   

    getDOMInputValue(callback) {
        const inputs = document.getElementsByTagName('input');

        const [userDesc] = inputs;   //gets the first input
        const [_, userAmt] = inputs; // gets the second input

        this.submitBtn.addEventListener('click', (e) => {
            const userChoicesVal = userDesc.value + ' ' + userAmt.value;
            callback(userChoicesVal);
        })

    }

    processDOMInputValues(callback) {
        let itemCount = 0;
        const mainCashflowWrapper = document.querySelector('.main__cashflow-wrapper');
        const submitBtn = document.getElementById('submitBtn');
        let userFinalIncome = '';
        let userFinalExpense = '';

        //don't use function keyword for callbacks use arrow functions because the "this" will refer to the global object/window object using function
        // arrow functions preserve the "this" context of the scope in the case scope is the class itself
        this.getDOMInputValue((value) => {
            let userAnswers = value.split(" ");
            this.inputtedAmount = userAnswers[1];
            this.inputtedDesc = userAnswers[0];
        })


        submitBtn.addEventListener('click', (e) => {
            let selectElem = document.getElementById('cashflow-select');
            let optionsIndex = selectElem.selectedIndex;
            let anOption = selectElem.options[optionsIndex].value; // Get the value of the selected option
            let cashflowItemAmt = document.createElement('p');
          

            if (itemCount <= 7) {
                this.cashflowItems = document.createElement('div');

                // Update name
                let cashflowItemName = document.createElement('p');
                cashflowItemName.textContent = this.inputtedDesc;
                cashflowItemName.style.color = '#3E3E3E';
                this.cashflowItems.appendChild(cashflowItemName);

                //Update amount
                cashflowItemAmt.textContent = "$" + this.inputtedAmount;
                cashflowItemAmt.style.color = '#558052';
                this.cashflowItems.appendChild(cashflowItemAmt);

                // Add classes for styling based on the selected option
                if (anOption === "income") {
                    this.cashflowItems.classList.add('cashflow__item');
                     userFinalIncome = cashflowItemAmt.textContent.split("$").join(""); //gets the number with no dollar sign
                } else if (anOption === "default") {
                    this.cashflowItems.classList.add('cashflow__item--expense');
                } else {
                    this.cashflowItems.classList.add('cashflow__item--expense');
                     userFinalExpense = cashflowItemAmt.textContent.split("$").join("");
                }


                // Append to the main wrapper
                mainCashflowWrapper.appendChild(this.cashflowItems);
                itemCount++;
            }

            //Passing the final values into a callback that is the param instead of returning because the code in the submitBtn event listener is asynchronous and
            //returning normally isn't, making the returned values be null
            callback(
                {
                    usersIncome: userFinalIncome,
                    usersExpenses: userFinalExpense,
                }
            )

        });




    }

    clearDOMInputValues() {

    }

    updateDOMSummaryValue() {



    }
}