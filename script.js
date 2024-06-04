function toggleMode () {
const html= document.documentElement
html.classList.toggle("Light")

//substituir a imagem ao clicar: 
//1 - pegar a tag img
const img=document.querySelector("#profile img")

//2substituir a imagem
if (html.classList.contains("Light")) {
//se tiver light mode adicionar imagem light

img.setAttribute("src","./assets/assets/avatar leo Light.jpg")

}
//se não estiver no light mode adicionar imagem normal
else {
img.setAttribute("src","./assets/assets/avatar leo.jpg")

}


}



