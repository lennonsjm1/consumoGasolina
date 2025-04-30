function niteroi(distanciaKm){
    const consumoPorLitro = 14.1;
    const precoGasolina = 6.21;

    let gasolinaConsumida = distanciaKm /consumoPorLitro;
    let gasolinaUsada = gasolinaConsumida * precoGasolina

    console.log("Você usou " + (gasolinaConsumida.toFixed(2)) + " litros e gastou R$" + (gasolinaUsada.toFixed(2)))
}
niteroi(180)