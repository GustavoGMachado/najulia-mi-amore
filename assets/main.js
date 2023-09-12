const botaoNao = document.querySelector('#botaoNao')
const botaoNaoInterno = document.querySelector('#botaoNaoInterno')

botaoNao.addEventListener('mouseover', () => {
    //armarzenar o último x e y dentro de uma variável para evitar que fique no mesmo espaço na próxima

    const novoX = Math.floor(Math.random() * (60 - (-80) + 1) + (-80));
    const novoY = Math.floor(Math.random() * (100 - (-200) + 1) + (-200));

    botaoNao.style.position = 'relative'
    botaoNao.style.left = `${novoX}%`
    botaoNao.style.top = `${novoY}%`
})

botaoNaoInterno.addEventListener('mouseover', () => {
    //armarzenar o último x e y dentro de uma variável para evitar que fique no mesmo espaço na próxima

    const novoX = Math.floor(Math.random() * (60 - (-80) + 1) + (-80));
    const novoY = Math.floor(Math.random() * (100 - (-200) + 1) + (-200));

    botaoNao.style.position = 'relative'
    botaoNao.style.left = `${novoX}%`
    botaoNao.style.top = `${novoY}%`
})

