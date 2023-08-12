 $(document).ready(function(){
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
})