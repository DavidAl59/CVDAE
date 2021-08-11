console.log("hello") 
function toggleTheme() {
    var theme = document.getElementById("light");
    // J'appelle ma variable par ID "light"
    // Je l'attribue à mon premier CSS "style2" SI l'user est sur le mode light
    // ou je le remplace à mon deuxième CSS "Styledark.css" si l'user est sur le mode Dark
    //SINON : Je reste en mode Light par défaut.
    if (theme.getAttribute("href") == "./style2.css") {
        theme.setAttribute("href","./Styledark.css");
    } else {
        theme.setAttribute("href", "./style2.css");
    }
}
