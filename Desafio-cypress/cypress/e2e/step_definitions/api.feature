Feature: Busca de produto e alteracao de imagem
    
Scenario: Realizar a busca de um produto
Given que eu tenho uma url valida
When faco a requisicao get de busca do produto TABLET
Then servico retorna status 200
And resultado da busca

Scenario: Realizar a alteracao de imagem de um produto
Given que estou logado
When faco a requisicao Post alteracao de imagem do produto TABLET
Then servico post retorna status 200
And resultado da mudanca da imagem