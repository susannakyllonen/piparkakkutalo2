const images = [
    "0ed97deebd3472a1675f528a7bdd7a93.jpg",
    "31f67ee3712368c2eedf5ddeece93056.jpg",
    "83ab2121f79caff990be01e23479860d.jpg",
    "606fe51dccee7e54b42464119148990c.jpg",
    "51876a44148f65cfac73386d60243de8.jpg",
    "5134082c116c2f445db11a809cfd4a7f.jpg",
    "be1039a9e0fa48690df219807f8c5408.jpg",
    "c78e3d8dd8edfac3076c74cdb0dda1a6.jpg",
    "cf1a0e2e04219447e755d9f5e544cf0a.jpg",
    "dff11309df554860209f51e29cd24318.jpg",
    "e3da220f622ebcb13b2e3c5bdca9694f.jpg",
    "ec90631fadfa926ca254331298348c9b.jpg", 
    "1d2f89d58b16dbc9125a39e8443dfabc.jpg",
    "75ccdb8647a2fc82ca576c23f5c5e5d0.jpg",
    "710874b4446a867cecb6ed4de55c23ad.jpg",
    "bba854962f4ded2778ae3438186d100c.jpg",
    "cd7495af11c6bac9f242282f741124bc.jpg"
    ]

let i = 0

function placeImage(x, y) {

const nextImage = images[i]

const img = document.createElement("img")
img.setAttribute("src", "images/" + nextImage)
img.style.left = x + "px"
img.style.top = y + "px"
img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

document.body.appendChild(img)

i = i + 1

if (i >= image.lenght) {
    i= 0
}

}



document.addEventListener("click",function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)

})