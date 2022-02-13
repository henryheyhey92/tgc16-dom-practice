// PLACE YOUR CODE HERE

//for topup
//1 ~ 3
let amount = 0;
let walletAmt = 0;
let topup = document.querySelector('#topup');
let acc = document.querySelector('#account')
let wallet = document.querySelector('#other-wallet');
let spendbtn = document.querySelector('#spend');

topup.addEventListener('click', function(){
    amount += 10;
    acc.innerHTML = amount;
});

let transfer = document.querySelector('#trans');
let transWalltoBalance = document.querySelector('#transback');
//4.
transfer.addEventListener('click', function(){
    if(amount < 0){
        alert('unable to transfer, no balance');
    }else{
        walletAmt += 10;
        amount -= 10;
        wallet.innerHTML = walletAmt;
        acc.innerHTML = amount;
        console.log(amount);
    }
});

//5.
transWalltoBalance.addEventListener('click', function(){
    if(walletAmt == 0){
        alert('no balance in wallet');
    }else{
        walletAmt -= 10;
        amount += 10;
        wallet.innerHTML = walletAmt;
        acc.innerHTML = amount;
    }
});

//challenge
spendbtn.addEventListener('click', function(){
    let spendInput = document.querySelector('#amount').value;

    if(amount < 0){
        alert('amount balance 0, unable to pay');
    }else if (spendInput > amount){
        alert('amount balance insufficient to pay')
    }else{
        amount -= spendInput;
        acc.innerHTML = amount;
    }
})