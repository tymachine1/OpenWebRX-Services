var updates = [
    {message: "OpenWebRX © copyright Radon Corporation [reuse allowed]"}
    {message: "Test"}
];
let updatespage = document.getElementById("updatespage");
for(let item of updates) {
    let a = document.createElement("updatespage");
    a.className = "updatespage";
    var title = document.createElement("message");
    title.textContent = item.message;
    a.appendChild(title);
    updatespage.appendChild(a);
}
