const closePopup = document.getElementById("close-popup");
const popup = document.getElementById("subscribe-popup");
const subscribeNavbar = document.getElementById("subscribe-navbar")
const subscribePopupButton = document.getElementById("subscribe-popup-button")


closePopup.addEventListener("click", () => {
    popup.style.display = "none"
})

subscribeNavbar.addEventListener("click",() => {
    popup.style.display = "flex"
})

subscribePopupButton.addEventListener("click",()=> {
    alert("you have subscribed")
})