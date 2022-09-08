function calcularDistancia(){
    //vem da API
    const gps={

            disTotal:"1492.56",
            disPercorrida:"1000",
    }
    const disTotal = 1492.56;
    const disPercorrido = 1000

    document.getElementById("disTotal").innerHTML = gps.disTotal;
    document.getElementById("disPercorrida").innerHTML= gps.disPercorrida;
    document.getElementById("disRestante").innerHTML = gps.disTotal-gps;


}