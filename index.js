
function showSweetAlert(){
swal({
    title: "¿Cerrar Sesión?" ,
    text: "Se cerrará sesión al aceptar.",
    imageUrl:
    "https://res.cloudinary.com/dg53strai/image/upload/v1699136208/pasteleria_alert_2_c17hot.jpg" ,
    imageSize: "250x250" ,
    confirmButtonText: "OK" ,
    });
}

const connectApi = (async) =>{
    fetch ("https://pokeapi.co/api/v2/pokemon/75",
    {
        request: 'GET'
    })
    .then((res)=>{
        res.json()
        .then((data)=>{
            console.log(data)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
    .catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
        console.log("Option Finally!")
    });
}