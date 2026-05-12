let items = [];

function addItem() {

  let name = document.getElementById("name").value;

  let expiry = document.getElementById("expiry").value;

  let item = {
    name: name,
    expiry: expiry
  };

  items.push(item);

  showItems();
}

function showItems() {

  let list = document.getElementById("list");

  list.innerHTML = "";

  let risk = 0;

  
}