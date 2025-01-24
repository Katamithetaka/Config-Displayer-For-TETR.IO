function getDiags(c1, c2, r) {
    const offset = r * Math.sin(Math.PI/4);
    const bottom_left = [c1 - offset, c2 - offset];
    const top_right = [c1 + offset, c2 + offset] 
    return `
        <!-- Bottom left to top right -->
        <line x1="${bottom_left[0]}" y1="${bottom_left[1]}" x2="${top_right[0]}" y2="${top_right[1]}" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Top left to bottom right -->
        <line x1="${bottom_left[0]}" y1="${top_right[1]}" x2="${top_right[0]}" y2="${bottom_left[1]}" stroke="rgba(0,0,0,1)" stroke-width="1"/>
    `
}

console.log(getDiags(113, 160, 28))
console.log("=======================")
console.log(getDiags(278, 238, 28))
