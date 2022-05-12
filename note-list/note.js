let lst = [];
let strlst = ""


document.addEventListener('keydown',(event) => {
    pega = document.getElementById("notes");
    let key = event.key;
    if (key === "Backspace" && lst.length > 0){
        lst.pop()
        strlst = lst.join("")
        pega.innerHTML = strlst
    }
    else if (key === "SPACE"){
        lst.push(" ")
        strlst = lst.join("")
        pega.innerHTML = strlst
    }
    else if (key === "Enter"){
        lst.push("<br>");
        strlst = lst.join("")
        pega.innerHTML = strlst
    }
    else{

        lst.push(key);
        strlst = lst.join("")
        pega.innerHTML = strlst
    }
    
},)

