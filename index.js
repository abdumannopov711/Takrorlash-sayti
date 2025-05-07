let form = document.querySelector("#formOne");

let ismInput = document.querySelector("#nameInput");
let yoshInput = document.querySelector("#yoshInput");
let manzilInput = document.querySelector("#manzilInput");
let kursInput = document.querySelector("#kursInput");
let kasbInput = document.querySelector("#kasbInput");

let tbody = document.querySelector("#tbody")

let idVal = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ismInputVal = ismInput.value; 
    let yoshInputVal = yoshInput.value; 
    let manzilInputVal = manzilInput.value; 
    let kursInputVal = kursInput.value; 
    let kasbInputVal = kasbInput.value; 

    let row = document.createElement("tr");

    row.innerHTML = `
            <th scope="row">${idVal}</th>
        <td>${ismInputVal}</td>
        <td>${yoshInputVal}</td>
        <td>${manzilInputVal}</td>
        <td>${kursInputVal}</td>
        <td>${kasbInputVal}</td>
        <td>
            <button class="btn btn-warning btn-sm editBtn">Tahrirlash</button>
            <button class="btn btn-danger btn-sm deleteBtn">O‘chirish</button>
        </td>
    `

    ;

    tbody.appendChild(row);

    // Formani tozalash
    ismInput.value = "";
    yoshInput.value = "";
    manzilInput.value = "";
    kursInput.value = "";
    kasbInput.value = "";
    idVal++;

    // O'chirish
    row.querySelector(".deleteBtn").addEventListener("click", () => {
        row.remove();
    });

    // Tahrirlash
    row.querySelector(".editBtn").addEventListener("click", () => {
        ismInput.value = row.children[1].textContent;
        yoshInput.value = row.children[2].textContent;
        manzilInput.value = row.children[3].textContent;
        kursInput.value = row.children[4].textContent;
        kasbInput.value = row.children[5].textContent;
        row.remove();
    });
});