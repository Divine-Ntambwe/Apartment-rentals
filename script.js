const closePopup = document.getElementById("close-popup");
const popup = document.getElementById("subscribe-popup");
const subscribeNavbar = document.getElementById("subscribe-navbar")
const subscribePopupButton = document.getElementById("subscribe-popup-button")
const subscribe = document.getElementById("subscribe");
const diningRoom = document.getElementById("dining-room");
const bigImg = document.getElementById("livingroom");
const bedroom = document.getElementById("bedroom");
const livingRoom2 = document.getElementById("living-room2")
const roomLabel = document.getElementById("room-label")

diningRoom.addEventListener("click",() => {
    const imgSrc = diningRoom.getAttribute("src");
    bigImg.setAttribute("src",imgSrc);
    roomLabel.textContent = "Dining Room"
})

bedroom.addEventListener("click",() => {
    const imgSrc = bedroom.getAttribute("src");
    bigImg.setAttribute("src",imgSrc);
    roomLabel.textContent = "Bedroom"
})

livingRoom2.addEventListener("click",() => {
    const imgSrc = livingRoom2.getAttribute("src");
    bigImg.setAttribute("src",imgSrc);
    roomLabel.textContent = "Living Room"
})

closePopup.addEventListener("click", () => {
    popup.style.display = "none"
})

subscribeNavbar.addEventListener("click",() => {
    popup.style.display = "flex"
})

subscribePopupButton.addEventListener("click",()=> {
    alert("you have subscribed")
})

subscribe.addEventListener("click",()=> {
    alert("you have subscribed")
})
