$(document).ready(function() {
    let collapse = 0;
    $("#main").css("width", (window.innerWidth - 512) + "px") ;
    $(".search").css("width", (window.innerWidth/2 - 200) + "px");
    $(window).resize(function() {
        $(".search").css("width", (window.innerWidth/2 - 200) + "px")
        if (collapse == 1) {
            $("#main").css("width", (window.innerWidth - 332) + "px") 
        } else if (collapse == 2) {
            $("#main").css("width", (window.innerWidth - 32) + "px") 
        } else {
            $("#main").css("width", (window.innerWidth - 512) + "px") 
        }
    })
    
    $(".letter.two").hide();
    $(".letter.three").hide();
    $("#collapseButton").click(function() {
        if (collapse == 0) {
            collapse = 1;
            $("#tabs").hide();
            $("#left-container").css("width", "300px") 
            $("#list").css("left", "0px") 
            $("#main").css("width", (window.innerWidth - 332) + "px") 
        } else if (collapse == 1) {
            collapse = 2;
            $("#left-container").hide();
            $("#tabs").show();
            $("#left-container").css("width", "480px") 
            $("#list").css("left", "181px") 
            $("#main").css("width", (window.innerWidth - 32) + "px") 

        } else {
            collapse = 0
            $("#left-container").show();
            $("#main").css("width", (window.innerWidth - 512) + "px") 
        }
    })
    $(".box").click(function() {
        $(".box").css("color", "#555555");
        $(this).css("color", "#0068AB");
    })
    

    $(".mailcontainer").mouseenter(function() {
        $(this).css("z-index", "1");
    })
    $(".mailcontainer").mouseleave(function() {
        $(this).css("z-index", "0");
    })
    $(".mailcontainer.one").click(function() {
        $(".letter.one").show();
        $(".letter.two").hide();
        $(".letter.three").hide();
    })
    $(".mailcontainer.two").click(function() {
        $(".letter.one").hide();
        $(".letter.two").show();
        $(".letter.three").hide();
    })
    $(".mailcontainer.three").click(function() {
        $(".letter.one").hide();
        $(".letter.two").hide();
        $(".letter.three").show();
    })
    
    let blue = 0;
    $(".box").click(function() {
        let number = this.className[4];
        $(".blue." + blue).hide();
        $(".blue." + number).show();
        blue = number;
	})
});