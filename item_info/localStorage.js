$(document).ready(() => {

    $(".ask").click(() => {
        // console.log("aaa")
        let pic = $(".showpic img").data("pic")
        // console.log(pic)
        let txt = $(".txt h2").data("txt")
        // console.log(txt)

        let list = [{
            "pic": pic,
            "txt": txt
        }]
        // console.log(list[0].pic)

        localStorage.setItem("aaa", JSON.stringify(list)) //轉成字串存進localstorage
        let aaaa = localStorage.getItem("aaa") //提出string
        let json = JSON.parse(aaaa)  //轉成物件
        // console.log(typeof json)
        // console.log(json[0].txt)
        // console.log(json[0].pic)

        newclass()
    })
    newclass()


    function newclass() {

        let htmll = `
        <div class="list_backcolor">
        
        <div class="pic">
            <img src={img} alt="">
            </div>
            
            <div class="info">
            <div class="txt">
            <h3>產品名稱</h3>
            <p>{txt}</p>
            </div>
            
            <div class="count">
            <h3>數量</h3>
            <div>
            <button class="btnMinus">
            <i class="fa-solid fa-minus"></i>
            </button>
            <input type="text" value="0" class="countValue">
            <button class="btnPlus">
            <i class="fa-solid fa-plus"></i>
            </button>
            </div>
            </div>
            </div>
            
            <div class="del">
            <button class="btnDel">
            <i class="fa-solid fa-trash-can"></i>
            </button>
            </div>
            </div>
            `
        console.log(htmll)
        // $(".list_group").append(htmll)
        //資料替換進去
        // localStorage.setItem("aaa", JSON.stringify(list)) //轉成字串存進localstorage
        let aaaa = localStorage.getItem("aaa") //提出string
        let json = JSON.parse(aaaa)  //轉成物件
        // console.log(json)
        let bbbb = json[0]
        // console.log(bbbb)
        // console.log(bbbb.pic)
        // console.log(bbbb.txt)
        // console.log(json[0].pic)

        // console.log(json[0].txt)
        // console.log(json[0].pic)
        let newhtmll = htmll.replace("{img}", `"${bbbb.pic}"`).replace("{txt}", bbbb.txt)
        // console.log(newhtmll)
        //append
        $(".list_group").append(newhtmll)
    }
})