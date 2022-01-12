var pesos = [35,38,40,45];

function media_pesos(){
    var soma = 0;
    
    //preencha o loop FOR com o valor de início e o de limite para percorrer a matriz de pesos
    //o valor de início deve ser o número do primeiro índice da matriz
    //o limite deve ser o número de itens que a matriz tem
    for (var i = ; i < ; i++){
        //adicione o valor de cada peso à variável soma
       soma +=    
    }
    
    var media = soma / pesos.length;
    console.log(media)
}


function setup() {
  createCanvas(400,400);
  media_pesos();
}

function draw() 
{
  background(30);
}

 

