# 📚 Books List

O **Books List** é um exercício focado no processamento, mapeamento e ordenação de dados complexos em **JavaScript puro (ES6)**.

Neste projeto, eu trabalhei no desenvolvimento de funções utilitárias para formatar e organizar um banco de dados de livros (contendo títulos, gêneros, dados de autores e anos de lançamento), utilizando essencialmente as Higher Order Functions `map` e `sort`.

---

## 🚀 O que foi desenvolvido

A aplicação realiza a manipulação estática de uma base de dados literária através das seguintes implementações:
*   **formatedBookNames:** Mapeia todos os livros da base de dados e gera um novo array de strings formatado no padrão: `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`.
*   **formatedAuthorNamesBirth:** Transforma os dados para retornar uma lista de strings contendo exclusivamente `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`.
*   **nameAndAge:** Cria uma estrutura de objetos que calcula a idade da pessoa autora na data de lançamento do seu respectivo livro, retornando um array ordenado de forma crescente (da menor para a maior idade).

---

## 🛠️ Tecnologias Utilizadas

*   **JavaScript (ES6):** Manipulação de arrays de objetos utilizando os métodos nativos `.map()` e `.sort()`.
*   **Node.js (v16):** Ambiente de execução local utilizado para rodar a aplicação.
*   **Jest:** Framework de testes automatizados para validação do comportamento e retorno das funções.
*   **ESLint:** Ferramenta de análise estática responsável por garantir a aderência às boas práticas e padronização do código.

---

## 🔧 Como Instalar e Rodar o Exercício

Certifique-se de que o Node.js está instalado em seu ambiente (de preferência na versão 16). Siga os comandos no terminal:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/58R1K8GTr/exercise-books-list.git](https://github.com/58R1K8GTr/exercise-books-list.git)
