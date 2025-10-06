function addHistory(action, amount, status="") {
    let history = document.getElementById("history");
    let time = new Date().toLocaleTimeString();
    history.value += `[${time}] ${action} : ${amount} ${status}\n`;
}

function deposit() {
    let amount = parseInt(document.getElementById("amount").value);
    if(amount > 0){
        let acc = document.getElementById("inputAccount");
        let cash = document.getElementById("inputCash");

        acc.value = parseInt(acc.value) + amount;
        cash.value = parseInt(cash.value) - amount;

        addHistory("Deposit", amount, "✅");
    } else {
        addHistory("Deposit", amount, "❌ Invalid amount");
    }
}

function withdraw() {
    let amount = parseInt(document.getElementById("amount").value);
    let acc = document.getElementById("inputAccount");
    let cash = document.getElementById("inputCash");

    if(amount > 0 && amount <= parseInt(acc.value)){
        acc.value = parseInt(acc.value) - amount;
        cash.value = parseInt(cash.value) + amount;

        addHistory("Withdraw", amount, "✅");
    } else {
        addHistory("Withdraw", amount, "❌ Not enough balance");
    }
}

function currenct_change(){
    
}
