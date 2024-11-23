
const budgetTracker = new BudgetTrackerHandler();
budgetTracker.updateGrandTotal();

// Selectors
// const cashflowSelect = document.getElementById('cashflow-select'); // Dropdown to select income or expense
// const descriptionInput = document.querySelector('.balance__input:nth-child(2)'); // Input for transaction description
// const amountInput = document.querySelector('.balance__input:nth-child(3)'); // Input for transaction amount
// const submitBtn = document.getElementById('submitBtn'); // Button to submit a new transaction
// const grandTotalElement = document.getElementById('grand-total'); // Element displaying the grand total balance
// const cashflowWrapper = document.querySelector('.main__cashflow-wrapper'); // Container for the cashflow record list
//
// // State
// let grandTotal = 0; // Variable to track the total balance (income - expenses)
//
// // Utility functions
//
// // Formats a number as a currency string (e.g., $123.45)
// function formatCurrency(value) {
//     return `$${parseFloat(value).toFixed(2)}`; // Ensures the number is formatted to two decimal places
// }
//
// // Updates the grand total by adding or subtracting the specified amount
// function updateGrandTotal(amount, isIncome) {
//     grandTotal += isIncome ? amount : -amount; // Add for income, subtract for expense
//     grandTotalElement.textContent = formatCurrency(grandTotal); // Update the displayed grand total
// }
//
// // Adds a new transaction record to the cashflow list
// function addCashflowRecord(type, description, amount) {
//     // Create a new div element for the record
//     const recordDiv = document.createElement('div');
//     recordDiv.classList.add('cashflow__wrapper', 'cashflow__item'); // Add base styles for the record
//
//     // If the transaction is an expense, add a specific class for styling
//     if (type === 'expense') {
//         recordDiv.classList.add('cashflow__item--expense');
//     }
//
//     // Set the inner HTML of the record, including description, date, amount, and a delete button
//     recordDiv.innerHTML = `
//         <p>${description}</p> <!-- Transaction description -->
//         <span>${new Date().toLocaleDateString()}</span> <!-- Current date -->
//         <p>${formatCurrency(amount)}</p> <!-- Transaction amount -->
//         <div class="cashflow__item-trash">
//             <i class="fa-solid fa-trash-can"></i> <!-- Delete icon -->
//         </div>
//     `;
//
//     // Add an event listener to the delete button
//     const deleteBtn = recordDiv.querySelector('.fa-trash-can');
//     deleteBtn.addEventListener('click', () => {
//         const recordAmount = parseFloat(amount); // Parse the transaction amount
//         updateGrandTotal(recordAmount, type !== 'expense'); // Reverse the transaction in the grand total
//         recordDiv.remove(); // Remove the record from the DOM
//     });
//
//     // Append the new record to the cashflow wrapper
//     cashflowWrapper.appendChild(recordDiv);
// }
//
// // Event Listeners
//
// // Add an event listener for the submit button
// submitBtn.addEventListener('click', () => {
//     // Get the selected transaction type (income or expense)
//     const type = cashflowSelect.value;
//
//     // Get and trim the description input value
//     const description = descriptionInput.value.trim();
//
//     // Parse the amount input value as a floating-point number
//     const amount = parseFloat(amountInput.value.trim());
//
//     // Validate input fields: all fields must be filled, and amount must be positive
//     if (type === 'default' || !description || isNaN(amount) || amount <= 0) {
//         alert('Please provide valid inputs for all fields.'); // Show an alert if validation fails
//         return; // Exit the function without adding the transaction
//     }
//
//     // Determine if the transaction is income or expense
//     const isIncome = type === 'income';
//
//     // Update the grand total based on the transaction
//     updateGrandTotal(amount, isIncome);
//
//     // Add the transaction record to the cashflow list
//     addCashflowRecord(type, description, amount);
//
//     // Clear input fields after submission
//     cashflowSelect.value = 'default'; // Reset the dropdown to its default value
//     descriptionInput.value = ''; // Clear the description input
//     amountInput.value = ''; // Clear the amount input
// });
//
