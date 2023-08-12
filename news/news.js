$(document).ready(function () {
    //算物件高
    let winHeight = $(window).innerHeight();
    // console.log(winHeight);
    $(window).scroll(function () {
        let winScrolltop = $(this).scrollTop();
        // console.log(winScrolltop);
        let all = winHeight + winScrolltop;
        // console.log(all);
        $(".slideIn").each(function () {
            let slideofftop = $(this).offset().top;
            // console.log(slideofftop);
            if (all > slideofftop) {
                $(this).addClass("active")
            }
        })

    });
})