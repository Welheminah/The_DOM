//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal")
//get a reference to the billString
var billStringField = document.querySelector(".billString");

//get a reference for the bill total element.
var billTotalSpanElement = document.querySelector(".total")
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element
function totalPhoneBill(billString){
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    return roundedBillTotal;

}

function calculateBtnClicked(){
    // logic goes here
    //alert(billStringElement.value)

    var billString = billStringField.value;
    //alert(billString);
    //split the string

    var roundedBillTotal = totalPhoneBill(billString);

    var currentTotal = Number(roundedBillTotal);

    billTotalElement.classList.remove("warning")
    billTotalElement.classList.remove("danger")
   


    if (currentTotal >= 30) {
        //make the total to be in red
        billTotalElement.classList.add("danger")
    } else if (currentTotal >= 20 && currentTotal < 30){
        //make the total to be in orange
        billTotalElement.classList.add("warning")

    }
    
    billTotalElement.innerHTML = roundedBillTotal;

}


calculateBtn.addEventListener("click", calculateBtnClicked)
//link the function to a click event on the calculate button
