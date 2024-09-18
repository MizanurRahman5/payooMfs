
// step 1 event Handeler add
document.getElementById('login-btn').addEventListener('click', function(event){
    // console.log('clied')
    event.preventDefault();

    // step 2 get phone Number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber.value)
    // console.log(phoneNumber, pinNumber)
    phoneNumber.value = ' ';

    if (phoneNumber === '5' && pinNumber === '1234'){
        // console.log('you Are logged')
        window.location.href = '/home.html';
    }else{
        alert('your pin or Number encorrect');
    }


})