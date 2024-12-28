$(document).ready(function(){

    $(".about-link").on("click",function(){
        
        $(".about-section").show()
        $(".education-section").hide()
        $(".location-section").hide()
        $(".contact-section").hide()
        $(".Myprojects").hide()

        $(".about-link").addClass("active");
        $(".education-link").removeClass("active");
        $(".location-link").removeClass("active");
        $(".contact-link").removeClass("active");
        $(".project-link").removeClass("active");
    })

    $(".education-link").on("click",function(){
        
        $(".education-section").show()
        $(".about-section").hide()
        $(".location-section").hide()
        $(".Myprojects").hide()
        $(".contact-section").hide()

        $(".about-link").removeClass("active");
        $(".education-link").addClass("active");
        $(".location-link").removeClass("active");
        $(".project-link").removeClass("active");
        $(".contact-link").removeClass("active");

    })

    $(".location-link").on("click",function(){
        
        $(".education-section").hide()
        $(".about-section").hide()
        $(".location-section").show()
        $(".Myprojects").hide()
        $(".contact-section").hide()        

        $(".about-link").removeClass("active");
        $(".education-link").removeClass("active");
        $(".location-link").addClass("active");
        $(".project-link").removeClass("active");
        $(".contact-link").removeClass("active");
    })

    $(".project-link").on("click",function(){
        
        $(".education-section").hide()
        $(".about-section").hide()
        $(".location-section").hide()
        $(".Myprojects").show()
        $(".contact-section").hide()        

        $(".about-link").removeClass("active");
        $(".education-link").removeClass("active");
        $(".location-link").removeClass("active");
        $(".project-link").addClass("active");
        $(".contact-link").removeClass("active");
    })

    $(".contact-link").on("click",function(){
        
        $(".education-section").hide()
        $(".about-section").hide()
        $(".location-section").hide()
        $(".Myprojects").hide()
        $(".contact-section").show()

        $(".about-link").removeClass("active");
        $(".education-link").removeClass("active");
        $(".location-link").removeClass("active");
        $(".project-link").removeClass("active");
        $(".contact-link").addClass("active");
    })
})