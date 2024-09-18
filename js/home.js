document.getElementById('add-mony-btn').addEventListener('click', function(event){
    event.preventDefault();

    const addMony = document.getElementById('add-amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    
    // console.log(currentBlance);

    // console.log(addMony, pinNumber)
    if(pinNumber === '1234'){
        // console.log(addMony)
        const currentBlance = document.getElementById('current-blance').innerText;
        const addMonyNumber = parseFloat(addMony)
        const currentBlanceNumber = parseFloat(currentBlance)
        // console.log(currentBlanceNumber);
        // console.log(addMonyNumber);
        let newBlance = addMonyNumber + currentBlanceNumber;
        document.getElementById('current-blance').innerText = newBlance;
        
        

    }else{
        alert('Your Pin or Number Incorrect');
    }
    

})

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const pinNumber = document.getElementById('pin-number2').value;

    // console.log(cashOutAmount,pinNumber)
    if(pinNumber === '1234'){
        // console.log('cash out succesfull')
        const currentBlance = document.getElementById('current-blance').innerText;
        const currentBlanceNumber = parseFloat(currentBlance);
        const cashOutAmountNumber = parseFloat(cashOutAmount);
        const newBlance = currentBlanceNumber - cashOutAmountNumber;
        document.getElementById('current-blance').innerText = newBlance;
    }else{
        alert('Pin number incorrect');
    }

})