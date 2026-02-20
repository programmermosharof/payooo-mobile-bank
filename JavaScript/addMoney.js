document.getElementById("add-money-btn").addEventListener('click', function(){
  
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

            //   ======= History Container ========
            const history = document.getElementById('history-container');

            //   ======= New Div Create ========
            const newHistory = document.createElement('div');

            //   ======= New Div Add In Html ========
            newHistory.innerHTML =`
            <div class="history-card p-5 bg-base-100">
            Add Money Successfully Complete 
            Bank Name: ${bankAccount}, 
            Account Number: ${accountNumber} 
            Date: ${new Date()}
            </div>
            `;

            //   ======= New Div Add In Html Push ========
            history.append(newHistory);}
            
            else{
         alert('Your Pin Number Is Not Valid');
         return;
      }

   });



// ============================== <!-- Get Bonus Section--> =============================
//=======================================================================================

document.getElementById('get-bonus-btn').addEventListener('click', function(){

       // ========= Coupon Code  ===========

    const couponCode = getValueFormInput('get-bonus-code');

   //  Validate Coupon Code 
    if(couponCode.length !=6){
        alert("Please Enter a Valid 6 digit Coupon ");
        return;
       }

      //  Coupon Code Check 

            if(couponCode === '123456'){
        const currentBalance = getBalance();
        const newBalance = currentBalance + 50;
        setBalance(newBalance);

        // History te add 
        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="history-card p-5 bg-base-100">
            Bonus Added Successfully! 
            Amount: $50 
            Date: ${new Date()}
        </div>`;
        history.append(newHistory);

        alert("Congratulations! $50 Bonus Added!");

    } else {
        alert("Invalid Coupon Code!");
    }
});

