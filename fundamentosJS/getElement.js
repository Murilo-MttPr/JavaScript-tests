//Existem alguns meios de conseguir um elemento do codigo para usar dentro de funções e afins. Chama-se getElements

getElementsByClassName();
getElementsByName();
GetElementsByTagName();
getElementsById();

//Se não houver ID, use 'querySelector()'

// Exemplo dentro de um HTML:
<html>
<head>
</head>
<body>
    <p>"Parágrafo 1"</p>
    <h1>TEXTOALEATORIO</h1>
</body>
</html>

//Quero selecionar o paragrafo 1, então como não há ID vou usar o 'querySelector()' e dentro dos () colocar o 'p' do parágrafo.
