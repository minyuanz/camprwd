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

    //localStorage
    //拿到html結構

    // function newclass() {

    //     let htmll = `
    //     <div class="list_backcolor">
        
    //     <div class="pic">
    //         <img src={img} alt="">
    //         </div>
            
    //         <div class="info">
    //         <div class="txt">
    //         <h3>產品名稱</h3>
    //         <p>{txt}</p>
    //         </div>
            
    //         <div class="count">
    //         <h3>數量</h3>
    //         <div>
    //         <button class="btnMinus">
    //         <i class="fa-solid fa-minus"></i>
    //         </button>
    //         <input type="text" value="0" class="countValue">
    //         <button class="btnPlus">
    //         <i class="fa-solid fa-plus"></i>
    //         </button>
    //         </div>
    //         </div>
    //         </div>
            
    //         <div class="del">
    //         <button class="btnDel">
    //         <i class="fa-solid fa-trash-can"></i>
    //         </button>
    //         </div>
    //         </div>
    //         `
    //     console.log(htmll)
    //     // $(".list_group").append(htmll)
    //     //資料替換進去
    //     // localStorage.setItem("aaa", JSON.stringify(list)) //轉成字串存進localstorage
    //     let aaaa = localStorage.getItem("aaa") //提出string
    //     let json = JSON.parse(aaaa)  //轉成物件
    //     console.log(json)
    //     let bbbb = json[0]
    //     console.log(bbbb)
    //     console.log(bbbb.pic)
    //     console.log(bbbb.txt)
    //     // console.log(json[0].pic)

    //     // console.log(json[0].txt)
    //     // console.log(json[0].pic)
    //     let newhtmll = htmll.replace("{img}", `"${bbbb.pic}"`).replace("{txt}", bbbb.txt)
    //     console.log(newhtmll)
    //     //append
    //     $(".list_group").append(newhtmll)
    // }

})