function typeOfThing() {
    const dropdown = document.querySelector("#select");
    const value = dropdown.value;
    const output = document.getElementById('type');
    if (value === 'Celebrity') {
        output.textContent = 'Get Celebrity'
    } else if (value === 'Video Game') {
        output.textContent = 'Get Video Game Character'
    } else if (value === '') {
        output.textContent = 'Nothing selected'
    }
}

