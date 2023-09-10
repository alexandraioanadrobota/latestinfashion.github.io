var folderImagini = "calea/pana/la/folderul/galeriei/";
var galerie = document.getElementById("galerie");


for (var i = 1; i <= numarImagini; i++) {
    var imagine = document.createElement("img");
    imagine.src = folderImagini + "imagine" + i + ".jpg";
    galerie.appendChild(imagine);
}