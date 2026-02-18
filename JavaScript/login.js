document.getElementById("login-btn").addEventListener('click', function(){
    // 1: ============== Get The Mobile Number Input ==============
    const numberInput =document.getElementById('input-number');
    const contactNumber = numberInput.value;
    
    // 2: ============== Get The Pin Input ==============

    const pinInput = document.getElementById('input-pin');
    
    const checkPin = pinInput.value;

    // ============== check Mobile number and pin Number ==============

    if(contactNumber === '01978962383' && checkPin === '4321'){
        alert('Your Login Successfully complete ');

        window.location.assign("/home.html");    
    }else{
        alert('Yor Password is Wrong')
        return;
    }

})