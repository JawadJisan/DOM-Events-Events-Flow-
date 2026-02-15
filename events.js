const button = document.getElementById("btn")
console.log(button)

// Method 1 (Recomended)
button.addEventListener('click', function () {
    console.log("Clicked")
})

button.addEventListener('click', () => {
    console.log("Clicked")
})
button.addEventListener('click', handleClick)

function handleClick() {
    console.log("Clicked")
}


const eventBtn = document.getElementById("event-btn")

eventBtn.addEventListener("click", function (event) {
    console.log("Event Btn Clicked")
    console.log(event)
    console.log(event.type)
    console.log(event.target)
    console.log(event.currentTarget)


    console.log(event.clientX, event.clientY)
})


// Removing Event Listeners
function handleClick2() {
    console.log("Clicked New")
}
eventBtn.addEventListener("click", handleClick2)
eventBtn.removeEventListener("click", handleClick2)


// Mouse & Click Events
const btn = document.getElementById("click-btn")
const counter = document.getElementById("clickCount")
let count = 0

// btn.addEventListener("click", function () {
//     count++
//     counter.textContent = count
// })

btn.addEventListener("dblclick", function () {
    count--
    counter.textContent = count
})

const box = document.querySelector(".box")
// console.log(box)

box.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "lightblue"
})
box.addEventListener("mouseleave", function (e) {
    // this.style.backgroundColor = "red"
    e.target.style.backgroundColor = "red"

})

document.addEventListener("contextmenu", function (e) {
    e.preventDefault()
    console.log("Right Click Prevented")
})


/*  */
const message = document.getElementById("message")
const charCount = document.getElementById("charCount")

message.addEventListener("input", function (e) {
    const length = this.value.length
    charCount.textContent = length

    if (length > 80) {
        charCount.style.color = 'orange'
    } else {
        charCount.style.color = "yellow"
    }
})