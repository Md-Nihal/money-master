function inputData(amount){
    var inputAmount = document.getElementById(amount +'-amount');
    var inputExpense = parseFloat(inputAmount.value);
    return inputExpense;
}

function expenseCalculate(){
    var salaryAmount = inputData('salary')
    var getFoodAmount = inputData('food');
    var getRentAmount = inputData('rent');
    var getClothesAmount = inputData('clothes');
    var totalExpense = getFoodAmount + getRentAmount + getClothesAmount;
    var allTotalExpense = document.getElementById('total-expense');
    allTotalExpense.innerText = totalExpense;
    var totalBalance  = document.getElementById('balance');
    totalBalance.innerText = salaryAmount - totalExpense;
}