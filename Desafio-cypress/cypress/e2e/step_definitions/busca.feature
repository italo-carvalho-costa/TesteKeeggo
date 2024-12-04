Feature: Busca de produto
    
Scenario: Realizar a busca de um produto
Given Que eu estou no site
When Realizo a busca do produto TABLET no site
Then O site retorna em tela todos os modelos disponíveis 


 Scenario: Adicionar o produto ao carrinho
 Given Que eu estou no site na página do produto HP ELITEPAD 1000 G2 TABLET
 When clico no botão ADD TO CART
 And clico no botão CHECKOUT
 Then o site redireciona para a página de pagamento