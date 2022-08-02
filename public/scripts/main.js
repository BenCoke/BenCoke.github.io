//add data to local storage when a field is changed
function store(id) {
  var valueToStore = document.getElementById(id).value;
  localStorage.setItem(id, valueToStore);
}

//store data of checkbox fields
function storeCheckbox(id) {
  var valueToStore = document.getElementById(id).checked;
  localStorage.setItem(id, valueToStore);
}

//function for radio buttons - only store one variable for each radio button group
//onchange only triggers on select not on deselect
function storeRadio(id, value) {
  localStorage.setItem(id, value);
}

//function refill() onload="refill(id)"
//might need a seperate fill function for addToPage divs?
//remove a div and all of its children from a page
//hide button before submit -> show button after submit
function addOne(id) {
  const div = document.createElement('div');
  var addToPage = document.getElementById("addToPage");
  var idNumber = addToPage.children.length + 1;
  div.setAttribute("id", "div-" + id + "-" + idNumber);
  var label = "<label class='ds_label' for='" + id + "-" + idNumber + "'>Section:</label>";
  var textarea = "<textarea class='ds_input  ds_input--fluid-half' rows='3' id='" + id + "-" + idNumber + "' /></textarea>";
  var button = "<button class='ds_button  ds_button--secondary' onclick=\"submit('div-" + id + "-" + idNumber + "')\">Submit</button>";

  div.innerHTML = label + textarea + button;

  document.getElementById("addToPage").appendChild(div);
}

//add data to local storage
//add section to table
//remove div from page
function submit(id) {
  var inputId = id.substring(4);
  var valueToStore = document.getElementById(inputId).value;
  localStorage.setItem(inputId, valueToStore);

  var tableId = "table-non-accessible";
  var table = document.getElementById(tableId);

  var x = document.getElementById(tableId).rows.length;
  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell2.setAttribute("align", "right");

  cell1.innerHTML = valueToStore;
  cell2.innerHTML = "<button class='ds_button ds_button--cancel ds_button--fixed ds_button--has-icon' onclick='removeFromTable(this);'>Remove<svg class='ds_icon' aria-hidden='true' role='img'><use href='/public/images/icons.stack.svg#close'></use></svg></button>"

  const myNode = document.getElementById(id);
  myNode.innerHTML = '';

}

//remove data from local storage
//remove row from table
function removeFromTable(row) {
  var index = row.parentNode.parentNode.rowIndex;
  document.getElementById("table-non-accessible").deleteRow(index);

  var itemToRemove = "non-accessible-" + index;
  localStorage.removeItem(itemToRemove);
}

function emptyStorage() {
  localStorage.clear();
}
