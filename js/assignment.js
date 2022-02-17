// getting Input value and converting it
function inputData(amount){
    var inputAmount = document.getElementById(amount +'-amount');
    var inputExpense = parseFloat(inputAmount.value);
    // inputAmount.value = '';
    return inputExpense;
}
// calling function of calculate button, get error, total expenses and rest balance
function expenseCalculate(){
    var salaryAmount = inputData('salary')
    var getFoodAmount = inputData('food');
    var getRentAmount = inputData('rent');
    var getClothesAmount = inputData('clothes');
    // total expense of month 
    var totalExpense = getFoodAmount + getRentAmount + getClothesAmount;
    // salary case
    if (isNaN(salaryAmount) || salaryAmount < 0){
        var errorMassage = document.getElementById('error');
        errorMassage.style.display = 'block'; 
    }
    // Food case
    else if (isNaN(getFoodAmount) || getFoodAmount < 0){
        var errorMassageFood = document.getElementById('error-food');
        errorMassageFood.style.display = 'block';
    }
    // rent case 
    else if (isNaN(getRentAmount) || getRentAmount < 0){
        var errorMassageRent = document.getElementById('error-rent');
        errorMassageRent.style.display = 'block';
    }
    // clothes case
    else if (isNaN(getClothesAmount)  || getClothesAmount < 0){
        var errorMassageClothes = document.getElementById('error-clothes');
        errorMassageClothes.style.display = 'block';
    }
    // over ammount case
    else if(totalExpense > salaryAmount){
        var overExpense = document.getElementById('over-expense');
        overExpense.style.display = 'block';
    }
    // setting inner text of total balance
    else{
        var allTotalExpense = document.getElementById('total-expense');
        allTotalExpense.innerText = totalExpense;
        var totalBalance  = document.getElementById('balance');
        totalBalance.innerText = salaryAmount - totalExpense;
    } 
}
// calling save button for getting save parchentage and remain balance
function saveParchentage(){
    var parchentageAmount = inputData('save');
    var balance = document.getElementById('balance');
    var totalBalance = parseFloat(balance.innerText);
    var restBalance = (totalBalance / 100) * parchentageAmount;
// ratio of balnces case
    if(totalBalance > restBalance ){
        document.getElementById('save-balance').innerText = restBalance;
        document.getElementById('rest-balance').innerText = totalBalance - restBalance;
    }
    // error case
    else{
        var errorMassageClothes = document.getElementById('save-error');
        errorMassageClothes.style.display = 'block';
    }
}