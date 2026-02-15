document.addEventListener("keydown", function (e) {
    console.log(`key press: ${e.key}`)
    console.log(`key press: ${e.code}`)
    console.log(`Shift: ${e.shiftKey}`)
})

const input = document.querySelector("#search")
input.addEventListener('keydown', function (e) {
    if (e.key === "Enter"){
        console.log(`Searching for: ${this.value}`)
    }
})