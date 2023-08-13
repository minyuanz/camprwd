$(document).ready(function () {
    // let totalPrice, totalPrice1, totalPrice2
    
    var price1 = 777;
    var price2 = 333;
    $(".btnMinus1").click(function () {
        let count = $(".count1").val()
        if (count == 1) {
            $(".count1").attr("value", "1")
        }
        else {
            count--
            $(".count1").attr("value", count)
        }

        let price = $(".price1 p span").text()
        // console.log(price)

        totalPrice1 = $(".totalPrice1 p span").text(`${count * price}`)

        // $(".totalPrice1 p").text(`NT $${count * price}`)
        // $(".totalPrice").attr("value", $(".totalPrice1 p").text())

        // $(".totalPrice").attr("value", totalPrice1.text() + totalPrice2.text())
        price1 = parseInt(totalPrice1.text())
        $(".totalPrice").attr("value", price1 + price2)

    })

    $(".btnPlus1").click(function () {
        let count = $(".count1").val()

        // console.log(count)
        count++
        $(".count1").attr("value", count)

        let price = $(".price1 p span").text()
        // console.log(price)

        totalPrice1 = $(".totalPrice1 p span").text(`${count * price}`)
        // console.log(totalPrice1.text())

        // let totalPrice =$(".totalPrice").val()
        // totalPrice.attr("value",Price1)
        // price2 = parseInt($(".price2 p span").text())


        price1 = parseInt(totalPrice1.text())

        $(".totalPrice").attr("value", price1 + price2)
    })

    $(".btnMinus2").click(function () {
        let count = $(".count2").val()
        if (count == 1) {
            $(".count2").attr("value", "1")
        }
        else {
            count--
            $(".count2").attr("value", count)
        }

        let price = $(".price2 p span").text()
        // console.log(price)

        totalPrice2 = $(".totalPrice2 p span").text(`${count * price}`)
        price2 = parseInt(totalPrice2.text())

        $(".totalPrice").attr("value", price1 + price2)

    })

    $(".btnPlus2").click(function () {
        let count = $(".count2").val()

        // console.log(count)
        count++
        $(".count2").attr("value", count)

        let price = $(".price2 p span").text()
        // console.log(price)

        totalPrice2 = $(".totalPrice2 p span").text(`${count * price}`)
        price2 = parseInt(totalPrice2.text())

        $(".totalPrice").attr("value", price1 + price2)

    })


























})