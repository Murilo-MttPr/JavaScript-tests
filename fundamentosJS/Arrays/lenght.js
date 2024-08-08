// O método .lenght é usado em um array para termos acesso ao tamanho desse array.
// Vamos exempificar usando uma simples ideia: Uma loja tem um estoque de X produtos e sempre armazenou as informações em arquivos físicos. Um dia um jovem desenvolvedor de software encontrou essa loja e foi criar para o dono um banco de dados em um sistema para armazenar os produtos. Esse banco de dados vai em algum momento precisar de alguma função para ter acesso a quantidade de itens nesse estoque. Ai que entra o .lenght:


// Vamos declarar uma variavel que contenha uma array produtos:
const produtos = ['arroz', 'trigo', 'feijao', 'macarrao', 'sal', 'acucar']; // 6 itens

//Agora vamos utilizar o .lenght na array para armazenar em outra variavel a quantidade de itens do array original:
const qntProdutos = produtos.length;
console.log(qntProdutos) // imprimindo no console o resultado 