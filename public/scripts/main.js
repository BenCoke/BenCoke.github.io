//add data to local storage when a field is changed
function store(id) {
  valueToStore = document.getElementById(id).value;
  localStorage.setItem(id, valueToStore);
}

//store data of checkbox fields
function storeCheckbox(id) {
  valueToStore = document.getElementById(id).checked;
  localStorage.setItem(id, valueToStore);
}

//function for radio buttons conceptually: store one variable for each radio group. Only change this variable in onchange event
function storeRadio(id, value) {

}

//function refill() onload="refill(id)"
//might need a seperate fill function for addToPage divs?
//collapse expand?
//remove a div and all of its children from a page
function addOne() {
  const para = document.createElement('p');
  var addToPage = document.getElementById("addToPage");
  var idNumber = addToPage.children.length;
  para.innerHTML = "<div><button class='ds_button ds_button--cancel ds_button--fixed ds_button--has-icon' onclick='remove();'>Remove<svg class='ds_icon' aria-hidden='true' role='img'><use href='/public/images/icons.stack.svg#close'></use></svg></button><label class='ds_label' for='first-name'>Exemption</label><input class='ds_input  ds_input--fluid-half' type='text' id='outsideScope" + idNumber + "' /></div>";

  document.getElementById("addToPage").appendChild(para);
}

function emptyStorage() {
  localStorage.clear();
}
