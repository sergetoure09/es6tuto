import * as mortgage from '../mortgage'


document.getElementById('calcBtn').addEventListener('click',()=> {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let mp=document.getElementById("monthlyPayment")
    let mr=document.getElementById("monthlyRate")
    
    let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
    mp.innerHTML = monthlyPayment.toFixed(2);
    mr.innerHTML = (monthlyRate * 100).toFixed(2);
    amortization.forEach(month => console.log(month));
   
});