function Add_item() {
  if (document.getElementById("Task").value == "")
   alert("No Task is Input");
  else {
    var main = document.getElementById("main_list");
    var new_entry = document.createElement("div");
    new_entry.className = "card";
    main.appendChild(new_entry);
    addDel(new_entry);
    document.getElementById("Task").value = "";
  }
}
//insert a delete button
function addDel(locan) {
  locan.innerHTML ='<button onclick="deleteme(this)" class="delbtn" id="del">Done</button>'+document.getElementById("Task").value;
}
//delete the entry
function deleteme(box) {
  box.parentElement.remove();
}

