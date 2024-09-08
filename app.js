function pesquisar() {
            // Imprime no console para fins de depuração, indicando que a função foi chamada
            console.log("clicou");

            // Seleciona o campo de entrada de texto com o ID "campo-pesquisa"
            let campoPesquisa = document.getElementById("campo-pesquisa").value;
        
            // Seleciona a seção HTML com o ID "resultado-pesquisa" onde os resultados serão exibidos
            let section = document.getElementById("resultado-pesquisa");
            // Imprime no console o elemento selecionado para verificação
            console.log(section);
            //se campoPesquisa for uma string vazia manterr vazia 
            if (campoPesquisa === "") {
                // Atribui uma string vazia ao conteúdo da seção "resultado-pesquisa"
                section.innerHTML = "<p> Nada Foi Encontrado </p>";
                // Retorna para encerrar a execução da função
                return;
            }

            // Inicializa uma string vazia para armazenar os resultados da pesquisa
            let resultados = "";
            let nome = "";
            let clubes = "";
            let tags = "";
        
            // Itera sobre cada elemento (dado) do array 'dados'
            for (let dado of dados) {
                        // atribui a variavel nome EM MAUISCULO
                        nome = dado.nome.toUpperCase();
                        // atribui a variavel clubes EM MAUISCULO
                        clubes = dado.clubes.toUpperCase();
                        // atribui a variavel nome em minusculo ou maiuculo
                        nome = dado.nome.toLowerCase();
                        // atribui a variavel clubes em minusculo ou maiuculo
                        clubes = dado.clubes.toLowerCase();
                        // atribui a variavel tags em minusculo ou maiuculo
                        tags = dado.tags.toLowerCase();
                        // Verifica se o nome do dado contém o texto digitado no campo de pesquisa
                        console.log(nome.includes(campoPesquisa))
                        // Se o nome do dado contém o texto digitado no campo de pesquisa
                        if (nome.includes(campoPesquisa) || clubes.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                            // Concatena uma nova string de HTML para cada dado, formatando as informações
                            resultados += `
                                <p>
                                    <img src="${dado.foto}" alt="Foto de ${dado.nome}">
                                    <h1>${dado.nome}</h1><br>
                                    ${dado.idade}<br>
                                    ${dado.posicao}<br>
                                    ${dado.clubes}<br>
                                    <a href="${dado.link}">Link para a página da Wikipedia</a>
                                </p>
                            `;
                        }
            if (!resultados){
                        // Atribui uma string vazia ao conteúdo da seção "resultado-pesquisa"
                        resultados = "<p> palavara não encontrada </p>";
            }

            }
        
            // Atribui o HTML gerado ao conteúdo da seção "resultado-pesquisa"
            section.innerHTML = resultados;
        }
        
        // Imprime no console o link da terceira pessoa no array 'dados' para verificação
        console.log(dados[2].link);