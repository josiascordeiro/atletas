# Atletas do Brasil

Este projeto exibe informações sobre atletas brasileiros famosos, incluindo suas fotos, nomes, idades, posições, clubes pelos quais passaram e links para suas páginas na Wikipedia.

## Estrutura do Projeto

- `index.html`: O arquivo HTML principal que estrutura a página.
- `style.css`: O arquivo CSS que estiliza a página.
- `app.js`: O arquivo JavaScript que manipula os dados dos atletas e atualiza o conteúdo da página.
- `dados.js`: O arquivo JavaScript que contém os dados dos atletas.

## Como Usar

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Abra o arquivo `index.html` no seu navegador para visualizar a página.

## Estrutura dos Dados

Os dados dos atletas são armazenados no arquivo `dados.js` no seguinte formato:

```javascript
const dados = [
    {
        foto: "img/ronaldinho.jpg",
        nome: "Ronaldinho",
        idade: 41,
        posicao: "meia-atacante",
        clubes: "Grêmio, PSG, Barcelona, Milan, Flamengo, Atlético-MG, Querétaro, Fluminense",
        link: "https://pt.wikipedia.org/wiki/Ronaldinho"
    },
    {
        foto: "img/marta.jpg",
        nome: "Marta",
        idade: 35,
        posicao: "atacante",
        clubes: "Vasco, Santa Cruz, Umeå, Santos, Rosengård, Orlando Pride, Tyresö, FC Rosengård",
        link: "https://pt.wikipedia.org/wiki/Marta_(futebolista)"
    },
    {
        foto: "img/maurren.jpg",
        nome: "Maurren Higa Maggi",
        idade: 44,
        posicao: "saltadora",
        clubes: "Pinheiros, BM&F Bovespa",
        link: "https://pt.wikipedia.org/wiki/Maurren_Maggi"
    },
    {
        foto: "img/roberto_carlos.jpg",
        nome: "Roberto Carlos da Silva Rocha",
        idade: 47,
        posicao: "lateral",
        clubes: "União São João, Atlético-MG, Palmeiras, Inter de Milão, Real Madrid, Fenerbahçe, Corinthians, Anzhi Makhachkala, Delhi Dynamos",
        link: "https://pt.wikipedia.org/wiki/Roberto_Carlos_(futebolista)"
    }
];
