fetch("https://localhost:7095/persons")
    .then(response => response.json())
    .then(json => console.log(json));