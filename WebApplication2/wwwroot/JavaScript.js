fetch("https://localhost:7095/persons")
    .then(response => response.json())
    .then(json => { 
        const body = document.getElementById('body');
        const type = body.dataset.type;
        json.forEach(x => {
            
            
                 
            const div = document.createElement('div');
            const name = document.createElement('span');
            const position = document.createElement('span');
            const skills = document.createElement('span');
            name.textContent = x.name;
            position.textContent = x.position;
            skills.textContent = x.skills;
            div.appendChild(name);
            div.appendChild(position);
            div.appendChild(skills);
            if (type === undefined) {
                body.appendChild(div);
            } else if(x.position.trim().toLowerCase() === type.trim().toLowerCase()) {
                body.appendChild(div);
            }
        });


        //forEach go through the array of the .json of x is 1 person
    });

