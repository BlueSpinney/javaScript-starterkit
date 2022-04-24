b1 = document.getElementById("b1").addEventListener('click',add)
b2 = document.getElementById("b2").addEventListener('click',remove)

let count = 0
let c2 = 0
let tnp = ""


let dic = {

}



function add(){
    p = document.getElementById("list")


    txt = document.querySelector("input").value;
    np = p.innerHTML + "<br>" + txt;
    dic["txt " + count] = txt

    tnp = ""
    for (i = 0; i < Object.keys(dic).length; i++){
        tnp = tnp + dic["txt " + i] + "<br>"
    }

    p.innerHTML = tnp;
    count++
}
function remove(){
    p = document.getElementById("list")
    tnp = ""
    
    dic["txt " + count] = ""
    count = count - 1
    for (i = 0; i < Object.keys(dic).length ; i++){
        tnp = tnp + dic["txt " + i] + "<br>"
    }
    p.innerHTML = tnp
}
