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

function botaonext(){
  let figura = document.getElementsByClassName("imgCarrossel");
  let titulo = document.getElementsByClassName("tituloCarrossel");
  let texto = document.getElementsByClassName("textoCarrossel");

  let indice = 0;

  if (document.getElementById("botaoPrev")){
    for (let i = 0; i < 3; i++){
      indice = i - 1;

      if (indice < 0){
        indice = 3;
      }
       
      figura[i].src = itens_cafeteria[indice].img;
      titulo[i].innerHTML = itens_cafeteria[indice].titulo;
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
      itens_cafeteria[i].titulo = titulo;

      aux = itens_cafeteria[indice].texto;
      itens_cafeteria[indice].texto = itens_cafeteria[i].texto;
      itens_cafeteria[i].texto = aux;
    }
  }
};

function botaoprev(){
  let figura = document.getElementsByClassName("imgCarrossel");
  let titulo = document.getElementsByClassName("tituloCarrossel");
  let texto = document.getElementsByClassName("textoCarrossel");

  let indice = 0;

  if (document.getElementById("botaoPrev")){
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
      itens_cafeteria[i].titulo = titulo;

      aux = itens_cafeteria[indice].texto;
      itens_cafeteria[indice].texto = itens_cafeteria[i].texto;
      itens_cafeteria[i].texto = aux;
    }
  }
};

// let indiceAtual = 0;

// function botaonext() {
//   const figura = document.getElementsByClassName("imgCarrossel");
//   const titulo = document.getElementsByClassName("tituloCarrossel");
//   const texto = document.getElementsByClassName("textoCarrossel");
//   const totalItens = itens_cafeteria.length;

//   // Incrementa o índice atual (com rolagem circular)
//   indiceAtual = (indiceAtual + 1) % totalItens;

//   figura[0].src = itens_cafeteria[indiceAtual].img;
//   titulo[0].innerHTML = itens_cafeteria[indiceAtual].titulo;
//   texto[0].innerHTML = itens_cafeteria[indiceAtual].texto;

//   figura[1].src = itens_cafeteria[indiceAtual].img;
//   titulo[1].innerHTML = itens_cafeteria[indiceAtual].titulo;
//   texto[1].innerHTML = itens_cafeteria[indiceAtual].texto;

//   figura[2].src = itens_cafeteria[indiceAtual].img;
//   titulo[2].innerHTML = itens_cafeteria[indiceAtual].titulo;
//   texto[2].innerHTML = itens_cafeteria[indiceAtual].texto;
// }