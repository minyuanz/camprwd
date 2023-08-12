$(document).ready(function(){
    $("#north").on("click", function () {
        $(".northarea").slideToggle(500)
    });
    $("#middle").on("click", function () {
        $(".middlearea").slideToggle(500)
    });
    $("#south").on("click", function () {
        $(".southarea").slideToggle(500)
    });
    $("#east").on("click", function () {
        $(".eastarea").slideToggle(500)
    });
})