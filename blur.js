const kingston = document.getElementsByClassName('kingston')[0]
const wd = document.getElementsByClassName('wd')[0]
const samsung = document.getElementsByClassName('samsung')[0]
const silicon_power = document.getElementsByClassName('silicon_power')[0]
const amd = document.getElementsByClassName('amd')[0]
const intel = document.getElementsByClassName('intel')[0]

function blur(...blocks){
    for(item of blocks){
        item.classList.add('bluring')
    }
}
kingston.addEventListener('mouseenter', () => {
    blur(wd, samsung, silicon_power, amd, intel)
})
wd.addEventListener('mouseenter', () => {
    blur(kingston, samsung, silicon_power, amd, intel)
})
samsung.addEventListener('mouseenter', () => {
    blur(wd, kingston, silicon_power, amd, intel)
})
silicon_power.addEventListener('mouseenter', () => {
    blur(wd, samsung, kingston, amd, intel)
})
amd.addEventListener('mouseenter', () => {
    blur(wd, samsung, silicon_power, kingston, intel)
})
intel.addEventListener('mouseenter', () => {
    blur(wd, samsung, silicon_power, amd, kingston)
})

function notblur(...blocks){
    for(item of blocks){
        item.classList.remove('bluring')
    }
}
kingston.addEventListener('mouseleave', () => {
    notblur(wd, samsung, silicon_power, amd, intel)
})
wd.addEventListener('mouseleave', () => {
    notblur(kingston, samsung, silicon_power, amd, intel)
})
samsung.addEventListener('mouseleave', () => {
    notblur(wd, kingston, silicon_power, amd, intel)
})
silicon_power.addEventListener('mouseleave', () => {
    notblur(wd, samsung, kingston, amd, intel)
})
amd.addEventListener('mouseleave', () => {
    notblur(wd, samsung, silicon_power, kingston, intel)
})
intel.addEventListener('mouseleave', () => {
    notblur(wd, samsung, silicon_power, amd, kingston)
})