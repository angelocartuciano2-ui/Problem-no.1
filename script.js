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

  
items.sort(function(a, b) {

    return new Date(a.expiry) - new Date(b.expiry);

  });

  for (let i = 0; i < items.length; i++) {

    let today = new Date();

    let exp = new Date(items[i].expiry);

    let diff = exp - today;

    let days = diff / (1000 * 60 * 60 * 24);

    let color = "green";

    if (days < 2) {
      color = "red";
      risk++;
    }

  list.innerHTML += `
      <div class="item ${color}">
        <b>${items[i].name}</b>
        <br>
        Expires: ${items[i].expiry}
      </div>
    `;
  }

  document.getElementById("count").innerText = risk;
}
