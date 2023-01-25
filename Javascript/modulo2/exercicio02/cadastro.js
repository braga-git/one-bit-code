function createLabel (text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput (id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const form = document.getElementById('cadastroDevs')
const addTecnologia = document.getElementById('addTecnologia')
const devs = []
let inputRows = 0

addTecnologia.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')


    const expLabel = createLabel('\nExperiência: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover tecnologia'
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel,techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    )

    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const devNameInput = document.getElementById('devName')
    const inputRows = document.querySelectorAll('.inputRow')

    let tecnologias = []
    inputRows.forEach(function(row){
        // #rowId input[name="techName"]
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        tecnologias.push({name: techName, exp: techExp})
    })

    const newDev = {fullname: devNameInput.value, tecnologias: tecnologias}
    devs.push(newDev)
    alert('Dev cadastrado com sucesso')

    devNameInput.value = ''
    inputRows.forEach(function(row){
        row.remove()
    })

    console.log(devs)
})

// function createForm(){
// // input nome da tecnologia
//     const nameLabel = document.createElement('label')
//         nameLabel.innerText = '\nNome da tecnologia: '
//         nameLabel.id = 'name'
        
//             const nameInput = document.createElement('input')
//             nameInput.type = 'text'
//             nameInput.name = 'name'


// // radio nível de experiência
//         const tempoExpLabel = document.createElement('label')
//         tempoExpLabel.innerText = '\nTempo de experiência: '

//             const radio1 = document.createElement('input')
//             radio1.type = 'radio'
//             radio1.name = 'tempoExp'
//             radio1.id = 'tempoExp1'
//             radio1.value = '0-2 anos'

//                 const label1 = document.createElement('label')
//                 label1.innerText = '0-2 anos'
//                 label1.htmlFor = 'tempoExp'

//             const radio2 = document.createElement('input')
//             radio2.type = 'radio'
//             radio2.name = 'tempoExp'
//             radio2.id = 'tempoExp2'
//             radio2.value = '3-4 anos'

//                 const label2 = document.createElement('label')
//                 label2.innerText = '3-4 anos'
//                 label2.htmlFor = 'tempoExp'
        
//             const radio3 = document.createElement('input')
//             radio3.type = 'radio'
//             radio3.name = 'tempoExp'
//             radio3.id = 'tempoExp3'
//             radio3.value = '5+ anos'

//                 const label3 = document.createElement('label')
//                 label3.innerText = '5+ anos\n'
//                 label3.htmlFor = 'tempoExp'


// // botão de remover linha

//     const removerBtn = document.createElement('button')
//     removerBtn.innerText = 'Remover linha de cadastro'
//     removerBtn.addEventListener('submit', {
//     })

//     devForm.append(nameLabel, nameInput, tempoExpLabel, radio1, label1, radio2, label2, radio3, label3, removerBtn)

// }


// devForm.addEventListener('click', function(ev){
//     ev.preventDefault()

//         createForm()

// })

