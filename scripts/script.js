window.addEventListener("load", function () {
  document.body.classList.add("loaded")
})


import { initScrollReveal } from "../scripts/scrollreveal.js"
import { hoverChangeExperience } from "../scripts/chanexperience.js"


initScrollReveal()

window.addEventListener("load", function () {
  hoverChangeExperience(
    ".armazem",
    `Trabalhei como entregador na empresa "Armazém Drogaria", sendo responsável pela entrega de medicamentos nas residências, atendente balconista, repositor de suplementos, dentre outros.`,
    "Entregador",
    "Armazém Drogaria",
    "Abr 2024 - Ago 2024 (5 meses)"
  )

  hoverChangeExperience(
    ".uniube",
    `Estudando na Universidade de Uberaba, especificadamente no curso Sistemas de Informação, atualmente no 2º Período. Desenvolvendo técnicas e sistemas eficázes.`,
    "Sistemas de Informação",
    "Uniube",
    "Fev 2024 - o momento"
  )

  hoverChangeExperience(
    ".usina",
    `Trabalhando atualmente na empresa Usina Uberaba S/A, pertencente ao grupo Balbo, na função de Auxiliar Administrativo. Realizando diversos trabalhos administrativos no Controle de Frotas.`,
    "Auxiliar Administrativo",
    "Usina Uberaba S/A",
    "Ago 2024 - o momento"
  )

  hoverChangeExperience(
    ".cristiano",
    `No início da minha carreira profissional, trabalhei como auxiliar de Pintor na empresa Cristiano Fonseca Pinturas em Geral. Operando como auxiliar de preparo, organização, lixamento, transporte e descarga de materias, dentre outros. `,
    "Auxiliar de Pintor",
    "Cristiano Fonseca Pinturas em Geral",
    "2019 - 2023 (4 anos)"
  )
})

audioElement.play()
