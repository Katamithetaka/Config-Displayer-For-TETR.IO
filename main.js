import { Key } from "./key.js"

const uploadArea = document.getElementById("uploadArea")
const dropArea = document.getElementById("dropArea")

const exportButton = document.getElementById("exportButton");
const copyButton = document.getElementById("copyButton");

const canvasContainer = document.getElementById("canvasContainer");

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
/**
 * @type {HTMLLabelElement}
 */
const uploadConfigLabel = document.getElementById("uploadConfig");

const themeButton = document.getElementById("themeButton");

const themeButtonIcon = document.getElementById("themeButtonIcon");
const themeButtonText = document.getElementById("themeButtonText");


const body = document.body;

const themes = [{ class: "theme-light", name: "Light Theme", icon: "light_mode" }, { class: "theme-dark", name: "Dark Theme", icon: "dark_mode" }]

const KEYNames = {
    "moveLeft": { shortName: "L", fullName: "Left", },
    "moveRight": { shortName: "R", fullName: "Right", },
    "softDrop": { shortName: "SD", fullName: "Soft Drop", },
    "hardDrop": { shortName: "HD", fullName: "Hard Drop", },
    "rotateCCW": { shortName: "CCW", fullName: "Rotate Counter Clockwise", },
    "rotateCW": { shortName: "CW", fullName: "Rotate Clockwise", },
    "rotate180": { shortName: "180", fullName: "Rotate 180°", },
    "hold": { shortName: "H", fullName: "Hold", },
    "exit": { shortName: "EX", fullName: "Exit", },
    "retry": { shortName: "R", fullName: "Retry", },
    "chat": { shortName: "CHAT", fullName: "Chat", },
    "target1": { shortName: "T1", fullName: "Target 1", },
    "target2": { shortName: "T2", fullName: "Target 2", },
    "target3": { shortName: "T3", fullName: "Target 3", },
    "target4": { shortName: "T4", fullName: "Target 4", },
    "menuUp": { shortName: "MU", fullName: "Menu Up", },
    "menuDown": { shortName: "MD", fullName: "Menu Down", },
    "menuLeft": { shortName: "ML", fullName: "Menu Left", },
    "menuRight": { shortName: "MR", fullName: "Menu Right", },
    "menuBack": { shortName: "MB", fullName: "Menu Back", },
    "menuConfirm": { shortName: "MOK", fullName: "Menu Confirm", },
    "openSocial": { shortName: "OS", fullName: "Open Social" }
}

const KEYFullNames = {
    "moveLeft": "Left",
    "moveRight": "Right",
    "softDrop": "Soft Drop",
    "hardDrop": "Hard Drop",
    "rotateCCW": "Rotate Counter Clockwise",
    "rotateCW": "Rotate Clockwise",
    "rotate180": "Rotate 180°",
    "hold": "Hold",
    "exit": "Exit",
    "retry": "Retry",
    "chat": "Chat",
    "target1": "Target 1",
    "target2": "Target 2",
    "target3": "Target 3",
    "target4": "Target 4",
    "menuUp": "Menu Up",
    "menuDown": "Menu Down",
    "menuLeft": "Meny Left",
    "menuRight": "Menu Right",
    "menuBack": "Menu Back",
    "menuConfirm": "Menu Confirm",
    "openSocial": "Open Social"
}

const SwitchControllerKeyNames = {
    "AXIS_1_NEG": "LJOY_UP",
    "AXIS_1_POS": "LJOY_DOWN",
    "AXIS_0_NEG": "LJOY_LEFT",
    "AXIS_0_POS": "LJOY_RIGHT",
    "BUTTON_0": "BTN_SOUTH",
    "BUTTON_1": "BTN_EAST",
    "BUTTON_2": "BTN_WEST",
    "BUTTON_3": "BTN_NORTH",
    "BUTTON_4": "BTN_L1",
    "BUTTON_5": "BTN_R1",
    "BUTTON_6": "BTN_L2",
    "BUTTON_7": "BTN_R2",
    "BUTTON_8": "BTN_SELECT",
    "BUTTON_9": "BTN_START",
    "BUTTON_10": "BTN_L3",
    "BUTTON_11": "BTN_R3",
    "BUTTON_12": "DPAD_UP",
    "BUTTON_13": "DPAD_DOWN",
    "BUTTON_14": "DPAD_LEFT",
    "BUTTON_15": "DPAD_RIGHT",

    "AXIS_3_NEG": "RJOY_UP",
    "AXIS_3_POS": "RJOY_DOWN",
    "AXIS_2_NEG": "RJOY_LEFT",
    "AXIS_2_POS": "RJOY_RIGHT"
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
    menuConfirm: ["ENTER", "SPACE"],
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
    menuConfirm: ["ENTER", "SPACE"],
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



const nextThemeGenerator = (function* nextThemeGeneratorFunction() {
    let index = 0;
    while (true) {
        yield themes[index]
        index = (index + 1) % themes.length
    }
})()
let currentTheme = nextThemeGenerator.next().value;
let nextTheme = nextThemeGenerator.next().value




function makeColor(colorInput, opacityInput) {
    const opacity = parseInt(opacityInput.value).toString(16)
    return colorInput.value + (opacity.length == 2 ? opacity : "0" + opacity)
}

function fileError(message, ctx) {
    alert(message);
    fileInput.input.value = "";
    fileInput.value = null;
    canvas.width = 0;
    canvas.height = 0;
    renderDefault();
}

async function parseData() {
    /**
     * @type {File}
     */
    const file = fileInput.input.files.length == 0 ? fileInput.value : fileInput.input.files.item(0);

    if (!file) return;

    if (file.size > 1_000_000_000) {
        fileError("MMmh me too I totally believe your TETR.IO config is above 1GB.");
        return;
    }

    let data;
    try {
        data = JSON.parse(await file.text());
    }
    catch (e) {
        fileError("Invalid file! This clearly isn't a TETR.IO configuration file!")
        return;
    }


    if (typeof data !== "object" ||
        (typeof data === "object" && !data)
        ||
        (typeof data === "object" && !!data &&
            !(
                "handling" in data
                && "controls" in data
                && typeof data["handling"] === "object"
                && typeof data["controls"] === "object"
                && !!data["handling"]
                && !!data["controls"]
                && "style" in data["controls"]
                && "custom" in data["controls"]
                && typeof data["controls"]["custom"] === "object"
                && !!data["controls"]["custom"]
                && typeof data["controls"]["style"] === "string"
                && "arr" in data["handling"]
                && "das" in data["handling"]
                && "dcd" in data["handling"]
                && "sdf" in data["handling"]
                && typeof data["handling"]["arr"] === "number"
                && typeof data["handling"]["das"] === "number"
                && typeof data["handling"]["dcd"] === "number"
                && typeof data["handling"]["sdf"] === "number"
                && Object.keys(data["controls"]["custom"]).every(
                    c => typeof data["controls"]["custom"][c] === "object"
                        && !!data["controls"]["custom"][c]
                        && Array.isArray(data["controls"]["custom"][c])
                )
            ))) {
        fileError("Invalid file! This clearly isn't a TETR.IO configuration file!")
        return;
    }

    return data;
}

async function readLayout() {
    const { layout } = await import(keyboardLayoutSelect.value)

    const keyData = layout;
    const keys = keyData.keys.map(c => new Key(c));

    return { keyData, keys };
}

function getControllerData() {
    return { width: 1041, canvasWidth: 770 + 441, height: 383, x: 130 }
}

function resizeCanvas(data, keyData, { controllerKeys }) {

    let count = 0, handlingSize = 0, controller = !!controllerKeys.size;
    const fontsize = 14;
    if (data) {
        count = Object.values(data["handling"]).filter(c => c !== false).length;
        handlingSize = (fontsize + 2) * (count + 1) * (enableHandlingSettingsInput.checked == false ? 0 : 1);
    }

    if (controller) {
        canvasContainer.classList.remove("center")
        canvasContainer.classList.add("left")
    }
    else {
        canvasContainer.classList.remove("left")
        canvasContainer.classList.add("center")
    }

    const { height, canvasWidth, x } = getControllerData();


    const w = Math.max(x + controller * (canvasWidth), keyData.keyboardWidth * keyData.width + keyData.keyboardMargin * 2);
    const h = handlingSize + keyData.keyboardHeight * keyData.height + keyData.keyboardMargin * 2 + controller * height + keyData.keyboardMargin * 2;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    canvas.style.imageRendering = "pixelated"
    canvas.getContext("2d").scale(dpr, dpr);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#eee"
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    return { count, handlingSize, fontsize, ctx }
}

function getKeys(keys, keyData, controls) {

    const shownKeys = [];
    if (enableGameControlsInput.checked) {
        shownKeys.push(gameKeys)
    }

    if (enableMenuControlsInput.checked) {
        shownKeys.push(menuButtons)
    }

    if (enableTargetButtonsInput.checked) {
        shownKeys.push(targettingButtons)
    }

    const shownKeysSet = new Set(shownKeys.flat());

    const parsedKeys = new Map
    const controllerKeys = new Map;

    for (const control in controls) {
        if (!shownKeysSet.has(control)) {
            continue;
        }

        const keyName = KEYNames[control];
        for (const i of Object.keys(controls[control]).reverse()) {
            if (i == 1 && !showSecondaryControlsInput.checked) continue;
            if (i >= 2 && !showTertiaryControlsInput.checked) continue;

            const button = controls[control][i];
            if (!button || typeof button !== "string") {
                console.error("Couldn't find button for value " + control + "( value was: " + button + " )");
                continue;
            }
            if (button in SwitchControllerKeyNames) {
                const name = SwitchControllerKeyNames[button];
                const k = controllerKeys.has(name) ? controllerKeys.get(name) : [];
                k.push({ ...keyName, index: i });
                controllerKeys.set(name, k);
            }
            else {
                const index = keyData.mapping[button.toLowerCase()]
                if (index === undefined || index === null) continue;
                const key = keys[index];

                const k = parsedKeys.has(key) ? parsedKeys.get(key) : [];
                k.push({ ...keyName, index: i });
                parsedKeys.set(key, k);
            }
        }
    }

    return {
        keyboardKeys: parsedKeys,
        controllerKeys,
    }
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} keyboardWidth 
 * @param {number} margin 
 * @param {Map<string, typeof KEYNames["moveLeft"] & {index: number}[]> } controllerKeys 
 */
function renderController(ctx, keyboardWidth, margin, controllerKeys) {
    var img = new Image();
    console.log(controllerKeys.entries())
    const { width, height, canvasWidth, canvasHeight, x: controllerX } = getControllerData();
    img.onload = function () {
        ctx.drawImage(img, controllerX, keyboardWidth + margin, width, height);
        for (const [input, keys] of controllerKeys.entries()) {
            let key = keys.map(c => c.fullName).join(", ");
            const controllerLeftOffset = 100;
            const controllerRightOffset = 700;
            console.log(key, input)

            const textAlign = {
                left: Symbol("left"),
                right: Symbol("right"),
            }
            const inputMap = {
                "LJOY_UP": { x: controllerX + controllerLeftOffset, y: 3 + 141.25, textAlign: textAlign.right },
                "LJOY_DOWN": { x: controllerX + controllerLeftOffset, y: 3 + 178.75, textAlign: textAlign.right },
                "LJOY_LEFT": { x: controllerX + controllerLeftOffset, y: 3 + 160, textAlign: textAlign.right },
                "LJOY_RIGHT": { x: controllerX + controllerLeftOffset, y: 3 + 197.5, textAlign: textAlign.right },
                "RJOY_UP": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 219.25, textAlign: textAlign.left },
                "RJOY_DOWN": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 256.75, textAlign: textAlign.left },
                "RJOY_LEFT": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 275.5, textAlign: textAlign.left },
                "RJOY_RIGHT": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 238, textAlign: textAlign.left },
                "BTN_NORTH": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 141.25, textAlign: textAlign.left },
                "BTN_SOUTH": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 178.75, textAlign: textAlign.left },
                "BTN_WEST": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 197.5, textAlign: textAlign.left },
                "BTN_EAST": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 160, textAlign: textAlign.left },
                "BTN_L1": { x: controllerX + controllerLeftOffset, y: 3 + 68, textAlign: textAlign.right },
                "BTN_R1": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 68, textAlign: textAlign.left },
                "BTN_L2": { x: controllerX + controllerLeftOffset, y: 3 + 25, textAlign: textAlign.right },
                "BTN_R2": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 25, textAlign: textAlign.left },
                "BTN_SELECT": { x: controllerX + controllerLeftOffset, y: 3 + 122, textAlign: textAlign.right },
                "BTN_START": { x: controllerRightOffset + controllerX + controllerLeftOffset, y: 3 + 122, textAlign: textAlign.left },
                "DPAD_UP": { x: controllerX + controllerLeftOffset, y: 3 + 219.25, textAlign: textAlign.right },
                "DPAD_DOWN": { x: controllerX + controllerLeftOffset, y: 3 + 256.75, textAlign: textAlign.right },
                "DPAD_LEFT": { x: controllerX + controllerLeftOffset, y: 3 + 238, textAlign: textAlign.right },
                "DPAD_RIGHT": { x: controllerX + controllerLeftOffset, y: 3 + 275.5, textAlign: textAlign.right },
            }

            ctx.font = "bold 14px 'Bitstream Vera Sans Mono'"
            const metrics = ctx.measureText(key);
            const inputPos = inputMap[input];
            console.log(input)

            if (!inputMap[input]) {
                continue;
            }
            let x = 0;
            const textOffset = 5;
            if (inputMap[input].textAlign == textAlign.left) {
                x = inputPos.x + textOffset;
            }
            else {
                x = inputPos.x - metrics.width - textOffset;
                console.log(metrics.width)
            }
            let y = inputPos.y + keyboardWidth + margin
            ctx.fillStyle = "black"
            ctx.fillText(key, x, y);
        }

    }
    img.src = "controller.svg"
}

function renderKeyboard(ctx, keyData, keyboardKeys) {
    const indexColor = {
        0: makeColor(primaryControlColorInput, primaryControlOpacityInput),
        1: makeColor(secondaryControlColorInput, secondaryControlOpacityInput),
        2: makeColor(tertiaryControlColorInput, tertiaryControlOpacityInput),
        3: makeColor(tertiaryControlColorInput, tertiaryControlOpacityInput)

    }

    for (const [key, keys] of keyboardKeys.entries()) {
        const text = keys.map(x => x.shortName).join("\n");
        if(keys.length == 3) {
            highlight3(ctx, indexColor[keys[0].index], indexColor[keys[1].index], indexColor[keys[2].index], text, key, keyData);
        }
        else if(keys.length == 2) {
            highlight2(ctx, indexColor[keys[0].index], indexColor[keys[1].index], text, key, keyData);
        }
        else if(keys.length == 1) {
            highlight1(ctx, indexColor[keys[0].index], text, key, keyData);
        }
    }

}

function highlight3(ctx, color1, color2, color3, text, key, keyData) {
    ctx.fillStyle = color1
    ctx.fillRect(keyData.keyboardMargin, keyData.keyboardMargin, keyData.keyboardWidth, keyData.keyboardHeight);
    ctx.fillStyle = color2
    ctx.fillRect(keyData.keyboardMargin + keyData.keyboardWidth, keyData.keyboardMargin, keyData.keyboardWidth, keyData.keyboardHeight);
    ctx.fillStyle = color3
    ctx.fillRect(keyData.keyboardMargin + keyData.keyboardWidth * 2, keyData.keyboardMargin, keyData.keyboardWidth, keyData.keyboardHeight);

    renderKeyText(ctx, text, key, keyData);
}

function renderKeyText(ctx, text, key, keyData)
{
    let fontSize = 16;
    ctx.fillStyle = "black"
    ctx.font = "bold " + fontSize + "px sans-serif"
    ctx.textAlign = "center";


    ctx.fillText(text, keyData.keyboardMargin + key.x + key.width / 2, keyData.keyboardMargin + key.y + key.height / 2, key.width - 10);
    ctx.textAlign = "left";

}

function highlight2(ctx, color1, color2, text, key, keyData) {

    ctx.fillStyle = color1

    ctx.beginPath()
    ctx.roundRect(keyData.keyboardMargin + key.x, keyData.keyboardMargin + key.y, key.width, key.height, 5);
    ctx.fill()

    ctx.fillStyle = color2

    ctx.beginPath()
    ctx.roundRect(keyData.keyboardMargin + key.x + 6, keyData.keyboardMargin + key.y + 4, key.width - 12, key.height - 14, 5);
    ctx.fill()


    renderKeyText(ctx, text, key, keyData);


}

function highlight1(ctx, color, text, key, keyData) {
    ctx.fillStyle = color
    console.log(color)
    ctx.beginPath()
    ctx.roundRect(keyData.keyboardMargin + key.x, keyData.keyboardMargin + key.y, key.width, key.height, 5);
    ctx.fill()

    renderKeyText(ctx, text, key, keyData);

}


function render({ ctx }, keys, keyData, { keyboardKeys, controllerKeys }) {




    for (const key of keys) {
        key.draw(ctx, keyData.keyboardMargin, keyData.keyboardMargin);
    }

    if(keyboardKeys.size)
        renderKeyboard(ctx, keyData, keyboardKeys);
    if(controllerKeys.size)
        renderController(ctx, keyData.keyboardHeight * keyData.height + keyData.keyboardMargin * 2, keyData.keyboardMargin * 2, controllerKeys);
}

async function renderDefault() {

    try {
        const layout = await readLayout();
        const { keys, keyData } = layout;

        const parsedKeys = getKeys(keys, keyData, guidelineDefaultControls)
        const canvasData = resizeCanvas(null, keyData, parsedKeys);
        render(canvasData, keys, keyData, parsedKeys);
    }
    catch (e) {
        alert("An error occured while trying to render they keyboard!");
        console.error(e);
    }

}

function getControls(data) {
    let controls;
    if (data["controls"]["style"] === "custom") {
        controls = data["controls"]["custom"]
    }
    else if (data["controls"]["style"] === "wasd") {
        controls = WASDDefaultControls
    }
    else {
        controls = guidelineDefaultControls
    }

    return controls;
}

function renderHandling({ ctx, count, handlingSize, fontsize }, keyData, data) {
    if (handlingSize == 0) return;

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

    ctx.fillText("ARR: " + data["handling"]["arr"] + "F", keyData.keyboardMargin , canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    ctx.fillText("DAS: " + data["handling"]["das"] + "F", keyData.keyboardMargin , canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    ctx.fillText("DCD: " + data["handling"]["dcd"] + "F", keyData.keyboardMargin , canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    ctx.fillText("SDF: " + data["handling"]["sdf"] + "X", keyData.keyboardMargin , canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))

    if (data["handling"]["safelock"]) {
        ctx.fillText("Prevent accidental missdrop", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    }

    if (data["handling"]["cancel"]) {
        ctx.fillText("Cancel DAS when changing directions", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    }

    if (data["handling"]["may20g"]) {
        ctx.fillText("Prefer soft drop over movement", keyData.keyboardMargin, canvas.height - keyData.keyboardMargin - (fontsize + 2) * (--offset))
    }
}

async function rerender() {

    try {

        const layout = await readLayout();
        const data = await parseData();

        if (!layout) {
            alert("Couldn't find Keyboard Layout!");
            return;
        }

        if (!data) {
            renderDefault();
            return;
        }

        const { keys, keyData } = layout;

        if (!keys || !keyData) {
            alert("Keyboard layout was invalid!");
            return;
        }

        const controls = getControls(data);

        if (!controls) {
            alert("Couldn't read TETR.IO controls!");
            return;
        }

        const parsedKeys = getKeys(keys, keyData, controls)
        console.log(parsedKeys)
        const canvasData = resizeCanvas(data, keyData, parsedKeys);

        if (!canvasData) return;

        render(canvasData, keys, keyData, parsedKeys);
        renderHandling(canvasData, keyData, data);

    }
    catch (e) {
        fileError("An error occured while trying to render they keyboard!");
        console.error(e);
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
    body,
    themeButton,
    uploadConfigLabel
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

for (const keyboardLayout of keyboardLayouts) {
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
    
    const img = document.createElement('img');
    img.src = canvas.toDataURL();

    const div = document.createElement('div');
    div.contentEditable = true;
    div.appendChild(img);
    document.body.appendChild(div);
    div.focus();
    window.getSelection().selectAllChildren(div);
    document.execCommand('Copy');  // technically deprecated
    document.body.removeChild(div);
})

renderDefault();


function setTheme() {
    body.classList.toggle(currentTheme.class);
    themeButtonIcon.innerText = currentTheme.icon;
    themeButtonText.innerText = currentTheme.name;
}

themeButton.addEventListener("click", () => {

    // Update base styles
    body.classList.toggle(currentTheme.class);

    currentTheme = nextTheme;

    setTheme();

    nextTheme = nextThemeGenerator.next().value;


});

setTheme();