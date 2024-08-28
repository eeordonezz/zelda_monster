document.addEventListener("DOMContentLoaded", () => {
    const villainListElement = document.getElementById('villain-list');

    // Función para obtener la información de los monstruos desde la API
    const fetchVillains = async () => {
        try {
            const response = await fetch('https://zelda.fanapis.com/api/monsters');
            const data = await response.json();

            // Iterar sobre cada monstruo y crear una tarjeta para cada uno
            data.data.forEach(monster => {
                const villainCard = document.createElement('div');
                villainCard.classList.add('villain-card');

                villainCard.innerHTML = `
                    <h2>${monster.name}</h2>
                    <p>${monster.description || "Sin descripción disponible."}</p>
                    <div class="stat">
                        <h3>HP</h3>
                        <p>${monster.hp || "Desconocido"}</p>
                    </div>
                    <div class="stat">
                        <h3>Ataque</h3>
                        <p>${monster.attack || "Desconocido"}</p>
                    </div>
                    <div class="stat">
                        <h3>Defensa</h3>
                        <p>${monster.defense || "Desconocido"}</p>
                    </div>
                `;

                villainListElement.appendChild(villainCard);
            });
        } catch (error) {
            console.error("Error al obtener la información de los monstruos:", error);
            villainListElement.innerHTML = '<p>Error al cargar la información de los monstruos.</p>';
        }
    };

    // Llamar a la función para obtener los datos al cargar la página
    fetchVillains();
});
