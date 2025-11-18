const l = document.getElementById("listaActivitati");
const b = document.getElementById("btnAdauga");
const i = document.getElementById("inputActivitate");
const months=["Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"];
const d = new Date();
let luna =months[d.getMonth()];
b.addEventListener("click", function() 
{
    const t = i.value;
    if(t!=="")
    {
        const el = document.createElement("li");
        el.innerText = t + "– adăugată la: " + d.getDate() + " " + luna + " " + d.getFullYear();
        l.appendChild(el);
        i.value = "";
    }
});