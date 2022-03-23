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
        navigator.clipboard.writeText('+33751569918');
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