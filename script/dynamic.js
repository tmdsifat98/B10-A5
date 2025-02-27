document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("donation-sec").classList.add("hidden");
  document.getElementById("history-sec").classList.remove("hidden");
});
document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("donation-sec").classList.remove("hidden");
  document.getElementById("history-sec").classList.add("hidden");
});

const cardSection = document.querySelectorAll(".card");
for (let i = 0; i < cardSection.length; i++) {
  let btn = cardSection[i].querySelector(".bg-primary");
  btn.addEventListener("click", function () {
    let cardDonate = cardSection[i].querySelector(".amount");
    let cardAmountnNum = parseInt(cardDonate.innerText);
    const inputValue = parseInt(
      cardSection[i].querySelector(".outline-none").value
    );
    const totalMoney = document.getElementById("total-money");
    let totalMoneyNum = parseInt(totalMoney.innerText);

    let requireTotalMoney = totalMoneyNum - inputValue;
    let newAmount = inputValue + cardAmountnNum;
    if (!isNaN(inputValue)) {
      if (newAmount < inputValue) {
        alert("insufficient balance");
      } 
      else {
        if (totalMoney.innerText >= 0) {
          totalMoney.innerText = requireTotalMoney;
          
          cardDonate.innerText = newAmount;
        } else {
          alert("You have insufficient balance");
        }
      }
    } else {
      alert("Please input a valid amount");
    }
  });
}
