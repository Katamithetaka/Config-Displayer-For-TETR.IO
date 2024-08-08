const fs = require("fs")

class Key {
    constructor({x, y, width, height, topText, middleText, bottomText, keyCodes}) {
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.width = width ?? 0;
        this.height = height ?? 0;
        this.topText = topText ?? "";
        this.middleText = middleText ?? ""
        this.bottomText = bottomText ?? "";
        this.keyCodes = keyCodes ?? [];
        //margin bottom: 10 px
        // height: 64px
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} xoffset
     * @param {number} yoffset 
     */
    draw(ctx, xoffset, yoffset) {
        ctx.strokeStyle = "black"
        ctx.fillStyle = "#cccccc"
        ctx.beginPath()
        ctx.roundRect(xoffset + this.x, yoffset + this.y, this.width, this.height, 5);
        ctx.fill()
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.roundRect(xoffset + this.x + 6, yoffset + this.y + 4, this.width - 12, this.height - 14, 5);
        ctx.fill()

        const fontSize = 12;
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.font = "normal " + fontSize + "px serif"
        ctx.fillText(this.topText,    xoffset + this.x + 9, yoffset + this.y + 14);
        ctx.fillText(this.middleText, xoffset + this.x + 9, yoffset + this.y + 14 + fontSize);
        ctx.fillText(this.bottomText, xoffset + this.x + 9, yoffset + this.y + 14 + fontSize * 2);

    }
}

const keyData = {
    height: 55,
    width: 55,
    keyboardMargin: 10,
    keyboardWidth: (15 + 3 + 4) + 2 * 1 / 4,
    keyboardHeight: 6+1/2,
    keys: []
}
fs.readdirSync("./unprocessed_layout").forEach(c => {
    const {keyData, keys} = require("./unprocessed_layout/" + c);

    keyData.keys = keys.map(c => ({
        width: c.width / keyData.width,
        height: c.height / keyData.height,
        x: c.x / keyData.width,
        y: c.y / keyData.height,
        ...c
    }))
    
    keyData.mapping = keys.reduce((acc, value, index) => {
        value.keyCodes.forEach(keyCode => {
                acc[keyCode.toLowerCase()] = index
        })
        return acc;
    }, {})
    
    fs.writeFileSync("../keyboard_layout/" + c, "export const layout = " + JSON.stringify(keyData, null, 3));
})


