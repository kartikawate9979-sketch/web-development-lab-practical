let expenses = [];

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name === "" || amount <= 0 || category === "") {
        alert("Please enter all details!");
        return;
    }

    let expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    showExpenses();
}

function showExpenses() {

    let list = document.getElementById("expenseList");
    let filter = document.getElementById("filter").value;

    list.innerHTML = "";

    let total = 0;

    expenses.forEach(function(expense, index) {

        total += expense.amount;

        if (filter === "All" || filter === expense.category) {

            let li = document.createElement("li");

            li.textContent = expense.name + " - ₹" +
                expense.amount + " (" + expense.category + ") ";

            let btn = document.createElement("button");

            btn.textContent = "Delete";
            btn.className = "delete";

            btn.onclick = function() {
                expenses.splice(index, 1);
                showExpenses();
            };

            li.appendChild(btn);
            list.appendChild(li);
        }
    });

    document.getElementById("total").innerText = total;
}