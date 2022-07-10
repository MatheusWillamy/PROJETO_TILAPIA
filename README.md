# Sistema de monitoramento de viveiro de tilapia
 Sistema de monitoramento de cultivo de tilapia usando arduino e sensores, junto a interface construida usando node.js e electron.js. 

# Tela inicial do programa
    Tela inicial do proejto, apresentando uma simulação de um card com informações de um tanque de viveira, onde é apresentado os dados de PH, Temperatura e Turbidez.
<img src="/imagens_projeto/tela_inicial.png">

# Estados de card
    Os card tem dois estados, um definido como online quando todos os paramentros estão dentro dos especificados.
## Online
<img src="/imagens_projeto/estado_online.png">

## Offline
    O segundo estado é o offline, ele aparece quando um ou mais dos parametros estão fora da faixa especificada nas definições. Ele mostra qual card está com problema, junto a qual parametro está fora da faixa.

<img src="/imagens_projeto/estado_offline.png">

# Definições
    Nessa tela as definições de operagem podem ser especificadas, entre minimo e maximo. No exemplo 
    espeficidado temos, temperatura, PH e Turbidez.

<img src= "/imagens_projeto/tela_definicoes">


