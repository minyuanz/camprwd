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

    $(".ask").click(function () {
        alert("成功加入詢問清單。")
    })

    $(".ccart").click(function () {
        alert("成功加入購物車。")
    })


    //    var aa = [{
    //     aa:"bb",
    //     cc:"dd"
    //    }]

    //    var aaString=JSON.stringify(aa)
    //    console.log(aaString)
    //    localStorage.setItem("ddd", aaString)

    //    var get = localStorage.getItem("ddd")
    //    console.log(get)
    //    var gett=JSON.parse(get)
    //    console.log(gett[0].aa)


    //localStorage
    // $(".ask").click(()=>{
    //     // console.log("aaa")
    //     let pic = $(".showpic img").data("pic")
    //     // console.log(pic)
    //     let txt = $(".txt h2").data("txt")
    //     // console.log(txt)
        
    //     let list =[{
    //         "pic" : pic,
    //         "txt": txt
    //     }]
    //     // console.log(list[0].pic)
        
    //     localStorage.setItem("aaa",JSON.stringify(list)) //轉成字串存進localstorage
    //     let aaaa = localStorage.getItem("aaa") //提出string
    //     let json = JSON.parse(aaaa)  //轉成物件
    //     console.log(typeof json)
    //     console.log(json[0].txt)
    //     console.log(json[0].pic)
    // })

})
