# Desafio Angular - Formulário de Endereço

Neste repositório, você encontrará o projeto Angular que desenvolvi para implementar um formulário de endereço integrado com a API ViaCEP. O desafio consistia em criar os campos de endereço (CEP, rua, número, complemento, estado, cidade e bairro) e utilizar a API para preencher automaticamente os dados de endereço.

## Instruções

Para realizar o desafio, siga os passos que eu segui:

1. Abri o terminal.

2. Verifiquei se o Angular estava instalado. Caso contrário, utilizei o seguinte comando: `npm install -g @angular/cli`.

3. Criei um novo projeto Angular chamado "angular-example" sem testes: `ng new angular-example --skip-tests`. Durante a criação, escolhi a opção SCSS como formato do stylesheet.

4. Iniciei o projeto com o comando `ng serve`.

5. Abri o link no navegador (CTRL + Clique) e observei a página inicial do Angular.

6. Limpei o projeto, removendo o favicon, conteúdo do arquivo src/styles.scss e conteúdo do template HTML e da classe AppComponent.

7. No arquivo src/app/app.component.html, criei os campos de endereço utilizando as tags div, label e input.

8. Fiz a ligação dos campos HTML com a lógica do componente utilizando a diretiva [(ngModel)] e defini os campos dentro da classe AppComponent.

9. Importei o módulo FormsModule no arquivo src/app/app.module.ts e verifiquei se não havia erros.

10. Conectei-me à API ViaCEP importando o HttpClient no arquivo src/app/app.component.ts. Certifiquei-me de adicionar o módulo HttpClientModule no arquivo src/app/app.module.ts.

11. No método correspondente ao campo de CEP, utilizei o HttpClient para fazer uma requisição GET para a API ViaCEP e associei os dados retornados aos campos correspondentes do formulário.

12. Testei o funcionamento preenchendo um CEP válido e verifiquei se os dados de endereço eram exibidos corretamente no formulário.

## Layout

O layout do formulário foi desenvolvido de forma responsiva e seguindo as melhores práticas de design de interface de usuário.

## Conclusão

Com esse projeto, consegui criar um formulário de endereço funcional utilizando Angular e integrando-o com a API ViaCEP. Agora, os usuários podem preencher apenas o CEP e os demais campos são preenchidos automaticamente, proporcionando uma experiência mais eficiente e amigável.
