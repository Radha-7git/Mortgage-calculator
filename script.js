const mortgageamount = document.getElementById("mortgageamount");
const mortgageterm = document.getElementById("mortgageterm");
const interestrate = document.getElementById("interestrate");
const repayment = document.getElementById("repayment");
const interestonly = document.getElementById("interestonly");
const resultoutput = document.getElementById("resultoutput");
const resultoutput1 = document.getElementById("resultoutput1");
const mybutton = document.getElementById("mybutton");
const clear = document.getElementById("clear");

mybutton.onclick = function(){
  let p = mortgageamount.value;
  let r = interestrate.value;
  r = (r/100)/12;
  let power;
  let n = mortgageterm.value;
  n = n*12;
  power = Math.pow(1 + r, n);
  let m;
  if(repayment.checked){
     m = (p * r * (power)) / ((power) - 1);
    resultoutput.textContent = `$${m.toFixed(2)}`;
    resultoutput1.textContent = `$${(m*n).toFixed(2)}`;
  }
  else if(interestonly.checked){
    m = p*r;
    resultoutput.textContent = `$${m.toFixed(2)}`;
    resultoutput1.textContent = `$${(m * n).toFixed(2)}`;
  }
}
clear.onclick = function(){
  mortgageamount.value = "";
  mortgageterm.value = "";
  interestrate.value ="";
  repayment.checked = false;
  interestonly.checked = false;
  resultoutput.textContent = "";
  resultoutput1.textContent = "";
}

