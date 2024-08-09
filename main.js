import { Key } from "./key.js"

const uploadArea = document.getElementById("uploadArea")
const dropArea = document.getElementById("dropArea")

const exportButton = document.getElementById("exportButton");
const copyButton = document.getElementById("copyButton");

const fileInput = { input: document.getElementById("configFile"), value: null }
/**
 * @type {HTMLInputElement}
 */
const enableTargetButtonsInput = document.getElementById("enableTargetButtons")
/**
 * @type {HTMLInputElement}
 */
const enableGameControlsInput = document.getElementById("enableGameControls")
/**
 * @type {HTMLInputElement}
 */
const enableHandlingSettingsInput = document.getElementById("enableHandlingSettings")
/**
* @type {HTMLInputElement}
*/
const enableMenuControlsInput = document.getElementById("enableMenuControls")
/**
* @type {HTMLInputElement}
*/
const showSecondaryControlsInput = document.getElementById("showSecondaryControls")
/**
* @type {HTMLInputElement}
*/
const showTertiaryControlsInput = document.getElementById("showTertiaryControls")

/**
* @type {HTMLInputElement}
*/
const primaryControlColorInput = document.getElementById("primaryControlColor")
/**
* @type {HTMLInputElement}
*/
const secondaryControlColorInput = document.getElementById("secondaryControlColor")
/**
* @type {HTMLInputElement}
*/
const tertiaryControlColorInput = document.getElementById("tertiaryControlColor")

/**
* @type {HTMLInputElement}
*/
const primaryControlOpacityInput = document.getElementById("primaryControlOpacity")
/**
* @type {HTMLInputElement}
*/
const secondaryControlOpacityInput = document.getElementById("secondaryControlOpacity")
/**
* @type {HTMLInputElement}
*/
const tertiaryControlOpacityInput = document.getElementById("tertiaryControlOpacity")
/**
* @type {HTMLSelectElement}
*/
const keyboardLayoutSelect = document.getElementById("keyboardLayoutSelect")
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("renderedImage");


const KEYNames = {
    "moveLeft": "L",
    "moveRight": "R",
    "softDrop": "SD",
    "hardDrop": "HD",
    "rotateCCW": "CCW",
    "rotateCW": "CW",
    "rotate180": "180",
    "hold": "H",
    "exit": "EX",
    "retry": "R",
    "chat": "CHAT",
    "target1": "T1",
    "target2": "T2",
    "target3": "T3",
    "target4": "T4",
    "menuUp": "MU",
    "menuDown": "MD",
    "menuLeft": "ML",
    "menuRight": "MR",
    "menuBack": "MB",
    "menuConfirm": "MOK",
    "openSocial": "OS"
}

const WASDDefaultControls = {
    moveLeft: ["KEYA", "NUMPAD4"],
    moveRight: ["KEYD", "NUMPAD6"],
    softDrop: ["KEYW", "NUMPAD8"],
    hardDrop: ["KEYS", "NUMPAD5"],
    rotateCCW: ["ARROWLEFT", "NUMPAD7"],
    rotateCW: ["ARROWRIGHT", "NUMPAD9"],
    rotate180: ["ARROWUP", "NUMPAD2"],
    hold: ["SHIFTLEFT", "SHIFTRIGHT", "NUMPADENTER"],
    exit: ["ESCAPE"],
    retry: ["KEYR"],
    chat: ["KEYT"],
    target1: ["DIGIT1"],
    target2: ["DIGIT2"],
    target3: ["DIGIT3"],
    target4: ["DIGIT4"],
    menuUp: ["ARROWUP", "KEYW"],
    menuDown: ["ARROWDOWN", "KEYS"],
    menuLeft: ["ARROWLEFT", "KEYA"],
    menuRight: ["ARROWRIGHT", "KEYD"],
    menuBack: ["ESCAPE", "BACKSPACE"],
    menuConfirm: ["ENTER","SPACE"],
    openSocial: ["TAB"],
}

const guidelineDefaultControls = {
    moveLeft: ["ARROWLEFT", "NUMPAD4"],
    moveRight: ["ARROWRIGHT", "NUMPAD6"],
    softDrop: ["ARROWDOWN", "NUMPAD2"],
    hardDrop: ["SPACE", "NUMPAD8"],
    rotateCCW: ["CTRL", "KEYZ", "NUMPAD3", "NUMPAD7"],
    rotateCW: ["ARROWUP", "KEYX", "NUMPAD5", "NUMPAD9"],
    rotate180: ["KEYA"],
    hold: ["SHIFTLEFT", "SHIFTRIGHT", "KEYC", "NUMPAD0"],
    exit: ["ESCAPE"],
    retry: ["KEYR"],
    chat: ["KEYT"],
    target1: ["DIGIT1"],
    target2: ["DIGIT2"],
    target3: ["DIGIT3"],
    target4: ["DIGIT4"],
    menuUp: ["ARROWUP", "KEYW"],
    menuDown: ["ARROWDOWN", "KEYS"],
    menuLeft: ["ARROWLEFT", "KEYA"],
    menuRight: ["ARROWRIGHT", "KEYD"],
    menuBack: ["ESCAPE", "BACKSPACE"],
    menuConfirm: ["ENTER","SPACE"],
    openSocial: ["TAB"],
}


const gameKeys = [
    "moveLeft",
    "moveRight",
    "softDrop",
    "hardDrop",
    "rotateCCW",
    "rotateCW",
    "rotate180",
    "hold",
    "exit",
    "retry",
    "chat",
]

const targettingButtons = [
    "target1",
    "target2",
    "target3",
    "target4",
]

const menuButtons = [
    "menuUp",
    "menuDown",
    "menuLeft",
    "menuRight",
    "menuBack",
    "menuConfirm",
    "openSocial",
]

const keyboardLayouts = [{
    file: "./keyboard_layout/us_qwerty.js",
    name: "US QWERTY"
}]




function makeColor(colorInput, opacityInput) {
    const opacity = parseInt(opacityInput.value).toString(16) 
    return colorInput.value + (opacity.length == 2 ? opacity : "0" + opacity )
}

async function rerender() {
    /**
     * @type {File}
     */
    const file = fileInput.input.files.length == 0 ? fileInput.value : fileInput.input.files.item(0);

    if (!file) return;

    const { layout } = await import(keyboardLayoutSelect.value)


    const keyData = layout;
    const keys = keyData.keys.map(c => new Key(c));
    const data = JSON.parse(await file.text());


    const fontsize = 14;
    let count = Object.values(data["handling"]).filter(c => c !== false).length;
    const handlingSize = (fontsize + 2) * (count + 1) * (enableHandlingSettingsInput.checked == false ? 0 : 1); 
    
    canvas.width = keyData.keyboardWidth * keyData.width + keyData.keyboardMargin * 2;
    canvas.height = handlingSize + keyData.keyboardHeight * keyData.height +  keyData.keyboardMargin * 2;

    const shownKeys = [];
    if(enableGameControlsInput.checked) {
        shownKeys.push(gameKeys)
    }

    if(enableMenuControlsInput.checked) {
        shownKeys.push(menuButtons)
    }

    if(enableTargetButtonsInput.checked) {
        shownKeys.push(targettingButtons)
    }

    const shownKeysSet = new Set(shownKeys.flat());
    const indexColor = {
        0: makeColor(primaryControlColorInput, primaryControlOpacityInput),
        1: makeColor(secondaryControlColorInput, secondaryControlOpacityInput),
        2: makeColor(tertiaryControlColorInput, tertiaryControlOpacityInput)
    }

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#eeeeee"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (const key of keys) {
        key.draw(ctx, keyData.keyboardMargin, keyData.keyboardMargin);
    }

    let controls;
    if(data["controls"]["style"] === "custom") {
        controls = data["controls"]["custom"]
    }
    else if (data["controls"]["style"] === "wasd") {
        controls = WASDDefaultControls
    }
    else {
        controls = guidelineDefaultControls
    }
    for (const control in controls) {
        if(!shownKeysSet.has(control)) {
            continue;
        }

        const keyName = KEYNames[control];
        for(const i of Object.keys(controls[control]).reverse()) {
            if(i == 1 && !showSecondaryControlsInput.checked) continue;
            if(i >= 2 && !showTertiaryControlsInput.checked) continue;

            const button = controls[control][i];
            const index = keyData.mapping[button.toLowerCase()]
            if(index === undefined || index === null) continue;

            const key = keys[index];

            key.highlight(ctx, keyName, indexColor[i] ?? indexColor[2], "black", keyData.keyboardMargin, keyData.keyboardMargin);
        }
    }

    if(handlingSize == 0) return;

    /*
        "handling": {
            "arr": 0,
            "das": 7.7,
            "dcd": 0,
            "sdf": 40,
            "safelock": true,
            "cancel": false,
            "may20g": false
        },
    }*/
    ctx.font = "bold " + fontsize + "px sans-serif"
    let offset = count;
    
    ctx.fillText("ARR: " + data["handling"]["arr"] + "F", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    ctx.fillText("DAS: " + data["handling"]["das"] + "F", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    ctx.fillText("DCD: " + data["handling"]["dcd"] + "F", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    ctx.fillText("SDF: " + data["handling"]["sdf"] + "X", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))

    if(data["handling"]["safelock"]) {
        ctx.fillText("Prevent accidental missdrop", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    }

    if(data["handling"]["cancel"]) {
        ctx.fillText("Cancel DAS when changing directions", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    }

    if(data["handling"]["may20g"]) {
        ctx.fillText("Prefer soft drop over movement", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    }

}

function checkAllNotNull(a) {
    for (const key in a) {
        const item = a[key];
        if (item === null || item === undefined || !item) {
            throw new Error("Object " + key + " was null")
        }
    }

    console.info("All good!")
}

function setOnChangeEvents(a) {
    for (const key in a) {
        const element = a[key];
        element.addEventListener("change", (ev) => rerender())
    }
}

checkAllNotNull({
    uploadArea,
    dropArea,
    fileInput: fileInput.input,
    enableTargetButtonsInput,
    enableGameControlsInput,
    enableHandlingSettingsInput,
    enableMenuControlsInput,
    showSecondaryControlsInput,
    showTertiaryControlsInput,
    primaryControlColorInput,
    primaryControlOpacityInput,
    secondaryControlColorInput,
    secondaryControlOpacityInput,
    tertiaryControlColorInput,
    tertiaryControlOpacityInput,
    keyboardLayoutSelect,
    exportButton,
    copyButton,
    canvas,
})

setOnChangeEvents({
    fileInput: fileInput.input,
    enableTargetButtonsInput,
    enableGameControlsInput,
    enableHandlingSettingsInput,
    enableMenuControlsInput,
    showSecondaryControlsInput,
    showTertiaryControlsInput,
    primaryControlColorInput,
    primaryControlOpacityInput,
    secondaryControlColorInput,
    secondaryControlOpacityInput,
    tertiaryControlColorInput,
    tertiaryControlOpacityInput,
})

for(const keyboardLayout of keyboardLayouts) {
    const option = document.createElement("option")
    option.innerText = keyboardLayout.name
    option.value = keyboardLayout.file
    keyboardLayoutSelect.appendChild(option)   
}

uploadArea.addEventListener("dragover", e => {
    if (e.dataTransfer.items.length != 1) {
        return
    }
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    dropArea.classList.add("dragOver")
})

dropArea.addEventListener("dragend", e => {
    dropArea.classList.remove("dragOver")
})

dropArea.addEventListener("dragleave", e => {
    dropArea.classList.remove("dragOver")
})

dropArea.addEventListener("drop", e => {
    if (e.dataTransfer.items.length != 1) {
        return
    }

    const file = e.dataTransfer.items[0].getAsFile();
    dropArea.classList.remove("dragOver")

    if (!file.name.endsWith(".ttc")) {
        return;
    }

    e.stopPropagation();
    e.preventDefault();


    fileInput.value = file;
    fileInput.input.value = "";

    rerender()
})


exportButton.addEventListener("click", () => {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = canvas.toDataURL()
    link.click();
})

copyButton.addEventListener("click", () => {
    canvas.toBlob(function(blob) { 
        const item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]); 
    });
})