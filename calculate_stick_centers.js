function get_centers(c1, c2, r) {

    return `
        <!-- Top -->
        <circle cx="${c1}" cy="${c2+r/2}" r="2" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Right -->
        <circle cx="${c1+r/2}" cy="${c2}" r="2" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Bottom -->
        <circle cx="${c1}" cy="${c2-r/2}" r="2" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        <!-- Left -->
        <circle cx="${c1-r/2}" cy="${c2}" r="2" fill="rgba(1,1,1,1)" stroke="rgba(0,0,0,1)" stroke-width="1"/>
        
    `
}

console.log(get_centers(113, 160, 37.5))
console.log("=======================")
console.log(get_centers(278, 238, 37.5))
console.log("=======================")
console.log(get_centers(166, 238, 37.5))
console.log("=======================")
console.log(get_centers(329, 160, 37.5))
