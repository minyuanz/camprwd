$(document).ready(function () {
    //小圖換大圖
    let large = document.getElementById("large");
    let smalls = document.getElementsByClassName("small");

    function showlarge(e) {
        large.src = e.target.src;
    }

    for (let i = 0; i < smalls.length; i++) {
        // smalls[i].onclick=showlarge;
        smalls[i].addEventListener("click", showlarge, false);
    }

    //checkbox


    $("#btnpay").on("click", function () {
        $(".pay").slideToggle()
    });

    $("#btncust").on("click", function () {
        $(".cust").slideToggle()
    });
    //點擊滑動
    let isDown = false;
    let startX;
    let scrollLeft;

    $(".product").mousedown(function (e) {
        // e.preventDefault;

        isDown = true;
        console.log(e.pageX);
        startX = e.pageX - this.offsetLeft;
        // console.log(this.offsetLeft);

        console.log(startX);
        scrollLeft = this.scrollLeft;
        // console.log(scrollLeft);

    });

    $(".product").mouseleave(function () {
        // e.preventDefault;
        isDown = false;
    });

    $(".product").mouseup(function () {
        // e.preventDefault;
        isDown = false;
    });

    $(".product").mousemove(function (e) {
        if (isDown != true) {
            return;
        };

        // e.preventDefault;
        let x = e.pageX - this.offsetLeft;
        let walk = x - startX;
        this.scrollLeft = scrollLeft - walk;

    });
})
