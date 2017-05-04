$(document).ready( function () {

    // Sortir / Cacher Clavier
    $('.write').click(function() {
        $('#clavier').slideToggle('display');
    });

    //Validation
    /*$('.sub').click(function(){
        window.location.href = "scan.html";
    });*/

    //Selecteur
    var $writePrenom = $('.write#prenom');
    var $writeNom = $('.write#nom');
    var $writeCode = $('.write#code-carte');

    $('.write#prenom').click(function(){
    console.log("toto");
        $('.sub').hide();
        $('.write#nom').removeClass('selected');
        $(this).addClass('selected');
    });
    $('.write#nom').click(function(){
        $('.write#prenom').removeClass('selected');
        $(this).addClass('selected');
        $('.sub').hide();
    });

    $('.write#code-carte').click(function(){
        $(this).addClass('selected');
        $('.sub').hide();
    });

    $('#keyboard li').click(function(){
            var $this = $(this),
            character = $this.html(); //valeur taper

            if($writePrenom.hasClass('selected')) {
                // Supprime
                if ($this.hasClass('delete')) {
                    var html1 = $writePrenom.val();
                    $writePrenom.val(html1.substr(0, html1.length - 1));
                    return false;
                }

                //Envoyer
                if ($this.hasClass('go')){
                    $('#clavier').hide();
                    $('.sub').show();
                    character = '';
                }
                // Ajouter caractère
                $writePrenom.val($writePrenom.val() + character);
            }
            else if ($writeNom.hasClass('selected')){
                // Supprime
                if ($this.hasClass('delete')) {
                    var html2 = $writeNom.val();
                    $writeNom.val(html2.substr(0, html2.length - 1));
                    return false;
                }

                //Envoyer
                if ($this.hasClass('go')){
                    $('#clavier').hide();
                    $('.sub').show();
                    character = '';
                }
                // Ajouter caractère
                $writeNom.val($writeNom.val() + character);
            }
            else if ($writeCode.hasClass('selected')){
                // Supprime
                if ($this.hasClass('delete')) {
                    var html3 = $writeCode.val();
                    $writeCode.val(html3.substr(0, html3.length - 1));
                    return false;
                }

                //Envoyer
                if ($this.hasClass('go')){
                    $('#clavier').hide();
                    $('.sub').show();
                    character = '';
                }
                // Ajouter caractère
                $writeCode.val($writeCode.val() + character);
            }
    });

});