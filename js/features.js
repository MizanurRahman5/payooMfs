document.getElementById('diposit-btn').addEventListener('click', function(){
    document.getElementById('cash-out-container').classList.add('hidden');
    document.getElementById('add-amount-container').classList.remove('hidden')
})
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-container').classList.remove('hidden');
    document.getElementById('add-amount-container').classList.add('hidden')
})