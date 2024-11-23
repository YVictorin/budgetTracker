class DOMInteractionHandler {
    submitBtn = document.getElementById('submitBtn');
    inputtedAmount;
    inputtedDesc;
    cashflowItems;

    constructor() {}
    

    getDOMInputValue(callback) {
        const inputs = document.getElementsByTagName('input');
        
        
        //array destructuring
        const [userDesc] = inputs;
        const [_, userAmt] = inputs;

        this.submitBtn.addEventListener('click', (e) => {
            const userChoicesVal = userDesc.value + ' ' + userAmt.value;
            callback(userChoicesVal);
        });
    }

    processDOMInputValues(callback) {
        let itemCount = 0;
        const mainCashflowWrapper = document.querySelector('.main__cashflow-wrapper');
        const submitBtn = document.getElementById('submitBtn');

        this.getDOMInputValue((value) => {
            let userAnswers = value.split(" ");
            this.inputtedAmount = userAnswers[1];
            this.inputtedDesc = userAnswers[0];
        });

        submitBtn.addEventListener('click', (e) => {
            let selectElem = document.getElementById('cashflow-select');
            let optionsIndex = selectElem.selectedIndex;
            let anOption = selectElem.options[optionsIndex].value;
            let cashflowItemAmt = document.createElement('p');

            if (itemCount <= 7) {
                this.cashflowItems = document.createElement('div');

                let cashflowItemName = document.createElement('p');
                cashflowItemName.textContent = this.inputtedDesc;
                cashflowItemName.style.color = '#3E3E3E';
                this.cashflowItems.appendChild(cashflowItemName);

                cashflowItemAmt.textContent = "$" + this.inputtedAmount;
                cashflowItemAmt.style.color = anOption === "income" ? '#558052' : '#FF0000';
                this.cashflowItems.appendChild(cashflowItemAmt);

                if (anOption === "income") {
                    this.cashflowItems.classList.add('cashflow__item');
                } else {
                    this.cashflowItems.classList.add('cashflow__item--expense');
                }

                mainCashflowWrapper.appendChild(this.cashflowItems);
                itemCount++;
                
                callback({
                    amount: this.inputtedAmount,   // The actual amount entered
                    type: anOption                // Whether it's "income" or "expense"
                });
            }
        });
    }
    
    updateDOMSummaryValue(sum) {
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = `$${(sum).toFixed(2)}`;  
    }
}


