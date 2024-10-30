let totalMonthlyAmount = 0;

function newRow() {
    // created variable with same name as the input and added to dom by targeting the value of the data-testid="info's"
    let firstName = document.querySelector('[data-testid="firstNameInput"]').value;
    let lastName = document.querySelector('[data-testid="lastNameInput"]').value;
    let id = document.querySelector('[data-testid="idInput"]').value;
    let title = document.querySelector('[data-testid="titleInput"]').value;
    let annualSalary = parseFloat(document.querySelector('[data-testid="annualSalaryInput"]').value);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';



    let tableBody = document.getElementById('tableBody');
    let newRow = tableBody.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5)

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = id;
    cell4.innerHTML = title;
    cell5.innerHTML = annualSalary;
    cell6.innerHTML = '<button onclick="removeRow(this)">Delete</button>';

    document.querySelector('[data-testid="firstNameInput"]').value = '';
    document.querySelector('[data-testid="lastNameInput"]').value = '';
    document.querySelector('[data-testid="idInput"]').value = '';
    document.querySelector('[data-testid="titleInput"]').value = '';
    document.querySelector('[data-testid="annualSalaryInput"]').value = '';
    document.getElementById('totalAmount').innerhtml.value


}

let monthlyAmount= cell5 / 12;


function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);


}
// clicking button which will run function. go grab table body to add data 
// do query selector for all input and taking inputs adding to object, object gets pushed into array and re display it into array and copy to inner html
// render to dom