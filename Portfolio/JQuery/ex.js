//ex1
$(document).ready(function() {
    if ($("#prenom").is(":visible")) { alert("#monelement est visible"); }
    if ($("#prenom").is(":hidden")) { alert("#monelement est caché"); }
});
//ex2
$(document).ready(function() {
    $("<p>tout le monde </p>").insertAfter('.hello');
});
//ex3
$("#afficher").click(function() {
    alert("Le texte contenu dans le textarea est " + $("#texte").val());
});
//ex4       
        document.getElementById('no_paste').addEventListener('keydown',
            function(foo) {
                if (foo.keyCode == 86) {
                 
                    foo.preventDefault();
                }
            });
 
    //ex5
$(function() {
    $("#mon_image").hover(
        function() {
            $(this).attr('src', 'img/Fond-Automne.jpg');
        },
        function() {
            $(this).attr('src', 'img/Fond-Automne.jpg');
        }
    );
});
//ex6
$(document).ready(function() {
    $("#moncalendrier").datepicker({
        showOn: "both",
        buttonImage: "../img/b_calendar.png",
        buttonImageOnly: true,
        buttonText: 'Cliquer pour choisir une date',
        onClose: function(dateText, inst) {},
        $options
    });
    $('#moncalendrier').focus();

});
//ex7
$("#monimage").hover(
        function() {
           
            $("#temp").remove()
            $(this).append("<div id='temp'></div>"); 
            bgimg = "url(image2.png)";
            $(this).find("#temp").css({ position: "absolute", background: "transparent " + bgimg + " no-repeat", opacity: 0 });
            $(this).find("#temp").stop().animate({ opacity: 1 }, 500);
        },
        function() {
           
            $(this).find("#temp").stop().animate({ opacity: 0 }, 500, function() { $(this).remove() });
        }
    )
    //ex10
$('html').click(function(event) {
    if (event.target.id == 'id_de_mon_element') {
        alert("j'ai cliqué sur mon élément");
    } else {
        alert("j'ai cliqué à l'extérieur de mon élément");
    }
});


//ex11
$(function() {
    var today = new Date();
    var ladate = Date.parse(today);
    var lannee = today.getFullYear();
    var dateprintemps = Date.parse(new Date(lannee, 2, 21));
    var dateete = Date.parse(new Date(lannee, 5, 21));
    var dateautomne = Date.parse(new Date(lannee, 8, 21));
    var datehiver = Date.parse(new Date(lannee, 11, 21));
    if (ladate >= dateprintemps && ladate < dateete) {
        $("#monimage").css({ backgroundImage: "url('img/Fond-Printemps.jpeg')" });
    } else if (ladate >= dateete && ladate < dateautomne) {
        $("#monimage").css({ backgroundImage: "url('img/Fond-Ete.jpg')" });
    } else if (ladate >= dateautomne && ladate < datehiver) {
        $("#monimage").css({ backgroundImage: "url('img/Fond-Automne.jpg')" });
    } else if (ladate >= datehiver || ladate < dateprintemps) {
        $("#monimage").css({ backgroundImage: "url('img/Fond-Hiver.png')" });
    }
});
//ex12
$(function() {
    $('.maclassegenerale').not(".maclasseaexclure").css({ "background": "url('img/Fond-Printemps.jpeg')  no-repeat 5px 5px" });
});
//ex13
$(document).ready(function() {
    var nb_element_de_class;
    nb_element_de_class = $(".ma_classe *").length;
    alert("Nombre d'éléments dans div est " + nb_element_de_class);
});
//ex14
$(function() {
    var mavaleur = parseInt($("#monDiv1").css('height')) - parseInt($("#monDiv2").css('margin-top'));
    alert("la valeur est de " + mavaleur);
});
//ex15
$(function() {
    $(".elementtextarea").attr('readonly', 'readonly');
});
//ex16
$(document).ready(function() {
    $("#calendar").fullCalendar({
        defaultDate: '2020-10-25',
        editable: true,
        eventLimit: true,
    });
});
//ex17
$(document).ready(function() {
    $('#redirection').click(function() {
        $('html,body').animate({ scrollTop: $("#monancre").offset().top }, 'slow');
    });
});
//ex18
$(document).ready(function() {
    $("#monDiv").append("<p>");
});
//ex19
$(document).ready(function() {
    $(':regex(article,^[aeiou])');
});
//ex20
$(document).on("keypress", "input", function(e) {
    if (e.keyCode == 13) { 
        alert('Hey ! Tu as appuyé sur la touche entrée !!');
    }
});
//ex21
$(document).ready(function() {
    $("#monDiv").append("<p>");
});
//ex22
$(document).ready(function() {
    var new_elt = jQuery('<div id="new_elt">Nouvel élément</div>');
});
//ex23
$(document).ready(function() {
    $(".div_fils").click(
        function(event) {
            alert('click fils!');
            event.stopPropagation();
        });
});
//ex24
$(document).ready(function() {
    $("#mondiv").siblings('div').each(function(i) {
        alert(i + ' : ' + $(this).html());
    });
});
//ex25
$(document).ready(function() {
    $("#mondiv").mouseup();
});
//ex26
$(".hello").each(function() {
    $(this).css({ "background": "red" });
});
//ex27
$(function() {
    $('#element option[value="Marseille"]').attr("selected", "selected");
});
//ex28
$(function() {
    $("#ma1erediv").fadeOut('slow').queue(function() {
        $("#ma2emeDiv").fadeIn('slow');
        $(this).dequeue();
    });
});
//ex30 
$(document).ready(function() {
    function FaireClignoterImage() { $("#image-neon").fadeOut(200).delay(300).fadeIn(200); }
    setInterval(FaireClignoterImage, 700);
});