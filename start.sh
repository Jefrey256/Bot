#!/bin/bash

# =================================================================
# Definição das Cores
# Aqui definimos variáveis para cada cor que vamos usar.
# Isso facilita a manutenção e leitura do código.
# =================================================================
CIANO='\033[0;36m'
AMARELO='\033[1;33m'
VERDE='\033[0;32m'
VERMELHO='\033[0;31m'
BRANCO='\033[1;37m'
SEM_COR='\033[0m' # Variável especial para resetar a cor do texto

# =================================================================
# Função para Exibir o Banner
# Criamos uma função para que o código do banner fique separado
# e organizado.
# =================================================================
exibir_banner() {
    clear # Limpa a tela do terminal para um visual mais limpo
    echo -e "${CIANO}############################################################${SEM_COR}"
    echo -e "${CIANO}#                                                          #${SEM_COR}"
    echo -e "${CIANO}#      ${BRANCO}Bem-vindo ao Kimori System por código             ${CIANO}#${SEM_COR}"
    echo -e "${CIANO}#                                                          #${SEM_COR}"
    echo -e "${CIANO}############################################################${SEM_COR}"
    echo "" # Adiciona uma linha em branco para espaçamento
}

# =================================================================
# Script Principal
# =================================================================

# Chama a função para exibir o banner uma vez, no início.
exibir_banner

# Loop infinito para manter o processo sempre em execução.
while :
do
    # Mensagem indicando o início do processo Node.js
    printf "${VERDE}Digite o seu numero para conectar: ${BRANCO}Exemplo: 553891164328${SEM_COR}\n\nSe estiver no termux aguarde, irá aparecer outra mensagem para digitar o código"

    # Executa o seu script Node.js
    node K-CONEXAO.js --code

    # Se o script 'node' parar por algum motivo, o loop continuará a partir daqui.
    printf "\n${VERMELHO}[ALERTA] O processo foi finalizado ou falhou.${SEM_COR}\n"
    printf "${AMARELO}O sistema será reiniciado em 5 segundos...${SEM_COR}\n\n"
    sleep 5 # Pausa de 5 segundos antes de reiniciar
done