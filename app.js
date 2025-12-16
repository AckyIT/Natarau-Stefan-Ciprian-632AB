async function incarcaStudenti() {
    const raspuns = await fetch('api.php');
    const studenti = await raspuns.json();
    const lista = document.getElementById('listaStudenti');
    lista.innerHTML = '';
    
    studenti.forEach(student => {
        const rand = `
            <tr class="border-b">
                <td class="p-3">${student.nume}</td>
                <td class="p-3">${student.an}</td>
                <td class="p-3 font-bold">${student.media}</td>
            </tr>
        `;
        lista.innerHTML += rand;
    });
}

document.getElementById('formStudent').addEventListener('submit', async function(e) {
    e.preventDefault();

    const dateStudent = {
        nume: document.getElementById('nume').value,
        an: document.getElementById('an').value,
        media: document.getElementById('media').value
    };

    await fetch('api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dateStudent)
    });

    incarcaStudenti();
    document.getElementById('formStudent').reset();
});

incarcaStudenti();