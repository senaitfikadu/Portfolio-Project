var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["casher_name"] = document.getElementById("casher_name").value;
    formData["price"] = document.getElementById("price").value;
    formData["quantity"] = document.getElementById("quantity").value;
    formData["date"] = document.getElementById("date").value;
    formData["waiter_name"] = document.getElementById("waiter_name").value
    formData["subtotal"] = formData["quantity"] * formData["price"]
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.casher_name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.price;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.quantity;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.date;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.waiter_name;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = data.subtotal;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("casher_name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("date").value = "";
    document.getElementById("waiter_name").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("casher_name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("price").value = selectedRow.cells[2].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("waiter_name").value = selectedRow.cells[5].innerHTML;
    document.getElementById("subtotal").value = selectedRow.cells[3].innerHTML * selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.casher_name;
    selectedRow.cells[2].innerHTML = formData.price;
    selectedRow.cells[3].innerHTML = formData.quantity;
    selectedRow.cells[4].innerHTML = formData.date;
    selectedRow.cells[5].innerHTML = formData.waiter_name;
    selectedRow.cells[6].innerHTML = formData.subtotal;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    return isValid;
}