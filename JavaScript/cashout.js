   document.getElementById('cashout-btn').addEventListener('click', function(){
      
      // 1: ============== Get The Agent Number $ Validate ==============
      const cashoutNumber = getValueFormInput("cashout-number");
      
      //2: ============== Cashout Amount ==============
         const cashoutAmount = getValueFormInput('cashout-amount');
         
      // 3: ===== Get The Current Balance ==============
      const balanceElement = document.getElementById('balance');
      const balance = balanceElement.innerText;
      console.log(balance);

      // 4: ===== Calculate new Balance ==============

         const newBalance = Number(balance) - Number(cashoutAmount) ;
         if(newBalance < 0){
            alert("Your Amount is not available.");
            return;
            }
         console.log(newBalance);

      // 5: ===== Get The Pin Verify ==============

      const pin = getValueFormInput("cashout-pin")

      if(pin === "4321"){
         alert("Your Cashout Successfully Complete");
            balanceElement.innerText = newBalance;
         return;
         
      }else{
         alert('Your Pin Number Is Not Valid');
         return;
      }

   })













// document.getElementById('cashout-btn').addEventListener('click', function(){

//     // 1: ============== Get The Agent Number $ Validate ==============
//     const cashoutNumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);

//     if(cashoutNumber.length !=11){
//         alert("Your Number is Not valid");
//         return;
//     }
    
//     //2: ============== Cashout Amount ==============
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);

//     // 3: ===== Get The Current Balance ==============
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     console.log(balance);

//      // 4: ===== Calculate new Balance ==============
//      const newBalance = Number(balance) - Number(cashoutAmount) ;
//      if(newBalance < 0){
//         alert("Your Amount is not available.");
//         return;
//      }

     

//      // 5: ===== Get The Pin Verify ==============
//      const cashoutPinInput = document.getElementById("cashout-pin")
//      const pin = cashoutPinInput.value;

//      if(pin === "4321"){
//         alert("Your Cashout Successfully Complete");
//           balanceElement.innerText = newBalance;
//         return;
      
//      }else{
//         alert('Your Pin Number Is Not Valid');
//         return;
//      }

// })