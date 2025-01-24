let c_width = 252*2;
let line_width = 100
let final_right_pos = c_width + line_width;
let final_left_pos = -line_width;

function get_lines(c1, c2, r, direction=1) {

    // const offset = c1 + direction;
    const directional_offset = r;
    
    if(direction < 0) {

        return `
        <!--Circles -->
        <circle cx="${c1}" cy="${c2}" r="2" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Lines -->
        <line x1="${c1}" y1="${c2}" x2="${c1}" y2="${c2-directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <line x1="${c1}" y1="${c2-directional_offset}" x2="${final_left_pos}" y2="${c2-directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        
        `
    }
    else {

        return `
            <!--Circles -->
            <circle cx="${c1}" cy="${c2}" r="2" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            <!-- Lines -->
            <line x1="${c1}" y1="${c2}" x2="${c1}" y2="${c2-directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            <line x1="${c1}" y1="${c2-directional_offset}" x2="${final_right_pos}" y2="${c2-directional_offset}" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
            
        `
    }
}



console.log(get_lines(185, 162, 40 ,-40))
console.log("=======================")
console.log(get_lines(259, 162, 40, 40))
console.log("=======================")
console.log(get_lines(111.5+41/2, 61.5+13/2, 0, -40))
console.log("=======================")
console.log(get_lines(289.5+41/2, 61.5+13/2, 0, 40))
console.log("=======================")
console.log(get_lines((24)/2 + 127.858, 25, 0, -40))
console.log("=======================")
console.log(get_lines((24)/2 + 292.858, 25, 0, 40))