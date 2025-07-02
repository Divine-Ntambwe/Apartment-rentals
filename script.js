const closePopup = document.getElementById("close-popup");
const popup = document.getElementById("subscribe-popup");
const subscribeNavbar = document.getElementById("subscribe-navbar");
const subscribePopupButton = document.getElementById("subscribe-popup-button");
const openHorNavbar = document.getElementById("open-hor-navbar");
const navBar = document.getElementById("nav-bar");
const popupBlock = document.getElementById("popup");
const closeNavbar = document.getElementById("close-navbar")
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
    if (openHorNavbar.style.display !== "flex"){
    popup.style.display = "none"
    } else {
        popupBlock.style.display = "none"
    }
})

subscribeNavbar.addEventListener("click",() => {
    popup.style.display = "flex"
    popupBlock.style.display = "flex"
    popup.style.zIndex = "10"
})

subscribePopupButton.addEventListener("click",()=> {
    alert("you have subscribed")
})

openHorNavbar.addEventListener("click",()=> {
navBar.style.display = "block";
navBar.style.zIndex = '1'
popupBlock.style.display = "none";
popup.style.display = "flex"
popup.style.zIndex = "0"
openHorNavbar.style.display = "flex"
})

const handleCloseNavbar = () => {
if (popupBlock.style.display === "flex") return;
navBar.style.display = "none";
popup.style.display = "none"
popup.style.zIndex = "0"
navBar.style.zIndex = '0'
popup.style.zIndex = "10"
}

closeNavbar.addEventListener("click",() => {
navBar.style.display = "none";
popup.style.display = "none"
popup.style.zIndex = "0"
navBar.style.zIndex = '0'
popup.style.zIndex = "10"
})

popup.addEventListener("click",() => {

if (popupBlock.style.display === "flex") return;
navBar.style.display = "none";
popup.style.display = "none"
popup.style.zIndex = "0"
navBar.style.zIndex = '0'
popup.style.zIndex = "10"
})
subscribe.addEventListener("click",()=> {
    alert("you have subscribed")
})
