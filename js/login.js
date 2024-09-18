
// step 1 event Handeler add
document.getElementById('login-btn').addEventListener('click', function(event){
    // console.log('clied')
    event.preventDefault();

    // step 2 get phone Number
    const phoneNumber = document.getElementById('phone-number');
    console.log(phoneNumber.value)

})