

function mostrarHora(){
    const data = new Date();
    return data.toLocaleTimeString('pt-br',{
     hour12:false
    });
}

setInterval(function(){
    console.log(mostrarHora());
},1000);