var win = $(window);
var winHeight = win.height();
var winWidth = win.width();
var $canvas = document.getElementById("canvas");
var $menu = document.getElementById("left_menu");
var $cont = document.getElementById("right_content");
var $menuBtn = document.getElementById("menuBtn");

// include menu //
function includeMenu() {
    var menu_z, menu_i, menu_elmnt, menu_file, menu_xhttp;
    /* Loop through a collection of all HTML elements: */
    menu_z = document.getElementsByTagName("*");
    for (menu_i = 0; menu_i < menu_z.length; menu_i++) {
        menu_elmnt = menu_z[menu_i];
        /*search for elements with a certain atrribute:*/
        menu_file = menu_elmnt.getAttribute("menu-html");
        if (menu_file) {
            /* Make an HTTP request using the attribute value as the file name: */
            menu_xhttp = new XMLHttpRequest();
            menu_xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { menu_elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { menu_elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    menu_elmnt.removeAttribute("menu-html");
                    includeMenu();
                }
            }
            menu_xhttp.open("GET", menu_file, true);
            menu_xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

// left menu toggle //
function leftMenuToggle() {
    if ($canvas.classList) {
        $canvas.classList.toggle("jsCanvas");
    }

    if ($menu.classList && $cont.classList) {
        $menu.classList.toggle("jsMenuWidth");
        $cont.classList.toggle("jsContMargin");
        $cont.classList.toggle("jsTranslate");
    }
    if ($menuBtn.classList) {
        $menuBtn.classList.toggle("menuBtnToggle");
    }
}

function touchSreen() {
    $(document).mouseup(function(e) {
        if ($(e.target).closest('#left_menu').length === 0 && $(e.target).closest('#menuBtn').length === 0) {
            $('#left_menu').removeClass('jsMenuWidth');
            $("#right_content").removeClass('jsContMargin jsTranslate');
            $('#menuBtn').addClass("menuBtnToggle");
        }
    });
}

var winPoint = true;

function sizeCheck() {
    var winW = $(window).width();
    if (winW <= 767 && winPoint === true) {
        $('#left_menu').removeClass('jsMenuWidth');
        $("#right_content").removeClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').addClass("menuBtnToggle");
        winPoint = false;
    } else if (winW > 767 && winPoint === false) {
        $("#canvas").removeClass('jsCanvas');
        $('#left_menu').addClass('jsMenuWidth');
        $("#right_content").addClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').removeClass("menuBtnToggle");
        winPoint = true;
    }
}

$(window).on('load', function() {
    sizeCheck();
});

$(window).resize(function() {
    var winW = $(window).width();
    if (winW <= 767 && winPoint === true) {
        $('#left_menu').removeClass('jsMenuWidth');
        $("#right_content").removeClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').addClass("menuBtnToggle");
        winPoint = false;
    } else if (winW > 767 && winPoint === false) {
        $("#canvas").removeClass('jsCanvas');
        $('#left_menu').addClass('jsMenuWidth');
        $("#right_content").addClass('jsContMargin');
        $("#right_content").removeClass('jsTranslate');
        $('#menuBtn').removeClass("menuBtnToggle");
        winPoint = true;
    }
});

$(document).ready(function() {
    $(".preventTransitions").each(function(index, element) {
        setTimeout(function() { $(element).removeClass("preventTransitions") }, 10);
    });
});




