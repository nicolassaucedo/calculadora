function dividir(a, b){
    if (a == 0 || b==0){
        return "No se puede dividir por cero"
    }else{
        return "El resultado de su operacion es: " + a / b
    }
}

module.exports = dividir