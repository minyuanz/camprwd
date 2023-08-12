$(document).ready(function () {
    //加減數字、刪除
    $(".btnPlus").on("click", function () {
        let value = $(".countValue").attr("value");
        // console.log(value);
        value++;
        $(".countValue").attr("value", value++)
    });

    $(".btnMinus").on("click", function () {
        let value = $(".countValue").attr("value");
        // console.log(value);
        value--;
        if (value >= 0) {
            $(".countValue").attr("value", value--)
        }
    });

    $(".btnDel").on("click", function () {
        $(".list_group").css("display", "none");
    });

    //表單框focus
    $("input").focus(function () {
        $(this).css("backgroundColor", "#FFFFCC")
    }).blur(function () {
        $(this).css({
            backgroundColor: "#fff",
            // border:"1px solid #333"   
        })
    });

    $("textarea").focus(function () {
        $(this).css("backgroundColor", "#FFFFCC")
    }).blur(function () {
        $(this).css({
            backgroundColor: "#fff",
            // border:"1px solid #333"   
        })
    })

    //step淡出
    $(window).on("scroll", function () {
        if ($(document).scrollTop() > 100) {
            $(".step1").fadeIn(300)
        };
        if ($(document).scrollTop() > 200) {
            $(".step2").fadeIn(300)
        };
        if ($(document).scrollTop() > 300) {
            $(".step3").fadeIn(300)
        };
        if ($(document).scrollTop() > 400) {
            $(".step4").fadeIn(300)
        };
        if ($(document).scrollTop() > 500) {
            $(".step5").fadeIn(300)
        };
    });
})