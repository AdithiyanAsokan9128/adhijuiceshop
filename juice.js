var appleJuice = 0;
var orangeJuice = 0;
var carrotJuice = 0;
var figSmoothie = 0;
var mangoJuice = 0;

function addApple() {
    appleJuice = prompt('Enter the Quantity:');

    while (isNaN(appleJuice)) {

        appleJuice = prompt('Please enter a valid number');
    }
    if (appleJuice != '' && appleJuice != null) {
        appleJuice = parseInt(appleJuice);
        var a = document.getElementById("checkout");
        if (document.getElementById("checkout").style.display = "none") {
            document.getElementById("checkout").style.display = "block";
        }
        document.getElementById("appleCount").innerHTML = `Apple x ${appleJuice}`;
        document.getElementById("appleCount").style.display = "block";
    }

}

function addOrange() {
    orangeJuice = prompt('Enter the Quantity:');

    while (isNaN(orangeJuice)) {

        orangeJuice = prompt('Please enter a valid number');
    }
    orangeJuice = parseInt(orangeJuice);
    if (orangeJuice != '' && orangeJuice != null) {
        orangeJuice = parseInt(orangeJuice);
        if (document.getElementById("checkout").style.display = "none") {
            document.getElementById("checkout").style.display = "block";
        }

        document.getElementById("orangeCount").innerHTML = `Orange x ${orangeJuice}`;
        document.getElementById("orangeCount").style.display = "block";
    }


}
function addCarrot() {
    carrotJuice = prompt('Enter the Quantity:');

    while (isNaN(carrotJuice)) {

        carrotJuice = prompt('Please enter a valid number');
    }
    carrotJuice = parseInt(carrotJuice);
    if (carrotJuice != '' && carrotJuice != null) {
        carrotJuice = parseInt(carrotJuice);
        if (document.getElementById("checkout").style.display = "none") {
            document.getElementById("checkout").style.display = "block";
        }
        document.getElementById("carrotCount").innerHTML = `Carrot x ${carrotJuice}`;
        document.getElementById("carrotCount").style.display = "block"; carrotCount
    }


}
function addFig() {
    figSmoothie = prompt('Enter the Quantity:');

    while (isNaN(figSmoothie)) {

        figSmoothie = prompt('Please enter a valid number');
    }

    figSmoothie = parseInt(figSmoothie);
    if (figSmoothie != '' && figSmoothie != null) {
        figSmoothie = parseInt(figSmoothie);
        if (document.getElementById("checkout").style.display = "none") {
            document.getElementById("checkout").style.display = "block";
        }
        document.getElementById("figCount").innerHTML = `Fig x ${figSmoothie}`;
        document.getElementById("figCount").style.display = "block";
    }


}
function addMango() {
    mangoJuice = prompt('Enter the Quantity:');

    while (isNaN(mangoJuice)) {

        mangoJuice = prompt('Please enter a valid number');
    }
    if (mangoJuice != '' && mangoJuice != null) {
        mangoJuice = parseInt(mangoJuice);
        if (document.getElementById("checkout").style.display = "none") {
            document.getElementById("checkout").style.display = "block";
        }
        document.getElementById("mangoCount").innerHTML = `Mango x ${mangoJuice}`;
        document.getElementById("mangoCount").style.display = "block";
    }



}
function checkOut() {
    var Name = prompt('Enter the your Name:');
    if (Name == '')
        Name = prompt('Enter the your Name:');
    var priceAppleJuice = appleJuice * 5;
    var priceOrangeJuice = orangeJuice * 6;
    var priceCarrotJuice = carrotJuice * 7;
    var priceFigSmoothie = figSmoothie * 8;
    var priceMangoJuice = mangoJuice * 9;
    var total = priceAppleJuice + priceOrangeJuice + priceFigSmoothie + priceMangoJuice + priceCarrotJuice;
    var tax = total * 0.13;
    tax = tax.toFixed(2);
    total = parseFloat(total) + parseFloat(tax);
    document.getElementById("juiceList").style.display = "none";
    document.getElementById("finalItems").style.display = "block";
    document.getElementById("Name").innerHTML = `Hi ${Name}`
    if (priceAppleJuice > 0)
        document.getElementById("finalApple").innerHTML = `Apple Juice x ${appleJuice} = ${priceAppleJuice}`
    if (priceOrangeJuice > 0)
        document.getElementById("finalOrange").innerHTML = `Orange Juice x ${orangeJuice} = ${priceOrangeJuice}`
    if (priceCarrotJuice > 0)
        document.getElementById("finalCarrot").innerHTML = `Carrot Juice x ${carrotJuice} = ${priceCarrotJuice}`
    if (priceFigSmoothie > 0)
        document.getElementById("finalFig").innerHTML = `Fig Smoothie x ${figSmoothie} = ${priceFigSmoothie}`
    if (priceMangoJuice > 0)
        document.getElementById("finalMango").innerHTML = `Mango Juice x ${mangoJuice} = ${priceMangoJuice}`
    document.getElementById("tax").innerHTML = ` Tax @13% = ${tax} `
    document.getElementById("total").innerHTML = ` Total = ${total} `

    parseInt() * parseInt()
}