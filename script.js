var project_1 = {
    name: "Liberty Commerce",
    description: "Liberty Commerce est un projet de création d'un site web d'e-commerce.<br> Réalisé en équipe de deux,\
    nous avons utilisé le framework <strong>Laravel</strong> avec ses vues <strong>blade</strong> pour créer nos affichages; et\
    <strong>Eloquent</strong> son système d'interaction avec les bases de données pour gérer les informations relatives aux\
    produits en vente sur notre site.\nMélangeant <strong>CSS</strong>, <strong>HTML</strong> et <strong>JavaScript</strong>, ce\
    projet m'a permis d'approfondir mes connaissances et développer mes compétences dans les technologies du web et la gestion\
    d'erreurs.",
    photos: ["resources/images/liberty_commerce/photo_1.png", "resources/images/liberty_commerce/photo_2.png", "resources/images/liberty_commerce/photo_3.png"],
}

var project_2 = {
        name: "Clicker Game",
        description: "Clicker Game est un projet de développement d'un jeu vidéo style clicker.<br> Réalisé en équipe de deux,\
    nous avons utilisé <strong>JavaScript</strong> et ses objets pour le développement des personnages et des différents éléments de gameplay\
    ainsi que les <strong>keyframes</strong> de <strong>CSS</strong> pour les animations de nos personnages. Tous les\
    dessins ont été réalisés par <a href=\"https://www.linkedin.com/in/bonhomme-julie/\" target=\"_blank\" \
    title=\"https://www.linkedin.com/in/bonhomme-julie/\">mon binôme</a> (@majolerigolo).",
        photos: ["resources/images/clicker/photo_1.gif", "resources/images/clicker/photo_2.gif", "resources/images/clicker/photo_3.gif"],
        link: ""
    }
    // : <a href=\"https://www.linkedin.com/in/bonhomme-julie/\" target=\"_blank\">Julie BONHOMME</a>

var project_3 = {
    name: "Mygaman",
    description: "Mygaman est un projet personnel de développement d'un jeu vidéo style platformer avec des sprites de Megaman.<br>\
    J'ai utilisé la librairie <strong>JavaScript</strong> <a target=\"_blank\" href=\"https://phaser.io/\"><strong>Phaser</strong></a> ainsi que le logiciel\
    <a target=\"_blank\" href=\"https://www.mapeditor.org/\"><strong>Tiled</strong></a> (pour la génération de la tilemap).<br>J'ai pu expérimenter l'utilisation de spritesheets, la gestion de la physique,\
    des points de vie et\
    des interfaces utilisateur. J'ai aussi pu concevoir des éléments de gameplay comme des tirs, du recul, des collisions...<br>\
    <a target=\"_blank\" href=\"https://xscotty.github.io/Mygaman/\"><strong style=\"font-size: 1.3em;\">Jouer &#127918</strong></a>",
    photos: ["resources/images/megaman/photo_1.gif", "resources/images/megaman/photo_2.gif", "resources/images/megaman/photo_3.gif"],
    link: "https://xscotty.github.io/Mygaman/"
}

var projects = [project_1, project_2, project_3]


var i = 0
var p = 1

var project_desc = document.querySelector(".project_desc")
var description = document.createElement("p")
description.innerHTML = projects[p].description
project_desc.append(description)

var project_visual = document.querySelector(".visual")
var visual = document.createElement("div")
visual.style.content = 'url("' + projects[p].photos[i] + '")'
visual.style.width = "100%"
project_visual.append(visual)

function select_next_image() {
    i += 1
    if (i > 2)
        i = 0
    visual.style.content = 'url("' + projects[p].photos[i] + '")'
}

function select_previous_image() {
    i -= 1
    if (i < 0)
        i = 2
    visual.style.content = 'url("' + projects[p].photos[i] + '")'
}

function refresh_image() {
    visual.style.content = 'url("' + projects[p].photos[i] + '")'
}

function select_previous_project() {
    p -= 1
    if (p < 0)
        p = 2
    description.innerHTML = projects[p].description
    refresh_image()
}

function select_next_project() {
    p += 1
    if (p > 2)
        p = 0
    description.innerHTML = projects[p].description
    refresh_image()
}

function copy_to_clipboard(name) {
    var copyText = document.querySelector("." + name + "_text");
    navigator.clipboard.writeText(copyText.innerHTML);
    if (name == 'phone') {
        navigator.clipboard.writeText('+33617338824');
    }
    show_copy(name)
}

var timeout = false

function show_copy(name) {
    if (timeout == true)
        return
    timeout = true
    var copyMessage = document.querySelector("." + name + "_copy")
    copyMessage.style.visibility = "visible"
    setTimeout(function() {
        copyMessage.style.visibility = "hidden"
        timeout = false
    }, 1000);
}

window.addEventListener('scroll', function() {
    var me_title = document.querySelector('.me h2');
    var me_text = this.document.querySelector('.me p');
    var me_bottom = this.document.querySelector('.bottom_me');
    var projects = this.document.querySelector('.project');
    var title_pos = me_title.getBoundingClientRect();
    var text_pos = me_text.getBoundingClientRect();
    var bottom_pos = me_bottom.getBoundingClientRect();
    var projects_pos = projects.getBoundingClientRect();

    // checking whether fully visible
    if (title_pos.top >= 0 && title_pos.bottom <= window.innerHeight) {
        me_title.style.animation = "1.3s ease-in-out 1 title_anim forwards";
    }

    // checking for partial visibility
    if (text_pos.top < window.innerHeight && text_pos.bottom >= 0) {
        me_text.classList.add("fade_in");
        me_text.style.animationDelay = "0.3s";
    }

    if (bottom_pos.top < window.innerHeight && bottom_pos.bottom >= 0) {
        me_bottom.classList.add("fade_in");
        me_bottom.style.animationDelay = "0.5s";
    }

    if (projects_pos.top < window.innerHeight && projects_pos.bottom >= 0) {
        projects.classList.add("fade_in");
    }
});