let userInput = document.getElementById("inputBox");
let addBTN = document.getElementById("addBTN");
let deleteBT = document.getElementById("deleteBTN");
let saveBTN = document.getElementById("saveBTN");
let outputFieldList = document.getElementById("outputClass");

saveBTN.style.display = "none";
deleteBT.style.display = "none";

function saveTODOS() {
  if (userInput.value.trim()) {
    let editBack = "";

    let li = document.createElement("li");
    li.innerText = userInput.value;

    let editBTN = document.createElement("button");
    editBTN.innerText = "Edit";
    li.appendChild(editBTN);

    let deleteBTN = document.createElement("button");
    deleteBTN.innerText = "Delete";
    li.appendChild(deleteBTN);

    userInput.value = "";

    li.setAttribute("class", "listView");
    deleteBTN.setAttribute("class", "redbtn");
    editBTN.setAttribute("class", "button");

    editBTN.addEventListener("click", function () {
      saveBTN.style.display = "inline-block";
      addBTN.style.display = "none";
      let editMaterial = li.childNodes[0].nodeValue;
      userInput.value = editMaterial;
      editBack = li;
    });

    deleteBTN.addEventListener("click", function () {
        li.remove();
        if (outputFieldList.children.length === 0) {
          deleteBT.style.display = "none";
        }
    });
  
    saveBTN.addEventListener("click", function () {
      saveBTN.style.display = "none";
      addBTN.style.display = "inline-block";
      editBack.childNodes[0].nodeValue = userInput.value;
      userInput.value = "";
    });
    outputFieldList.appendChild(li);
    deleteBT.style.display = "inline-block"
  } else {
    alert("! Empty input Field ! Enter something in the input Field !");
  }
}

deleteBT.addEventListener('click', function(){
    if (outputFieldList.children.length > 0) {
        outputFieldList.innerHTML = null;
      }
      deleteBT.style.display = "none";  
})