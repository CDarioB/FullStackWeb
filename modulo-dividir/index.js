function dividir(numA, numB){
   if(numA == 0 || numB ==0) {
        return 'No se puede dividir por Cero';
    }
    
    return numA / numB;
}

module.exports = dividir;