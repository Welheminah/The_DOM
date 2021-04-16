var callTotalSettingsElem = document.querySelector(".callTotalSettings");
var smsTotalSettingsElem = document.querySelector(".smsTotalSettings");
var totalSettingsElem = document.querySelector(".totalSettings");
var billItemTypeWithSettingsElem = document.querySelector(".billItemTypeWithSettings");
var primaryElem = document.querySelector(".addBtn");

//Settings
var callCostSettingElem = document.querySelector(".callCostSetting");
var smsCostSettingElem = document.querySelector(".smsCostSetting");
var warningLevelSettingElem = document.querySelector(".warningLevelSetting");
var criticalLevelSettingElem = document.querySelector(".criticalLevelSetting");
var updateSettingsElem = document.querySelector(".updateSettings");
// get a reference to the sms or call radio buttons
var callTotalSettingsX = 0;
var smsTotalSettingsX = 0;
var totalSettingsX = 0;

//Settings
var callCostSettingX = 0;
var smsCostSettingX = 0;
var warningLevelSettingX = 0;
var criticalLevelSettingX = 0;

function updateSetting(){
    callCostSettingX = Number(callCostSettingElem.value);
    smsCostSettingX = Number(smsCostSettingElem.value);
    warningLevelSettingX = (warningLevelSettingElem.value);
    criticalLevelSettingX = (criticalLevelSettingElem.value);
   colorBehaviour();

}

updateSettingsElem.addEventListener("click", updateSetting);


function billSettingTotal(){
   
    var billItemTypeWithSettingsElem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (billItemTypeWithSettingsElem){
        if(totalSettingsX < criticalLevelSettingX){
        var checkBtn = billItemTypeWithSettingsElem.value;
        if (checkBtn === 'call'){
            callTotalSettingsX += callCostSettingX;
        }else if (checkBtn === 'sms'){
            smsTotalSettingsX += smsCostSettingX;
        }
    }
}
    callTotalSettingsElem.innerHTML = callTotalSettingsX.toFixed(2);
    smsTotalSettingsElem.innerHTML = smsTotalSettingsX.toFixed(2);
    totalSettingsX = callTotalSettingsX + smsTotalSettingsX;
    totalSettingsElem.innerHTML = totalSettingsX.toFixed(2);

    colorBehaviour();
};

function colorBehaviour(){



    if (totalSettingsX >= criticalLevelSettingX) {
        //make the total to be in red
        totalSettingsElem.classList.remove("warning")

        totalSettingsElem.classList.add("danger")
    } else if (totalSettingsX >= warningLevelSettingX && totalSettingsX < criticalLevelSettingX){
        //make the total to be in orange
        totalSettingsElem.classList.remove("danger")

        totalSettingsElem.classList.add("warning")

    }
    else {
        totalSettingsElem.classList.remove("danger")
        totalSettingsElem.classList.remove("warning")
    }
   
     
}

primaryElem.addEventListener("click", billSettingTotal);
// primaryElem.addEventListener("click", () => {
//     alert("iNSIDE")
// });
// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
