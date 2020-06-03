$(document).ready(function () {
 
    $(".wijk").fadeTo(1,0.3);
    $(".overlay_echt").fadeTo(1,0);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Utrechtse politie");
    $("#nick").text("Bijnaam: -");
    $("#dienst").text("Agenten in dienst: -");
    $("#mean").text("Gemiddelde leeftijd: -");
    $("#open").text("Openstaande zaken: -");
    $("#meldingen").text("Meldingen per dag: -");

    $('.bg_dark').click(function() {
        $('.wijk').fadeTo(1,0.3);
        $(".overlay_echt").fadeTo(1,0);
        $(".future").fadeTo(1,0);
        $("#wijk_titel").text("Utrechtse politie");
        $("#nick").text("Bijnaam: -");
        $("#dienst").text("Agenten in dienst: -");
        $("#mean").text("Gemiddelde leeftijd: -");
        $("#open").text("Openstaande zaken: -");
        $("#meldingen").text("Meldingen per dag: -");
    });

    $('#wittevrouwen').click(function() {
        wittevrouwen();
    });
    $('#tuinwijk').click(function() {
        tuinwijk();
    });
    $('#binnenstad').click(function() {
        binnenstad();
    });
    $('#leidsche').click(function() {
        leidsche();
    });
    $('#sterrenwijk').click(function() {
        sterrenwijk();
    });
    $('#kanaleneiland').click(function() {
        kanaleneiland();
    });
    $('#vleuten').click(function() {
        vleuten();
    });
    $('#overvecht').click(function() {
        overvecht();
    });
    $('#lombok').click(function() {
        lombok();
    });
    $('#uithof').click(function() {
        uithof();
    });
    
});


function alle() {
    $('.wijk').fadeTo(1,0);
    $(".future").fadeTo(1,0);
    $(".overlay_echt").fadeTo(1,1);

    $("#wijk_titel").text("Utrechtse politie");
    $("#nick").text("Bijnaam: -");
    $("#dienst").text("Agenten in dienst: 1293");
    $("#mean").text("Gemiddelde leeftijd: 37");
    $("#open").text("Openstaande zaken: ≈ 197830");
    $("#meldingen").text("Meldingen per dag: ≈ 2789");
    
    $('#future').click(function() {
        if($('#leidsche').prevAll( ".overlay_echt" ).css('opacity') == 1) {
            $(".future").fadeTo(1,1);
        }  
    });
}

function wittevrouwen() {
    $('.wijk').not('#wittevrouwen').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#wittevrouwen').fadeTo(1,0);
    $('#wittevrouwen').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Wittevrouwen politiebureau");
    $("#nick").text("Bijnaam: FBI");
    $("#dienst").text("Agenten in dienst: 25");
    $("#mean").text("Gemiddelde leeftijd: 49");
    $("#open").text("Openstaande zaken: 0");
    $("#meldingen").text("Meldingen per dag: 12");
    
    $('#future').click(function() {
        if($('#wittevrouwen').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#wittevrouwen').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function tuinwijk() {
    $('.wijk').not('#tuinwijk').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#tuinwijk').fadeTo(1,0);
    $('#tuinwijk').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Tuinwijk politiebureau");
    $("#nick").text("Bijnaam: Biker gang");
    $("#dienst").text("Agenten in dienst: 90");
    $("#mean").text("Gemiddelde leeftijd: 48");
    $("#open").text("Openstaande zaken: 83967");
    $("#meldingen").text("Meldingen per dag: 255");
    
    $('#future').click(function() {
        if($('#tuinwijk').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#tuinwijk').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function binnenstad() {
    $('.wijk').not('#binnenstad').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#binnenstad').fadeTo(1,0);
    $('#binnenstad').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Binnenstad politiebureau");
    $("#nick").text("Bijnaam: wijk agenten");
    $("#dienst").text("Agenten in dienst: 187");
    $("#mean").text("Gemiddelde leeftijd: 31");
    $("#open").text("Openstaande zaken: 3");
    $("#meldingen").text("Meldingen per dag: 2");
    
    $('#future').click(function() {
        if($('#binnenstad').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#binnenstad').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function leidsche() {
    $('.wijk').not('#leidsche').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#leidsche').fadeTo(1,0);
    $('#leidsche').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Leidsche politiebureau");
    $("#nick").text("Bijnaam: Boswachters");
    $("#dienst").text("Agenten in dienst: 8");
    $("#mean").text("Gemiddelde leeftijd: 63");
    $("#open").text("Openstaande zaken: 8956");
    $("#meldingen").text("Meldingen per dag: 0");
    
    $('#future').click(function() {
        if($('#leidsche').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#leidsche').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function sterrenwijk() {
    $('.wijk').not('#sterrenwijk').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#sterrenwijk').fadeTo(1,0);
    $('#sterrenwijk').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Sterrenwijk politiebureau");
    $("#nick").text("Bijnaam: mobiele eenheid");
    $("#dienst").text("Agenten in dienst: 213");
    $("#mean").text("Gemiddelde leeftijd: 45");
    $("#open").text("Openstaande zaken: 104598");
    $("#meldingen").text("Meldingen per dag: 523");
    
    $('#future').click(function() {
        if($('#sterrenwijk').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#sterrenwijk').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function kanaleneiland() {
    $('.wijk').not('#kanaleneiland').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#kanaleneiland').fadeTo(1,0);
    $('#kanaleneiland').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Kanaleneiland politiebureau");
    $("#nick").text("Bijnaam: Communisten");
    $("#dienst").text("Agenten in dienst: 22");
    $("#mean").text("Gemiddelde leeftijd: 19");
    $("#open").text("Openstaande zaken: 3");
    $("#meldingen").text("Meldingen per dag: 345");
    
    $('#future').click(function() {
        if($('#kanaleneiland').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#kanaleneiland').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function vleuten() {
    $('.wijk').not('#vleuten').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#vleuten').fadeTo(1,0);
    $('#vleuten').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Vleuten de Meern politiebureau");
    $("#nick").text("Bijnaam: -");
    $("#dienst").text("Agenten in dienst: 0");
    $("#mean").text("Gemiddelde leeftijd: -");
    $("#open").text("Openstaande zaken: onbekend");
    $("#meldingen").text("Meldingen per dag: onbekend");
    
    $('#future').click(function() {
        if($('#vleuten').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#vleuten').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function overvecht() {
    $('.wijk').not('#overvecht').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#overvecht').fadeTo(1,0);
    $('#overvecht').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Overvecht politiebureau");
    $("#nick").text("Bijnaam: army");
    $("#dienst").text("Agenten in dienst: 623");
    $("#mean").text("Gemiddelde leeftijd: 38");
    $("#open").text("Openstaande zaken: 234");
    $("#meldingen").text("Meldingen per dag: 894");
    
    $('#future').click(function() {
        if($('#overvecht').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#overvecht').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function lombok() {
    $('.wijk').not('#lombok').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#lombok').fadeTo(1,0);
    $('#lombok').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Lombok politiebureau");
    $("#nick").text("Bijnaam: hackers");
    $("#dienst").text("Agenten in dienst: 27");
    $("#mean").text("Gemiddelde leeftijd: 17");
    $("#open").text("Openstaande zaken: 14");
    $("#meldingen").text("Meldingen per dag: 637");
    
    $('#future').click(function() {
        if($('#lombok').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#lombok').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

function uithof() {
    $('.wijk').not('#uithof').each(function(){
        $(this).fadeTo(1,0.3);
        $(this).prevAll( ".overlay_echt:first" ).fadeTo(1,0);
    });
    $('#uithof').fadeTo(1,0);
    $('#uithof').prevAll( ".overlay_echt:first" ).fadeTo(1,1);
    $(".future").fadeTo(1,0);

    $("#wijk_titel").text("Uithof politiebureau");
    $("#nick").text("Bijnaam: FBI");
    $("#dienst").text("Agenten in dienst: 98");
    $("#mean").text("Gemiddelde leeftijd: 23");
    $("#open").text("Openstaande zaken: 55");
    $("#meldingen").text("Meldingen per dag: 121");
    
    $('#future').click(function() {
        if($('#uithof').prevAll( ".overlay_echt:first" ).css('opacity') == 1) {
            $(".future").fadeTo(1,0);
            $('#uithof').prevAll( ".future:first" ).fadeTo(1,1);
        }  
    });
}

