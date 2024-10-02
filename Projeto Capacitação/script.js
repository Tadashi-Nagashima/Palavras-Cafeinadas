let itens_cafeteria = [
  {
    titulo: "Brigadeiro De Capuccino",
    texto: "O brigadeiro de cappuccino é uma das guloseimas que enfeitam o balcão da doceria...",
    img: "assets/Brigadeiro 1.jpg"
  },
  {
    titulo: "Bolo de chocolate",
    texto: "O bolo de chocolate é uma das sobremesas mais pedidas da Cafeteira, ele possui um recheio com..",
    img: "assets/chocolate cake 1.jpg"
  },
  {
    titulo: "Pão de Mel",
    texto: "O pão de mel é um dos doces mais tradicionais que temos, ele é recheado com doce de leite...",
    img: "assets/ginger bread 1.jpg"
  },
  {
    titulo: "Sorvete de Café",
    texto: "O sorvete em versão de café pode ser aproveitado sozinho ou com um pedacinho de bolo no fim...",
    img: "assets/sorvete cafe 1.jpg"
  }
];

let figura = document.getElementsByClassName("imgCarrossel");
let titulo = document.getElementsByClassName("tituloCarrossel");
let texto = document.getElementsByClassName("textoCarrossel");

let indice = 0;

botaoNext.addEventListener('click', () =>{
  for (let i = 0; i < 3; i++){
    indice = i - 1;

    if (indice < 0){
      indice = 3;
    }
     
    figura[i].src = itens_cafeteria[indice].img;
    titulo[i].innerText = itens_cafeteria[indice].titulo;
    texto[i].innerHTML = itens_cafeteria[indice].texto;
  }
  
  for (i = 3; i > 0; i--){
    indice = i + 1

    if (indice > 3){
      indice = 0;
    }

    let aux = itens_cafeteria[indice].img;
    itens_cafeteria[indice].img = itens_cafeteria[i].img;
    itens_cafeteria[i].img = aux;

    aux = itens_cafeteria[indice].titulo;
    itens_cafeteria[indice].titulo = itens_cafeteria[i].titulo;
    itens_cafeteria[i].titulo = aux;

    aux = itens_cafeteria[indice].texto;
    itens_cafeteria[indice].texto = itens_cafeteria[i].texto;
    itens_cafeteria[i].texto = aux;
  }

  console.log(titulo)
  console.log(itens_cafeteria)
})

botaoPrev.addEventListener('click', () =>{
  for (let i = 0; i < 3; i++){
    indice = i + 1;

    if (indice > 3){
      indice = 0;
    }
     
    figura[i].src = itens_cafeteria[indice].img;
    titulo[i].innerHTML = itens_cafeteria[indice].titulo;
    texto[i].innerHTML = itens_cafeteria[indice].texto;
  }
  
  for (i = 0; i < 3; i++){
    indice = i + 1

    if (indice > 3){
      indice = 0;
    }

    let aux = itens_cafeteria[indice].img;
    itens_cafeteria[indice].img = itens_cafeteria[i].img;
    itens_cafeteria[i].img = aux;

    aux = itens_cafeteria[indice].titulo;
    itens_cafeteria[indice].titulo = itens_cafeteria[i].titulo;
    itens_cafeteria[i].titulo = aux;

    aux = itens_cafeteria[indice].texto;
    itens_cafeteria[indice].texto = itens_cafeteria[i].texto;
    itens_cafeteria[i].texto = aux;
  }
})
