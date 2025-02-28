// toogle click effects
document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    const historyBtn = document.getElementById("history-btn");
    const donationBtn = document.getElementById("donation-btn");
    const donationSec = document.getElementById("donation-sec");
    const historySec = document.getElementById("history-sec");
    donationSec.classList.add("hidden");
    donationBtn.classList.remove("bg-primary");
    historySec.classList.remove("hidden");
    historyBtn.classList.add("bg-primary");
  });
document
  .getElementById("donation-btn")
  .addEventListener("click", function (event) {
    const historyBtn = document.getElementById("history-btn");
    const donationBtn = document.getElementById("donation-btn");
    const donationSec = document.getElementById("donation-sec");
    const historySec = document.getElementById("history-sec");
    donationSec.classList.remove("hidden");
    donationBtn.classList.add("bg-primary");
    historySec.classList.add("hidden");
    historyBtn.classList.remove("bg-primary");
  });

// !calculation for donation card
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
    let newAmount = inputValue + cardAmountnNum;
    if (!isNaN(inputValue) && inputValue > 0) {
      if (totalMoney.innerText >= 0) {
        let requireTotalMoney = totalMoneyNum - inputValue;
        if (requireTotalMoney < 0) {
          alert("insufficient balance");
        } else {
          const modal = document.getElementById("modal");
          modal.classList.remove("hidden");
          document
            .getElementById("modal-btn")
            .addEventListener("click", function () {
              document.getElementById("modal").classList.add("hidden");
            });
          totalMoney.innerText = requireTotalMoney;
          cardDonate.innerText = newAmount;
          cardSection[i].querySelector(".outline-none").value = "";

          const historyTitle =
            cardSection[i].querySelector(".text-3xl").innerText;
          const titleMain = historyTitle.replace("Donate for", "");
          const historySection = document.getElementById("history-sec");
          const div = document.createElement("div");
          document.getElementById("transaction").classList.add("hidden");
          div.classList.add(
            "border-2",
            "rounded-md",
            "p-6",
            "w-3/4",
            "mx-auto",
            "mb-3"
          );
          div.innerHTML = `
          <h2 class="text-2xl font-semibold mb-4">${inputValue} Taka is Donated for ${titleMain}</h2>
          <p class="text-gray-500">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
          `;
          historySection.appendChild(div);
        }
      }
    } else {
      alert("Please input a valid amount");
    }
  });
}
