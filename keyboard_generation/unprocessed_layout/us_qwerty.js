const {Key} = require("../key.cjs");

const keyData = {
   height: 55,
   width: 55,
   keyboardMargin: 10,
   keyboardWidth: (15 + 3 + 4) + 2 * 1 / 4, // NOTE: multiplied with width
   keyboardHeight: 6+1/2, // NOTE: Multiplied with height
}

// US KEYBOARD
const keys = [
   new Key({
       topText: "Esc",
       bottomText: "",
       x: 0,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["Escape"]
   }),
   new Key({
       topText: "F1",
       bottomText: "",
       x: keyData.width * 2,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F1"]

   }),
   new Key({
       topText: "F2",
       bottomText: "",
       x: keyData.width * 3,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F2"]

   }),
   new Key({
       topText: "F3",
       bottomText: "",
       x: keyData.width * 4,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F3"]
   }),
   new Key({
       topText: "F4",
       bottomText: "",
       x: keyData.width * 5,
       y: 0,
       height: keyData.height,
       width: keyData.width
       ,
       keyCodes: ["F4"]

   }),
   new Key({
       topText: "F5",
       bottomText: "",
       x: keyData.width * 6 + keyData.width / 2,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F5"]

   }),
   new Key({
       topText: "F6",
       bottomText: "",
       x: keyData.width * 7 + keyData.width / 2,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F6"]

   }),
   new Key({
       topText: "F7",
       bottomText: "",
       x: keyData.width * 8 + keyData.width / 2,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F7"]
   }),
   new Key({
       topText: "F8",
       bottomText: "",
       x: keyData.width * 9 + keyData.width / 2,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F8"]
   }),
   new Key({
       topText: "F9",
       bottomText: "",
       x: keyData.width * 11,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F9"]
   }),
   new Key({
       topText: "F10",
       bottomText: "",
       x: keyData.width * 12,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F10"]
   }),
   new Key({
       topText: "F11",
       bottomText: "",
       x: keyData.width * 13,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F11"]
   }),
   new Key({
       topText: "F12",
       bottomText: "",
       x: keyData.width * 14,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F12"]
   }),
   new Key({
       topText: "PrtSc",
       bottomText: "",
       x: keyData.width * 15 + keyData.width / 4,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["F13"]
   }),
   new Key({
       topText: "Scroll",
       middleText: "Lock",
       bottomText: "",
       x: keyData.width * 16 + keyData.width / 4,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["ScrollLock"]
   }),
   new Key({
       topText: "Pause",
       middleText: "",
       bottomText: "Break",
       x: keyData.width * 17 + keyData.width / 4,
       y: 0,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["Pause"]
   }),
   // 2ND ROW (Numbers row)
   new Key({
       topText: "-",
       middleText: "",
       bottomText: "`",
       x: 0,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["Backquote"]
   }),
   new Key({
       topText: "!",
       middleText: "",
       bottomText: "1",
       x: keyData.width,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT1"]
   }),
   new Key({
       topText: "@",
       middleText: "",
       bottomText: "2",
       x: keyData.width * 2,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT2"]
   }),
   new Key({
       topText: "#",
       middleText: "",
       bottomText: "3",
       x: keyData.width * 3,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT3"],
   }),
   new Key({
       topText: "$",
       middleText: "",
       bottomText: "4",
       x: keyData.width * 4,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT4"]
   }),
   new Key({
       topText: "%",
       middleText: "",
       bottomText: "5",
       x: keyData.width * 5,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT5"]
   }),
   new Key({
       topText: "^",
       middleText: "",
       bottomText: "6",
       x: keyData.width * 6,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT6"]

   }),
   new Key({
       topText: "&",
       middleText: "",
       bottomText: "7",
       x: keyData.width * 7,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT7"]
   }),
   new Key({
       topText: "*",
       middleText: "",
       bottomText: "8",
       x: keyData.width * 8,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT8"]
   }),
   new Key({
       topText: "(",
       middleText: "",
       bottomText: "9",
       x: keyData.width * 9,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT9"]
   }),
   new Key({
       topText: ")",
       middleText: "",
       bottomText: "0",
       x: keyData.width * 10,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DIGIT0"]

   }),
   new Key({
       topText: "_",
       middleText: "",
       bottomText: "-",
       x: keyData.width * 11,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["Minus"]

   }),
   new Key({
       topText: "+",
       middleText: "",
       bottomText: "=",
       x: keyData.width * 12,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["EQUAL"]

   }),
   new Key({
       topText: "Backspace",
       middleText: "",
       bottomText: "",
       x: keyData.width * 13,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * 2,
       keyCodes: ["BACKSPACE"]
   }),
   new Key({
       topText: "Insert",
       bottomText: "",
       x: keyData.width * 15 + keyData.width / 4,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["INSERT"]
   }),
   new Key({
       topText: "Home",
       middleText: "",
       bottomText: "",
       x: keyData.width * 16 + keyData.width / 4,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["Home"]

   }),
   new Key({
       topText: "PgUp",
       middleText: "",
       bottomText: "",
       x: keyData.width * 17 + keyData.width / 4,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["PAGEUP"]
   }),
   new Key({
       topText: "Num",
       middleText: "Lock",
       bottomText: "",
       x: keyData.width * 18 + keyData.width / 2,
       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMLOCK"]
   }),
   new Key({
       topText: "/",
       middleText: "",
       bottomText: "",
       x: keyData.width * 19 + keyData.width / 2,

       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPADDIVIDE"]

   }),
   new Key({
       topText: "*",
       middleText: "",
       bottomText: "",
       x: keyData.width * 20 + keyData.width / 2,

       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPADMULTIPLY"]

   }),
   new Key({
       topText: "-",
       middleText: "",
       bottomText: "",
       x: keyData.width * 21 + keyData.width / 2,

       y: keyData.height + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPADSUBSTRACT"]

   }),
   // 3RD ROW (QWERTY ROW)
   new Key({
       topText: "Tab",
       middleText: "",
       bottomText: "",
       x: 0,
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width + keyData.width / 2,
       keyCodes: ["TAB"]

   }),
   new Key({
       topText: "Q",
       middleText: "",
       bottomText: "",
       x: keyData.width * (1 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYQ"]

   }),
   new Key({
       topText: "W",
       middleText: "",
       bottomText: "",
       x: keyData.width * (2 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYW"]
   }),
   new Key({
       topText: "E",
       middleText: "",
       bottomText: "",
       x: keyData.width * (3 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYE"]
   
   }),
   new Key({
       topText: "R",
       middleText: "",
       bottomText: "",
       x: keyData.width * (4 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYR"]
   }),
   new Key({
       topText: "T",
       middleText: "",
       bottomText: "",
       x: keyData.width * (5 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYT"]
   }),
   new Key({
       topText: "Y",
       middleText: "",
       bottomText: "",
       x: keyData.width * (6 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYY"]
   }),
   new Key({
       topText: "U",
       middleText: "",
       bottomText: "",
       x: keyData.width * (7 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYU"]
   }),
   new Key({
       topText: "I",
       middleText: "",
       bottomText: "",
       x: keyData.width * (8 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYI"]
   }),
   new Key({
       topText: "O",
       middleText: "",
       bottomText: "",
       x: keyData.width * (9 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYO"]
   }),
   new Key({
       topText: "P",
       middleText: "",
       bottomText: "",
       x: keyData.width * (10 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYP"]
   }),
   new Key({
       topText: "{",
       middleText: "",
       bottomText: "[",
       x: keyData.width * (11 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["BRACKETLEFT"]

   }),
   new Key({
       topText: "}",
       middleText: "",
       bottomText: "]",
       x: keyData.width * (12 + 1 / 2),
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["BRACKETRIGHT"]
   }),
   new Key({
       topText: "|",
       middleText: "",
       bottomText: "\\",
       x: keyData.width * 13 + keyData.width / 2,
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width + keyData.width / 2,
       keyCodes: ["BACKSLASH"]

   }),
   new Key({
       topText: "Delete",
       bottomText: "",
       x: keyData.width * 15 + keyData.width / 4,
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["DELETE"]

   }),
   new Key({
       topText: "End",
       middleText: "",
       bottomText: "",
       x: keyData.width * 16 + keyData.width / 4,
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["END"]

   }),
   new Key({
       topText: "PgDn",
       middleText: "",
       bottomText: "",
       x: keyData.width * 17 + keyData.width / 4,
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["PAGEDOWN"]
   }),
   new Key({
       topText: "7",
       middleText: "",
       bottomText: "Home",
       x: keyData.width * 18 + keyData.width / 2,
       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD7"]

   }),
   new Key({
       topText: "8",
       middleText: "",
       bottomText: "↑",
       x: keyData.width * 19 + keyData.width / 2,

       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD8"]
   }),
   new Key({
       topText: "9",
       middleText: "",
       bottomText: "PgUp",
       x: keyData.width * 20 + keyData.width / 2,

       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD9"]

   }),
   new Key({
       topText: "+",
       middleText: "",
       bottomText: "",
       x: keyData.width * 21 + keyData.width / 2,

       y: keyData.height * 2 + keyData.height / 2,
       height: keyData.height * 2,
       width: keyData.width,
       keyCodes: ["NUMPADADD"]
   }),
   // 4TH ROW (ASDF ROW)

   new Key({
       topText: "Caps Lock",
       middleText: "",
       bottomText: "",
       x: 0,
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 3 / 4),
       keyCodes: ["CAPSLOCK"]
   }),
   new Key({
       topText: "A",
       middleText: "",
       bottomText: "",
       x: keyData.width * (1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYA"]
   }),
   new Key({
       topText: "S",
       middleText: "",
       bottomText: "",
       x: keyData.width * (1 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYS"]
   }),
   new Key({
       topText: "D",
       middleText: "",
       bottomText: "",
       x: keyData.width * (2 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYD"]
   }),
   new Key({
       topText: "F",
       middleText: "",
       bottomText: "",
       x: keyData.width * (3 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYF"]
   }),
   new Key({
       topText: "G",
       middleText: "",
       bottomText: "",
       x: keyData.width * (4 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYG"]
   }),
   new Key({
       topText: "H",
       middleText: "",
       bottomText: "",
       x: keyData.width * (5 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYH"]
   }),
   new Key({
       topText: "J",
       middleText: "",
       bottomText: "",
       x: keyData.width * (6 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYJ"]
   }),
   new Key({
       topText: "K",
       middleText: "",
       bottomText: "",
       x: keyData.width * (7 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYK"]
   }),
   new Key({
       topText: "L",
       middleText: "",
       bottomText: "",
       x: keyData.width * (8 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYL"]
   }),
   new Key({
       topText: ":",
       middleText: "",
       bottomText: ";",
       x: keyData.width * (9 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["SEMICOLON"]
   }),
   new Key({
       topText: "\"",
       middleText: "",
       bottomText: "'",
       x: keyData.width * (10 + 1 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["QUOTE"]

   }),
   new Key({
       topText: "Enter",
       middleText: "",
       bottomText: "",
       x: keyData.width * (12 + 3 / 4),
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (2 + 1 / 4),
       keyCodes: ["ENTER"]

   }),
   new Key({
       topText: "4",
       middleText: "",
       bottomText: "←",
       x: keyData.width * 18 + keyData.width / 2,
       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD4"]

   }),
   new Key({
       topText: "5",
       middleText: "",
       bottomText: "",
       x: keyData.width * 19 + keyData.width / 2,

       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD5"]
   }),
   new Key({
       topText: "6",
       middleText: "",
       bottomText: "→",
       x: keyData.width * 20 + keyData.width / 2,

       y: keyData.height * 3 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD6"]
   }),
   // 5TH ROW (ZXCV ROW)
   new Key({
       topText: "Shift",
       middleText: "",
       bottomText: "",
       x: 0,
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (2 + 1 / 4),
       keyCodes: ["SHIFTLEFT"]
   }),
   new Key({
       topText: "Z",
       bottomText: "",
       x: keyData.width * (2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYZ"]
   }),
   new Key({
       topText: "X",
       bottomText: "",
       x: keyData.width * (1 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYX"]
   }),
   new Key({
       topText: "C",
       bottomText: "",
       x: keyData.width * (2 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYC"]
   }),
   new Key({
       topText: "V",
       bottomText: "",
       x: keyData.width * (3 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYV"]
   }),
   new Key({
       topText: "B",
       bottomText: "",
       x: keyData.width * (4 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYB"]
   }),
   new Key({
       topText: "N",
       bottomText: "",
       x: keyData.width * (5 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYN"]

   }),
   new Key({
       topText: "M",
       bottomText: "",
       x: keyData.width * (6 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["KEYM"]
   }),
   new Key({
       topText: "<",
       bottomText: ",",
       x: keyData.width * (7 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["COMMA"]
   }),
   new Key({
       topText: ">",
       bottomText: ".",
       x: keyData.width * (8 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["PERIOD"]
   }),
   new Key({
       topText: "?",
       bottomText: "/",
       x: keyData.width * (9 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["SLASH"]
   }),
   new Key({
       topText: "Shift",
       middleText: "",
       bottomText: "",
       x: keyData.width * (10 + 2 + 1 / 4),
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (2 + 3 / 4),
       keyCodes: ["SHIFTRIGHT"]
   }),

   new Key({
       topText: "↑",
       middleText: "",
       bottomText: "",
       x: keyData.width * 16 + keyData.width / 4,
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["ARROWUP"]
   }),
   new Key({
       topText: "1",
       middleText: "",
       bottomText: "End",
       x: keyData.width * 18 + keyData.width / 2,
       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD1"]
   }),
   new Key({
       topText: "2",
       middleText: "",
       bottomText: "↓",
       x: keyData.width * 19 + keyData.width / 2,

       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD2"]
   }),
   new Key({
       topText: "3",
       middleText: "",
       bottomText: "PgDn",
       x: keyData.width * 20 + keyData.width / 2,

       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPAD3"]
   }),
   new Key({
       topText: "Enter",
       middleText: "",
       bottomText: "",
       x: keyData.width * 21 + keyData.width / 2,

       y: keyData.height * 4 + keyData.height / 2,
       height: keyData.height * 2,
       width: keyData.width,
       keyCodes: ["NUMPADENTER"]
   }),
   // 6th row (CTRL Row)
   new Key({
       topText: "Ctrl",
       middleText: "",
       bottomText: "",
       x: 0,
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["CONTROLLEFT"]

   }),
   new Key({
       topText: "Win",
       middleText: "",
       bottomText: "",
       x: keyData.width * 1 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["METALEFT"]
   }),
   new Key({
       topText: "Alt",
       middleText: "",
       bottomText: "",
       x: keyData.width * 2 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["ALTLEFT"]
   }),
   new Key({
       topText: "",
       middleText: "",
       bottomText: "",
       x: keyData.width * 3 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (6 + 1 / 4),
       keyCodes: ["SPACE"]
   }),
   new Key({
       topText: "Alt",
       middleText: "",
       bottomText: "",
       x: keyData.width * 8 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["ALTRIGHT"]
   }),
   new Key({
       topText: "Win",
       middleText: "",
       bottomText: "",
       x: keyData.width * 9 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["METARIGHT"]

   }),
   new Key({
       topText: "Menu",
       middleText: "",
       bottomText: "",
       x: keyData.width * 10 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["CONTEXTMENU"]

   }),
   new Key({
       topText: "Ctrl",
       middleText: "",
       bottomText: "",
       x: keyData.width * 11 * (1 + 1 / 4),
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * (1 + 1 / 4),
       keyCodes: ["CONTROLRIGHT"]

   }),
   new Key({
       topText: "←",
       bottomText: "",
       x: keyData.width * 15 + keyData.width / 4,
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["ARROWLEFT"]

   }),
   new Key({
       topText: "↓",
       middleText: "",
       bottomText: "",
       x: keyData.width * 16 + keyData.width / 4,
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["ARROWDOWN"]
   }),
   new Key({
       topText: "→",
       middleText: "",
       bottomText: "",
       x: keyData.width * 17 + keyData.width / 4,
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["ARROWRIGHT"]
   }),

   new Key({
       topText: "0",
       middleText: "",
       bottomText: "Ins",
       x: keyData.width * 18 + keyData.width / 2,
       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width * 2,
       keyCodes: ["NUMPAD0"]
   }),
   new Key({
       topText: ".",
       middleText: "",
       bottomText: "Del",
       x: keyData.width * 20 + keyData.width / 2,

       y: keyData.height * 5 + keyData.height / 2,
       height: keyData.height,
       width: keyData.width,
       keyCodes: ["NUMPADDECIMAL"]

   }),

]

module.exports = {
   keyData,
   keys
}