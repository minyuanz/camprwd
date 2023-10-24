$(document).ready(function () {


    //banner輪播


    var divWidth = $(".slider-container").width();
    var imgCount = $(".slidepic").length;
    var index = 0;


    $(window).resize(function () {
        divWidth = $(".slider-container").width();
        imgCount = $(".slidepic").length;
        //  index = 0;

    });




    function moveToNext() {
        if (index < imgCount - 1) {
            index++;
            $(".slider-container").animate({
                left: index * divWidth * -1,
                // opacity:0
            }, 2000, "linear")
        }
        else if (index == 3) {
            index = 0;
            $(".slider-container").css({
                left: 0,
            });
            // clearInterval(auto);
        };
    };

    // moveToNext()
    let auto = setInterval(moveToNext, 3000);




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



    // 天氣API
    let selectBox = document.getElementById('selectBox')

    // 建立地區陣列後，依數量生成option使用
    let area = ['taipei', 'taoyuan', 'tainan', 'kaohsiung', 'taichung']
    area.forEach(element => {
        // console.log(element);
        let option = document.createElement('option')
        // option.id = 'selectarea'
        option.innerText = element
        selectBox.appendChild(option)
    });

    // 當select發生change事件後，獲取value並傳進fetchWeather函式執行之
    selectBox.addEventListener('change', function () {
        let location = this.value
        console.log(location);
        fetchWeather(location)
        // console.log(fetchWeather);
    });

    // 一開始給函式預設值是taipei
    fetchWeather('taipei')

    // weatherAPI，會接收location參數替換不同地區
    function fetchWeather(location) {
        let temp = document.querySelectorAll('.temp')
        fetch(`http://api.weatherapi.com/v1/current.json?key=7ffec76ca2d04a7f9a9133511232410&q=${location}&aqi=no`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                let locationName = res.location.name
                let tempC = res.current.temp_c
                // console.log(locationName);
                // console.log(tempC);
                temp[0].innerHTML = `${tempC}&deg;c`
            })
    };
})