module.exports.Key = class Key {
    constructor({x, y, width, height, topText, middleText, bottomText, keyCodes}) {
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.width = width ?? 0;
        this.height = height ?? 0;
        this.topText = topText ?? "";
        this.middleText = middleText ?? ""
        this.bottomText = bottomText ?? "";
        this.keyCodes = keyCodes;
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