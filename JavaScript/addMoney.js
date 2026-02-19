document.getElementById("add-money-btn").addEventListener('click', function(){
    console.log("Button clicked");
    // ========= Get Bank Account ===========
    const bankAccount = getValueFormInput('add-money-bank');
    if(bankAccount == 'Select Back'){
        alert("Please Select The Bank");
        return;
    }

    // ========= Get Bank Account Number ===========

    const accountNumber = getValueFormInput('add-money-number');
    if(accountNumber.length !=11){
        alert("Your Account Number is Not valid");
        return;
       }



    // ========= Add Amount ===========
       const addAmount = getValueFormInput('add-money-amount');
       const currentBalance = getBalance() ;
       const newBalance = currentBalance + Number(addAmount) ;
         if(newBalance < 0){
            alert("Your Amount is not available.");
            return;
            }
         console.log(newBalance);


    //  ===== Get The Pin Verify ==============

      const pin = getValueFormInput("add-money-pin")

      if(pin === "1234"){
         alert(`Add Money Successfully Complete 
            Bank Name: ${bankAccount} 
            Date: ${new Date()}`);
          setBalance(newBalance);
         
      }else{
         alert('Your Pin Number Is Not Valid');
         return;
      }

   })


