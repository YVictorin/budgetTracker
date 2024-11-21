
class DOMInteractionHandler {
     submitBtn = document.getElementById('submitBtn');

     constructor() {}


    addInputsToDOM(){}   // TODO make this functionality

    getDOMInputValue(callback){
        const inputs = document.getElementsByTagName('input');

        const [userDesc] = inputs;   //gets the first input
        const [_, userAmt] = inputs; // gets the second input

       this.submitBtn.addEventListener('click', () => {
           const userChoicesVal = userDesc.value + ' ' + userAmt.value;
           callback(userChoicesVal);
       })

    }

    processDOMInputValues() {
        this.getDOMInputValue(function(value) {
            console.log(value);
        })
    }

    clearDOMInputValues() {

    }

    updateDOMSummaryValue() {

    }

  
}