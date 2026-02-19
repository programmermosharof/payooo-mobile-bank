   document.getElementById('cashout-btn').addEventListener('click', function(){
      
      // 1: ============== Get The Agent Number $ Validate ==============
      const cashoutNumber = getValueFormInput("cashout-number");
      
       if(cashoutNumber.length !=11){
        alert("Your Number is Not valid");
        return;
       }

      
      //2: ============== Cashout Amount ==============
         const cashoutAmount = getValueFormInput('cashout-amount');
         
      // // 3: ===== Get The Current Balance ==============
      // const balanceElement = document.getElementById('balance');
      // const balance = balanceElement.innerText;
      // console.log(balance);
      const currentBalance = getBalance();

      // 4: ===== Calculate new Balance ==============

         const newBalance = currentBalance - Number(cashoutAmount) ;
         if(newBalance < 0){
            alert("Your Amount is not available.");
            return;
            }
         console.log(newBalance);

      // 5: ===== Get The Pin Verify ==============

      const pin = getValueFormInput("cashout-pin")

      if(pin === "1234"){
         alert("Your Cashout Successfully Complete");
          setBalance(newBalance);
          //   ======= History Container ========
            const history = document.getElementById('history-container');

            //   ======= New Div Create ========
            const newHistory = document.createElement('div');

            //   ======= New Div Add In Html ========
            newHistory.innerHTML =`
            <div class="history-card p-5 bg-base-100">
            Cashout Successfully Complete 
            Account Number: ${cashoutNumber}, 
            Amount: ${cashoutAmount} 
            Date: ${new Date()}
            </div>
            `;

            //   ======= New Div Add In Html Push ========
            history.append(newHistory);
            
         
      }else{
         alert('Your Pin Number Is Not Valid');
         return;
      }

   });


   // ============================= Transfer Money Section ============================
   // =================================================================================

      document.getElementById('transfer-btn').addEventListener('click', function(){
      
      // 1: ============== Get The Agent Number $ Validate ==============
      const transferNumber = getValueFormInput("transfer-number");
      
       if(transferNumber.length !=11){
        alert("Your Number is Not valid");
        return;
       }

      
      //2: ============== Cashout Amount ==============
         const transferAmount = getValueFormInput('treansfer-amount');
         
      // // 3: ===== Get The Current Balance ==============
      // const balanceElement = document.getElementById('balance');
      // const balance = balanceElement.innerText;
      // console.log(balance);
      const currentBalance = getBalance();

      // 4: ===== Calculate new Balance ==============

         const newBalance = currentBalance - Number(transferAmount) ;
         if(newBalance < 0){
            alert("Your Amount is not available.");
            return;
            }
         console.log(newBalance);

      // 5: ===== Get The Pin Verify ==============

      const pin = getValueFormInput("transfer-pin")

      if(pin === "1234"){
         alert("Your Transfer Successfully Complete");
          setBalance(newBalance);
          //   ======= History Container ========
            const history = document.getElementById('history-container');

            //   ======= New Div Create ========
            const newHistory = document.createElement('div');

            //   ======= New Div Add In Html ========
            newHistory.innerHTML =`
            <div class="history-card p-5 bg-base-100">
            Transfer Money Successfully Complete 
            Account Number: ${transferNumber}, 
            Amount: ${transferAmount} 
            Date: ${new Date()}
            </div>
            `;

            //   ======= New Div Add In Html Push ========
            history.append(newHistory);
            
         
      }else{
         alert('Your Pin Number Is Not Valid');
         return;
      }

   });















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