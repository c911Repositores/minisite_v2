$(document).ready(function() {

    //////////////////////////////////////////////////////////////////////////////////////
    // NAV
    //////////////////////////////////////////////////////////////////////////////////////
    $("#menuprimary li a").click(function() {

        $("#menuprimary li a").removeClass("nav-desk__selected"); //Remove any "active" class
        $(this).addClass("nav-desk__selected"); //Add "active" class to selected tab
        return true;
    });

    //////////////////////////////////////////////////////////////////////////////////////
    // TABS
    //////////////////////////////////////////////////////////////////////////////////////
    //When page loads...
    $(".tab_content").hide(); //Hide all content
    $(".features-desk__container ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".desk-map__container ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".features-desk__container .tab_content:first").show(); //Show first tab content
    $(".desk-map__container .tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs.features_section li").click(function() {

        $("ul.tabs.features_section li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".features-desk__container .tab_content").hide(); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value toidentify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });

    //On Click Event
    $("ul.tabs.map_section li").click(function() {

        $("ul.tabs.map_section li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".desk-map__container .tab_content").hide(); //Hide all tab content

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value toidentify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active ID content
        return false;
    });

    //////////////////////////////////////////////////////////////////////////////////////
    // SLIDERS
    //////////////////////////////////////////////////////////////////////////////////////
    $('#headerdesk__slide').slick();
    $('#slider_planphotos').slick({
        dots: true
    });
    $('#technical_slide').slick({
        dots: true
    });
    $('#agency_slide').slick({
        dots: true
    });
    $('#points_slide').slick({
        infinite: true,
        centerMode: true,
        slidesToShow: 7,
        slidesToScroll: 14,
        nextArrow: '<i class="slick-arrow-faright fas fa-chevron-right"></i>',
        prevArrow: '<i class="slick-arrow-faleft fas fa-chevron-left"></i>',
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 14,
              }
            }
        ],
    });

    //////////////////////////////////////////////////////////////////////////////////////
    // HEADER SLIDE
    //////////////////////////////////////////////////////////////////////////////////////
    $(".header-desk__slide .slick-next").click(function() {
        changeinfo();
    });
    $(".header-desk__slide .slick-prev").click(function() {
        changeinfo();
    });

    //////////////////////////////////////////////////////////////////////////////////////
    // HEADER SUBMENU
    //////////////////////////////////////////////////////////////////////////////////////
    $("#headerdesk_plan").click(function() {
        $("#headerdesk_info").removeClass("header-desk__submenu-select");
        $("#headerdesk_plan").addClass("header-desk__submenu-select");

        $("#header_plan").removeClass("hidden-opacity");
        $("#room_measures").addClass("hidden-opacity");
    });
    $("#headerdesk_info").click(function() {
        $("#headerdesk_info").addClass("header-desk__submenu-select");
        $("#headerdesk_plan").removeClass("header-desk__submenu-select");

        $("#header_plan").addClass("hidden-opacity");
        $("#room_measures").removeClass("hidden-opacity");
    });

    //////////////////////////////////////////////////////////////////////////////////////
    // SHARE
    //////////////////////////////////////////////////////////////////////////////////////
    $('#btn_share').hide(0);
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#features_section").offset();
        contenido2 = contenido2.top;
        if(windowHeight >= contenido2  ){
            $('#btn_share').fadeIn(500);
        }else{
            $('#btn_share').fadeOut(500);
        }
    });

    //////////////////////////////////////////////////////////////////////////////////////
    // INTEREST POINTS BUTTONS IN MOBILE
    //////////////////////////////////////////////////////////////////////////////////////
    $("#mobile_map_selectpoints .mobile-map__selectpoints").click(function() {

        $("#mobile_map_selectpoints .mobile-map__selectpoints").removeClass("btn-selected"); //Remove any "active" class
        $(this).addClass("btn-selected"); //Add "active" class to selected tab
        return true;
    });

});

//////////////////////////////////////////////////////////////////////////////////////
// FUNCIONES
//////////////////////////////////////////////////////////////////////////////////////

function changeinfo(){
    var compare = $("#desk__video").hasClass("slick-active");
    if(compare){
        $("#general_info").removeClass("hidden-opacity");
        $("#room_info").addClass("hidden-opacity");
    } else{
        $("#general_info").addClass("hidden-opacity");
        $("#room_info").removeClass("hidden-opacity");
    }
} 

function room_data(){
    var compare = $("#desk__video").hasClass("slick-active");
    if(compare){ 
        $('.header-desk__slide .slick-next').click ();
    }
    window.scroll({
        top: 0
    });
}

function open_share(){
    $("#share_open").removeClass("hidden-opacity");
    $("#share_close").addClass("hidden-opacity");
    $("#share_open").css("right", "0");
}

function btn_close(){
    $("#share_open").addClass("hidden-opacity");
    $("#share_close").removeClass("hidden-opacity");
    $("#share_open").css("right", "-100px");
}

function open_measures(){
    $("#btn_features").removeClass("active"); //Remove any "active" class
    $('#btn_measures').addClass("active"); //Add "active" class to selected tab
    $(".features-desk__container .tab_content").hide(); //Hide all tab content

    var activeTab = $('#tab2'); //Find the href attribute value toidentify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    return false;
}

function navopen_features(){
    open_features();
    open_nevmenu();
}

function navopen_measures(){
    open_measures();
    open_nevmenu();
}

function navroom_data(){
    room_data();
    open_nevmenu();
}

function open_features(){
    $("#btn_measures").removeClass("active"); //Remove any "active" class
    $('#btn_features').addClass("active"); //Add "active" class to selected tab
    $(".features-desk__container .tab_content").hide(); //Hide all tab content

    var activeTab = $('#tab1'); //Find the href attribute value toidentify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active ID content
    return false;
}

function open_nevmenu(){
    var compare = $("#open_navmenu").hasClass("hidden-nav");
    if(compare){
        $("#open_navmenu").removeClass("hidden-nav");
        $("#btn_closebars").removeClass("hidden");
        $("#btn_bars").addClass("hidden");
    } else{
        $("#open_navmenu").addClass("hidden-nav");
        $("#btn_closebars").addClass("hidden");
        $("#btn_bars").removeClass("hidden");
    }
}

function show_desc(){
    var compare = $("#desc_mobile").hasClass("hidden-text");
    if(compare){
        $("#desc_mobile").removeClass("hidden-text");
    } else {
        $("#desc_mobile").addClass("hidden-text");
    }
}

function scroll_home(){
    window.scroll({
        top: 0
    });
}