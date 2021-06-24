
let button = document.querySelector("#button");
button.addEventListener("click", () => {
        let apiFetch = fetch("https://api.thecatapi.com/v1/images/search");
        apiFetch //promesa
            .then(resp => resp.json())
            .then(data =>{
                let cat = document.querySelector("#cat");
                cat.src = data[0].url;
                console.log(data);
        }); 
    });