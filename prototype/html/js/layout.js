var $canvas = document.getElementById("canvas");
var $menu = document.getElementById("left_menu");
var $cont = document.getElementById("right_content");

// menu-show/hide //
function menuToggle() {
    if ($menu.classList) {
        $menu.classList.toggle("menu-close");
    }

    if ($cont.classList) {
        $cont.classList.toggle("right-fluid");
    }
}

$('.menu-btn a').click(function() {
    $(this).toggleClass('menu-active');
});

// aside-menu-show/hide //
var divs = ["aside_func1", "aside_func2", "aside_func3", "aside_func4", "aside_func5"];
var visibleDivId = null;


function asideToggle(divId) {
    if (visibleDivId === divId) {
        //visibleDivId = null;
    } else {
        visibleDivId = divId;
    }
    var i, divId, div;
    for (i = 0; i < divs.length; i++) {
        divId = divs[i];
        div = document.getElementById(divId);
        if (visibleDivId === divId && div.style.display === "none") {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

// bootstrap-tooltip //
$(document).ready(function() {
    $('.tabulator-cell').each(function() {
        $(this).attr('data-toggle', 'tooltip');
        $(this).attr('data-placement', 'left');
    });
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',
        html: true
    });
});

// input-field-entry-number-only //
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

// include-menu-structure
async function includeMenu() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.querySelectorAll(".menu-list");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeMenu();
                }
            }
            xhttp.open("GET", file, false);
            xhttp.send();
            /* Exit the function: */
            return 
        }
    }
}

includeMenu().then(()=>{
    const pageId = document.getElementById('canvas');
    const pageClass = pageId.getAttribute("class");
    const pageName = pageClass.split('-')[0];
    document.querySelector(`.menu-list a[href^=${pageName}]`).classList.add('menu-list-active');
});

