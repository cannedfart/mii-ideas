function typeOfGenre() {
    const dropdown = document.querySelector("#select");
    const value = dropdown.value;

    if (value === 'Celebrity') {
        fetch('celebrity.json?nocache=' + Date.now())
            .then(response => response.json())
            .then(data => {
                const game = data;

                const randomIndex = Math.floor(Math.random() * game.length);
                const chosen = game[randomIndex];

                console.log(chosen.person);
                console.log(chosen.id);
                console.log(chosen.image);
                document.getElementById('idea').innerHTML = `<div class="green-content">Try to Make ${chosen.person}<img src="${chosen.image}" alt="${chosen.person}"></div>`;
            });
        document.getElementById('replace-txt').innerHTML = `Try Again?`;
    } else if (value === 'Video Game') {
        fetch('videogames.json?nocache=' + Date.now())
            .then(response => response.json())
            .then(data => {
                const game = data;

                const randomIndex = Math.floor(Math.random() * game.length);
                const chosen = game[randomIndex];

                console.log(chosen.game);
                console.log(chosen.id);
                console.log(chosen.image);
                document.getElementById('idea').innerHTML = `<div class="green-content">Try to Make ${chosen.game}<img src="${chosen.image}" alt="${chosen.game}"></div>`;
            });
        document.getElementById('replace-txt').innerHTML = `Try Again?`;
    } else if (value === 'History') {
        fetch('history.json?nocache=' + Date.now())
            .then(response => response.json())
            .then(data => {
                const game = data;

                const randomIndex = Math.floor(Math.random() * game.length);
                const chosen = game[randomIndex];

                console.log(chosen.person);
                console.log(chosen.id);
                console.log(chosen.image);
                document.getElementById('idea').innerHTML = `<div class="green-content">Try to Make ${chosen.person}<img src="${chosen.image}" alt="${chosen.person}"></div>`;
            });
        document.getElementById('replace-txt').innerHTML = `Try Again?`;
        } else if (value === '') {
        document.getElementById('replace-txt').innerHTML = `Nothing selected`;
    }
}
