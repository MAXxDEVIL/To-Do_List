const inputBox = document.getElementById("inputBox");
const listcotainer = document.getElementById("listcotainer");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something !");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcotainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
}

listcotainer.addEventListener("click",function(e){
    if(e.terget.tagName === "li"){
        e.target.classlist.toggle("checked");
    }
    else if(e.terget.tagName === "span"){
        e.target.parentElement.remove(); 
    }
}, false);