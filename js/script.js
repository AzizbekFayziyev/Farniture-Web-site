$(document).ready(function () {

    // MOBILE MENU FUNCTION

    $("#mobileMenu").on("click", function () {
        $("#mobileMenu-list").slideToggle();
    });



    // PRODUCT FUNCTIONS

    // Hammasini ko'rsatish
    $("#all").on("click", function () {
        $("#bad").slideDown();
        $("#chair").slideDown();
        $("#light").slideDown();
        $("#sofa").slideDown();
        // active-color
        $("#all").addClass("product-actived");
        $("#bads").removeClass("product-actived");
        $("#chairs").removeClass("product-actived");
        $("#lights").removeClass("product-actived");
        $("#sofas").removeClass("product-actived");
    });

    // Faqat "bads"ni ko'rsatish
    $("#bads").on("click", function () {
        $("#bad").slideDown();
        $("#chair").slideUp();
        $("#light").slideUp();
        $("#sofa").slideUp();
        // active-color
        $("#all").removeClass("product-actived");
        $("#bads").addClass("product-actived");
        $("#chairs").removeClass("product-actived");
        $("#lights").removeClass("product-actived");
        $("#sofas").removeClass("product-actived");
    });
    // Faqat "chairs"ni ko'rsatish
    $("#chairs").on("click", function () {
        $("#bad").slideUp();
        $("#chair").slideDown();
        $("#light").slideUp();
        $("#sofa").slideUp();
        // active-color
        $("#all").removeClass("product-actived");
        $("#bads").removeClass("product-actived");
        $("#chairs").addClass("product-actived");
        $("#lights").removeClass("product-actived");
        $("#sofas").removeClass("product-actived");
    });
    // Faqat "lights"ni ko'rsatish
    $("#lights").on("click", function () {
        $("#bad").slideUp();
        $("#chair").slideUp();
        $("#light").slideDown();
        $("#sofa").slideUp();
        // active-color
        $("#all").removeClass("product-actived");
        $("#bads").removeClass("product-actived");
        $("#chairs").removeClass("product-actived");
        $("#lights").addClass("product-actived");
        $("#sofas").removeClass("product-actived");
    });
    // Faqat "sofa"ni ko'rsatish
    $("#sofas").on("click", function () {
        $("#bad").slideUp();
        $("#chair").slideUp();
        $("#light").slideUp();
        $("#sofa").slideDown();
        // active-color
        $("#all").removeClass("product-actived");
        $("#bads").removeClass("product-actived");
        $("#chairs").removeClass("product-actived");
        $("#lights").removeClass("product-actived");
        $("#sofas").addClass("product-actived");
    });


    // Cursor-style

    let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");

    document.addEventListener("mousemove", function (e) {
        let X = e.clientX;
        let Y = e.clientY;

        cursor.style.left = X + "px";
        cursor.style.top = Y + "px";
        cursor2.style.left = X + "px";
        cursor2.style.top = Y + "px";
        
        cursor.style.display = "block";
        cursor2.style.display = "block";
    });

    document.addEventListener("mouseout", function () {
        cursor.style.display = "none";
        cursor2.style.display = "none";
    });

});







