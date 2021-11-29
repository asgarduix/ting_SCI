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
        trigger: 'hover'
    });
});

// input-field-entry-number-only //
function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

