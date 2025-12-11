const inputBox = document.getElementById("inputBox");
const listCotainer = document.getElementById("listcotainer");

function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something !");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCotainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    inputBox.value = "";
    saveData();
}

listcotainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("chacked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);

function saveData(){
    localStorage.setItem("data", listCotainer.innerHTML);
}

function showTask(){
    listCotainer.innerHTML = localStorage.getItem("data");
}
showTask();