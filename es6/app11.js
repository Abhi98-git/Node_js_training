const flavours = ["choco", "vanilla", "orange", "coffee"]
const [first, ...rest] = flavours

console.log(rest.join(", "))

const peaks = ["Tallac", "Ralston", "Rose"]
const canyons = ["Ward", "Blackwood"]
const place = [...peaks, ...canyons]

console.log(place)