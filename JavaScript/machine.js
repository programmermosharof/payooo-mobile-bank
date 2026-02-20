// Machine id ==> Input Value 
function getValueFormInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id ,value);
    return value;

}
// Machine > Balance 
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log('Current Balance:', Number(balance));
    return Number(balance)

}

// Machine > Balance Update
function setBalance(amount){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = amount;
}


// Machine ID > Hide All > Show ALL
function showOnly(id){
   const addMoney = document.getElementById('add-money');
   const cashout = document.getElementById('cashout');
   const history = document.getElementById('history');
   const transfer = document.getElementById('transfer-money');
   const coupon = document.getElementById('get-bonus')
   


    // All Content Hide 
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    transfer.classList.add('hidden')
    coupon.classList.add('hidden')
    //  Click Button then Show Content
    const Selected = document.getElementById(id);
    Selected.classList.remove('hidden');


}