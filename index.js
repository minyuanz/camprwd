$(document).ready(function () {


    //banner輪播


    let divWidth = $(".slider-container").width();
    let imgCount = $(".slidepic").length;
    let index = 0;

    function moveToNext() {
        if (index < imgCount - 1) {
            index++;
            $(".slider-container").animate({
                left: index * divWidth * -1
            }, 2000, "linear")
        }
        else if (index == 3) {
            index = 0;
            $(".slider-container").css({
                left: 0
            });
            //    $(".slide4").attr("src", "img/banner2.jpg")
            // auto()
            //    clearInterval(auto);
        };
    };

    let auto = setInterval(moveToNext, 2500);




    //按鈕左右
    let currentindex = 0;
    $("#btnleft").click(function () {
        $("#btnright").removeAttr("disabled");
        currentindex--;
        let width = $(".news").width() + 40;
        // console.log(width);
        $(".news_group").css("left", `-${width * currentindex}px`);
        if (currentindex == 0) {
            $("#btnleft").attr("disabled", "true");
        }

        // console.log(currentindex);
    });

    if (window.innerWidth < 768) {
        $("#btnright").click(function () {
            currentindex++;
            let width = $(".news").width() + 40;
            $(".news_group").css("left", `-${width * currentindex}px`);
            if (currentindex === 5) {
                $("#btnright").attr("disabled", "true");
            }
            $("#btnleft").removeAttr("disabled");

            // console.log(currentindex);

        });
    }
    else if (window.innerWidth < 1200) {
        $("#btnright").click(function () {
            currentindex++;
            let width = $(".news").width() + 40;
            $(".news_group").css("left", `-${width * currentindex}px`);
            if (currentindex === 4) {
                $("#btnright").attr("disabled", "true");
            }
            $("#btnleft").removeAttr("disabled");

            console.log(currentindex);

        })
    };

    //page2top
    $(".page2top").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 700)

    });


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

    //點擊滑動
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // $(".news_group").mousedown(function (e) {
    //     isDown = true;
    //     console.log(e.pageX);
    //     // startX = e.pageX - this.offsetLeft;
    //     // scrollLeft = this.scrollLeft;
    // });

    // $(".news_group").mouseleave(function () {
    //     isDown = false;
    // });

    // $(".news_group").mouseup(function () {
    //     isDown = false;
    // });

    // $(".news_group").mousemove(function (e) {
    //     if (isDown != true) {
    //         return;
    //     };

    //     e.preventDefault;
    //     let x = e.pageX - this.offsetLeft;
    //     let walk = x - startX;
    //     this.scrollLeft = scrollLeft - walk;

    // });
})