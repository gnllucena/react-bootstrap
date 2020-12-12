## MVP 1 (Usuários são capazes de analisar empresas)
* refactory do nome dos componentes de stock para company
* detalhes da company
* alteração de dados do usuário
* alteração de senha
* suspense para botões, ou "if loading"
* readme com as informações do projeto
* home
* aws
* continuous deployment
## MVP 2 (017 é capaz de pagar suas proprias despesas)

* paypal 

(https://github.com/paypal/react-paypal-js)

* ADS e SEO
* quantos estamos gastando
* monitoria de aplicação e preço gastos


## MVP 3 (Usuário podem ver o histórico dos indices)

* graficos com histórico 

(https://g2plot.antv.vision/en/)

* base de histórico

## MVP 3 (Usuários são capazes de comparar empresas)

* componente de companion como pre visualização da comparação

![Companion](/readme/images/companion.jpg "A cute kitten")

* componente para comparação de empresas 

(https://react-dnd.github.io/react-dnd/examples/sortable/simple)
(https://ant.design/components/carousel/?theme=dark)

![Comparação](/readme/images/comparacao.jpg "A cute kitten")
* ordenção na pesquisa de companies
* salvar pesquisa + ordenação na pequisa de companies

## MVP 4 (ou 5, ou 6) Wallet

* eventos corporativos (inplit, split, JCP...)
* operações (entrada e saida de shares na carteira)
## MVP 5 (ou 4, ou 6) Valuation

* Valuation

## MVP 6 (ou 4, ou 5) Brasil




https://reactjs.org/docs/concurrent-mode-suspense.html
https://reactjs.org/blog/2019/11/06/building-great-user-experiences-with-concurrent-mode-and-suspense.html

Start Fetching Early

    We might want to fetch based on props. The answer to this is we want to start fetching in the event handlers instead. 
    
    With this approach, we can fetch code and data in parallel. When we navigate between pages, we don’t need to wait for a page’s code to load to start loading its data. We can start fetching both code and data at the same time (during the link click), delivering a much better user experience.

Fetch in Event Handlers
    Imagine that we’re about to navigate from a list of a user’s posts to the page for a specific post. We’ll need to download the code for that page — Post.js — and also fetch its data. 
    
    The key is to start fetching code and data for a new view in the same event handler that triggers showing that view. We can either fetch the data within our router — if our router supports preloading data for routes — or in the click event on the link that triggered the navigation. It turns out that the React Router folks are already hard at work on building APIs to support preloading data for routes. But other routing frameworks can implement this idea too.

Load Data Incrementally
    The above patterns — parallel data/view trees and fetching in event handlers — let us start loading all the data for a view earlier. But we still want to be able to show more important parts of the view without waiting for all of our data. At Facebook we’ve implemented support for this in GraphQL and Relay in the form of some new GraphQL directives (annotations that affect how/when data is delivered, but not what data). These new directives, called @defer and @stream, allow us to retrieve data incrementally. For example, consider our <Post> component from above. We want to show the body without waiting for the comments to be ready. We can achieve this with @defer and <Suspense>: