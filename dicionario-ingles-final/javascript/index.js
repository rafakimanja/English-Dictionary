
let body = document.querySelector('body')
let inputDarkMode = document.getElementById('mode')
let labelPalavras = document.querySelector('div.container')
let containerPalavra = document.querySelectorAll('div.palavra')  
let sol = document.getElementById('light')
let lua = document.getElementById('dark')

inputDarkMode.addEventListener('change', darkMode)


function darkMode(){
    if(inputDarkMode.checked){
        body.setAttribute("dark", "true")
        labelPalavras.setAttribute("dark", "true")
        containerPalavra.forEach(function(containerPalavra){
            containerPalavra.setAttribute("dark", "true")
        })
        lua.style.color = '#5086c1'
        sol.style.color = 'white'
    }else{
        body.removeAttribute("dark")
        labelPalavras.removeAttribute("dark")
        containerPalavra.forEach(function(containerPalavra){
            containerPalavra.removeAttribute("dark")
        })
        lua.style.color = 'black'
        sol.style.color = '#a87b05'
    }
}

let speakIcon = clone.querySelector('#speak-icon')
speakIcon.addEventListener('click', pronunciaPalavra)

function pronunciaPalavra(palavra){

    for(let i=0; i<palavras.length; i++)
    {
        const utterance = new SpeechSynthesisUtterance(palavra)
        utterance.lang = 'en-Us'
        speechSynthesis.speak(utterance)   
    }
}


