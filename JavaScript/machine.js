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
