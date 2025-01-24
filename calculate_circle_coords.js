let c_width = 252*2;
let line_width = 100
let final_right_pos = c_width + line_width;
let final_left_pos = -line_width;

function get_lines(c1, c2, r, direction=1) {

    // const offset = c1 + direction;
    const directional_offset = r;
    
    if(direction < 0) {

        return `
        <!-- Top -->
        <line x1="${c1}" y1="${c2+r/2}" x2="${final_left_pos}" y2="${c2+r/2}"  fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Right -->
        <line x1="${c1+r/2}" y1="${c2}" x2="${c1+r/2}" y2="${c2+directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <line x1="${c1+r/2}" y1="${c2+directional_offset}" x2="${final_left_pos}" y2="${c2+directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Bottom -->
        <line x1="${c1}" y1="${c2-r/2}" x2="${final_left_pos}" y2="${c2-r/2}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Left -->
        <line x1="${c1-r/2}" y1="${c2}" x2="${final_left_pos}" y2="${c2}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        
        `
    }
    else {

        return `
            <!-- Top -->
            <line x1="${c1}" y1="${c2+r/2}" x2="${final_right_pos}" y2="${c2+r/2}"  fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            <!-- Right -->
            <line x1="${c1+r/2}" y1="${c2}" x2="${final_right_pos}" y2="${c2}"  fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            <!-- Bottom -->
            <line x1="${c1}" y1="${c2-r/2}" x2="${final_right_pos}" y2="${c2-r/2}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            <!-- Left -->
            <line x1="${c1-r/2}" y1="${c2}" x2="${c1-r/2}" y2="${c2+directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            <line x1="${c1-r/2}" y1="${c2+directional_offset}" x2="${final_right_pos}" y2="${c2+directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        
        `
    }
}



console.log(get_lines(113, 160, 37.5, -40))
console.log("=======================")
console.log(get_lines(278, 238, 37.5, 40))
console.log("=======================")
console.log(get_lines(166, 238, 37.5, -40))
console.log("=======================")
console.log(get_lines(329, 160, 37.5, 40))
