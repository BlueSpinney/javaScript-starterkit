let b2 = document.createElement("button")
b2.innerHTML = "I like you, you are handsome and a great person please come back we miss you, wake up you have been in coma for 30 years now "
document.body.appendChild(b2)


const b1 = document.querySelector('button')
const p = document.getElementById('pa')
let variable = 0
var vid = document.getElementById("chad");


b1.onclick = () => {
    if (variable === 0) {
        const b1 = document.querySelector('button')
        
        document.body.appendChild(b2)
        p.textContent = "sog"
        variable = 1

    }
    else if (variable === 1){
        const b1 = document.querySelector('button')

        document.body.appendChild(b2)
        p.textContent = "pog"
        variable = 0
    }

}