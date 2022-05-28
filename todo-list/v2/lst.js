// to do list in js
// non functional prototype

let t = document.getElementById("example")
let b = document.getElementById("b1").addEventListener('click',app)
let eve = document.addEventListener('keydown',fun = (event) =>{
    alert
    get_t(event.key)
})

let ch = false
let tasks = {

}

let tlst = []

function get_t(evee){
    if (ch === true){
        
        if (evee === "|"){
            alert(tlst.join(""))
            for (let i = 0; i < tasks.length; i++){
                tasks[i] = tlst.join()
            }
            alert(tasks[tasks.length - 1])
            tlst = []
            ch = true
        }
        if (evee !== "Shift" && evee !== "Backspace"){
            tlst.push(evee)
        }
        t.innerHTML = tlst.join("")
    }
}

function app(){
    ch = true

    for (let i = 0; i < tasks.length; i++){
        tlst.push(tasks[i])
    }

};
