function escalar(){

    const playerPosition = document.getElementById('position').value
    const playerName = document.getElementById('name').value
    const playerNumber = document.getElementById('number').value

    const confirmaEscalar = confirm("Deseja escalar " + playerName + " como " + playerPosition + "?")

    if(confirmaEscalar){
        const escalados = document.getElementById('escalados')

        const player = document.createElement('li')
        player.id = 'player-' + playerNumber
        player.innerText = playerPosition + ": " + playerName + " (" + playerNumber + ")"
        escalados.appendChild(player)

        // const playerPosition = document.getElementById('position').value
        // const playerName = document.getElementById('name').value
        // const playerNumber = document.getElementById('number').value
    
        // const ul = document.createElement('ul')
    
        // const playerPositionLi = document.createElement('li')
        // playerPositionLi.innerText = "Posição: " + playerPosition
    
        // const playerNameLi = document.createElement('li')
        // playerNameLi.innerText = "Nome:" + playerName
    
        // const playerNumberLi = document.createElement('li')
        // playerNumberLi.innerText = "Número: " + playerNumber
    
        // ul.append(playerPositionLi, playerNameLi, playerNumberLi)
        // escalados.appendChild(ul)   
        
        const inputs = document.querySelectorAll('#position, #name, #number')

        inputs.forEach(input => {
            input.value = ''
        })
    }
}

function remover(){
    const playerNumber = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + playerNumber)

    const confirmaRemover = confirm("Remover o jogador" + playerToRemove.innerText + "?")

    if(confirmaRemover){
        // numberToRemove.remove()
        document.getElementById('escalados').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}