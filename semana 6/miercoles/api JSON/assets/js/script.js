let btnUsers = document.querySelector("#btnUsers");
let divUsers = document.querySelector("#users");

/*
btnUsers.addEventListener("click", ()=> {
    let getUsers = fetch("https://jsonplaceholder.typicode.com/users");

    getUsers
        .then (resp => resp.json())
        .then (data => {
            data.forEach(user => {
                let parr = document.createElement("p");
                parr.textContent = user.name;
                divUsers.appendChild(parr);
            });
        }).catch(e=> console.log(e));
})
*/


//Segunda manera de resolverlo con wait, hace que espere a que lo cargue

btnUsers.addEventListener("click", displayData);
async function displayData(){
        let getUsers = await fetch ("https://jsonplaceholder.typicode.com/users");
        console.log(getUsers.ok);
        
        let data = await getUsers.json();
        data.forEach(user => {
            let parr= document.createElement("p");
            parr.textContent =`Nombre de usuario: ${user.name}. Email: ${user.email}.`; 
            divUsers.appendChild(parr);
        });
        console.log(data);
    }
