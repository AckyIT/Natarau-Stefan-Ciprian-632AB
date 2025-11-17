document.addEventListener('DOMContentLoaded', () =>
{
    const butoaneCumpara = document.querySelectorAll('.cumpara-btn');
    
    butoaneCumpara.forEach(buton =>
    {
        buton.addEventListener('click', () =>
        {
            const id = buton.dataset.id;
            const nume = buton.dataset.nume;
            const pret = parseFloat(buton.dataset.pret);

            adaugaInCos({ id, nume, pret, cantitate: 1 });
            alert('Produs adăugat în coș!');
        });
    });

    function adaugaInCos(produs)
    {
        let cos = JSON.parse(localStorage.getItem('cos')) || [];
        const produsExistent = cos.find(item => item.id === produs.id);

        if (produsExistent)
        {
            produsExistent.cantitate++;
        }
        else
        {
            cos.push(produs);
        }
        localStorage.setItem('cos', JSON.stringify(cos));
    }

    const containerCos = document.getElementById('continut-cos');
    
    if (containerCos)
    {
        afiseazaCos();

        containerCos.addEventListener('click', (event) =>
        {
            if (event.target.classList.contains('sterge-btn'))
            {
                const idProdus = event.target.dataset.id;
                stergeDinCos(idProdus);
            }
        });

        containerCos.addEventListener('change', (event) =>
        {
            if (event.target.classList.contains('cantitate-input'))
            {
                const idProdus = event.target.dataset.id;
                const cantitateNoua = parseInt(event.target.value);
                
                if (cantitateNoua > 0)
                {
                    modificaCantitate(idProdus, cantitateNoua);
                }
                else
                {
                    stergeDinCos(idProdus);
                }
            }
        });
    }

    function afiseazaCos()
    {
        const cos = JSON.parse(localStorage.getItem('cos')) || [];
        const container = document.getElementById('continut-cos');
        const totalProduseEl = document.getElementById('total-produse');
        const totalPretEl = document.getElementById('total-pret');
        container.innerHTML = '';
        if (cos.length === 0)
        {
            container.innerHTML = '<p class="text-gray-500">Coșul este gol.</p>';
            totalProduseEl.textContent = '0';
            totalPretEl.textContent = '0.00';
            return;
        }

        let totalProduse = 0;
        let totalPret = 0;

        cos.forEach(produs =>
        {
            const divProdus = document.createElement('div');
            divProdus.className = 'flex justify-between items-center border-b py-4';
            divProdus.innerHTML = `
                <div class="w-2/5">
                    <h4 class="font-semibold">${produs.nume}</h4>
                </div>
                <div class="w-1/5">
                    <input type="number" 
                           class="cantitate-input w-16 p-1 border rounded text-center" 
                           value="${produs.cantitate}" 
                           min="1" 
                           data-id="${produs.id}">
                </div>
                <div class="w-1/5 text-right">
                    <p class="font-semibold">${(produs.pret * produs.cantitate).toFixed(2)} RON</p>
                </div>
                <div class="w-1/5 text-right">
                    <button class="sterge-btn text-red-500 hover:text-red-700" data-id="${produs.id}">
                        🗑️ Șterge
                    </button>
                </div>
            `;
            container.appendChild(divProdus);

            totalProduse += produs.cantitate;
            totalPret += produs.pret * produs.cantitate;
        });

        totalProduseEl.textContent = totalProduse;
        totalPretEl.textContent = totalPret.toFixed(2);
    }

    function stergeDinCos(idProdus)
    {
        let cos = JSON.parse(localStorage.getItem('cos')) || [];
        
        cos = cos.filter(produs => produs.id !== idProdus);
        
        localStorage.setItem('cos', JSON.stringify(cos));
        
        afiseazaCos();
    }

    function modificaCantitate(idProdus, cantitateNoua)
    {
        let cos = JSON.parse(localStorage.getItem('cos')) || [];
        
        const produsDeModificat = cos.find(produs => produs.id === idProdus);
        
        if (produsDeModificat)
        {
            produsDeModificat.cantitate = cantitateNoua;
        }
        
        localStorage.setItem('cos', JSON.stringify(cos));
        
        afiseazaCos();
    }
});