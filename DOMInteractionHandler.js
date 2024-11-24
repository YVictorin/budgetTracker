class DOMInteractionHandler {
    submitBtn = document.getElementById('submitBtn');
    inputtedAmount;
    inputtedDesc;
    cashflowItems;

    constructor() {}
    

    getDOMInputValue(callback) {
        const inputs = document.getElementsByTagName('input');
        
        //array destructuring
        const [userDesc] = inputs;  //retrieves the description
        const [_, userAmt] = inputs;  //retrieves the amount

        this.submitBtn.addEventListener('click', (e) => {
            const userChoicesVal = userDesc.value + ' ' + userAmt.value;
            callback(userChoicesVal);
        });
    }

    processDOMInputValues(callback) {
        let itemCount = 0;
        const mainCashflowWrapper = document.querySelector('.main__cashflow-wrapper');
        const submitBtn = document.getElementById('submitBtn');
        let errorMsgs = document.querySelector('.balance__input--error');
        let balanceInputs = document.querySelectorAll('.balance__input');
        let dollarSign = document.querySelector('.balance__input--dollar-sign');


        this.getDOMInputValue((value) => {
            let userAnswers = value.split(" ");
            this.inputtedAmount = userAnswers[1];
            this.inputtedDesc = userAnswers[0];
        });

        submitBtn.addEventListener('click', (e) => {
            //error handling
            if(!this.inputtedAmount) {
                errorMsgs.style.visibility = 'visible';
                balanceInputs.forEach(input => {
                    input.style.borderColor = '#8E1010';
                })
                
                dollarSign.style.borderColor = '#8E1010';
                dollarSign.style.color = '#8E1010';
            } else {
                errorMsgs.style.visibility = 'hidden';
                balanceInputs.forEach(input => {
                    input.style.borderColor = '#558052';
                })
                dollarSign.style.borderColor = '#558052';
                dollarSign.style.color = '#558052';

                
                
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

                    //activate the callback function
                    callback({
                        amount: this.inputtedAmount,   // The actual amount entered
                        type: anOption                // Whether it's "income" or "expense"
                    });

                }
            }
        });
    }
    
    updateDOMSummaryValue(sum) {
        const grandTotal = document.getElementById('grand-total');
        grandTotal.textContent = `$${(sum).toFixed(2)}`;  
    }
    
}


