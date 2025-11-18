const b = document.getElementById("btnDetalii");
const deta = document.getElementById("detalii");
const dp = document.getElementById("dataProdus");
const months=["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
const d = new Date();
let luna = months[d.getMonth()];
deta.classList.add("ascuns");
const dt = d.getDate() + " " + luna + " " + d.getFullYear();
dp.innerText = "Informațiile sunt valabile la data: " + dt;
b.addEventListener("click", function() 
{
    deta.classList.toggle("ascuns");
    if(deta.classList.contains("ascuns"))
    {
        b.innerText = "Afișează detalii";
    }
    else
    {
        b.innerText = "Ascunde detalii";
    }
});