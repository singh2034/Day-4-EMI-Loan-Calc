function getEmi() {
  let amount = document.getElementById("amount").value;
  let tenure = document.getElementById("tenure").value;
  let interest = document.getElementById("rate").value;

  // calculate Interest
  let interestRate = (amount * (interest * 0.01)) / tenure;

  //   emi calculate
  const total = (amount / tenure + interestRate).toFixed(2);
  document.getElementById("emi").innerHTML = "EMI : &#8377;" + total + "/-";
}
