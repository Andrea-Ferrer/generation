window.addEventListener('load', ()=>{

    let gatos = document.getElementById ('gatos');
    let perros = document.getElementById('perros');

    gatos.addEventListener('click', ()=>{
        fetch('https://api.thecatapi.com/v1/images/search.json')
        .then(Response =>()=>{
            Response.json().then(data=>{

            })
        })
    })

});
//https://youtu.be/npRMTRjuGCg tutorial