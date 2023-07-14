const products = [
    {
        name: "Air force 1 '07' tripple white",
        brand: 'Nike',
        model: 'Air Force 1',
        image: 'https://cdn.flightclub.com/1000/TEMPLATE/251353/1.jpg',
        description: 'Just air forces',
        size: [4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 
            9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,],
        price: 100,
        color: 'white'
    },
    {
        name: "Air Jordan 1 Retro High OG",
        brand: 'Nike',
        model: 'Air Jordan 1',
        image: 'https://cdn.flightclub.com/1000/TEMPLATE/349164/1.jpg',
        description: 'The Air Jordan 1 Retro High OGs an updated version of the classic silhouette and features a neutral color palette. The leather upper appears in white with grey suede overlays and a matching Swoosh logo. The high-cut collar appears in a lighter shade of grey suede and has an ankle flap with the trademark Wings logo. The breathable nylon tongue features a woven black and red Nike tag which provides a subtle pop of color. The shoe is supported by a traditional off-white midsole atop a black rubber outsole for excellent grip.',
        size: [3.5, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 
            9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,],
        price: 176,
        color: 'black/fire red/light smoke grey/sail'
    },
    {
        name: "Air Max 90 'Triple Black",
        brand: 'Nike',
        model: 'Air Max',
        image: 'https://cdn.flightclub.com/1000/TEMPLATE/161164/1.jpg',
        description: "Relesing for the 30th anniversary of the silhouette, the Air Max 90 'Triple Black' emerges with a blacked-out look. The shoe's upper is built with a mix of mesh and leather, with the tonal look continuing onto the TPU badges and eyelets. Underfoot, the midsole houses the usual visible Max Air in the heel for cushioning'",
        size: [3.5, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 
            9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,],
        price: 176,
        color: ' black/black/black'
    },
    {
        name: "Dunk Low Pandas",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/1000/TEMPLATE/253215/1.jpg',
        description: "The Dunk Low 'Black White' also known as 'Panda' brings a classic two-tone look to its classic basketball construction. The shoe's low-top build emerges in leather, with a white base contrasted by black overlays, with further black on the Swoosh branding. Perforations on the toe box provide breathability, while underfoot, the two-tone look is matched by the tooling, which incorporates a concentric rubber outsole for traction.",
        size: [3.5, 4, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 
            9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15,],
        price: 140,
        color: 'white/black/white'
    },
    {
        name: "Yeezy Slides Onyx",
        brand: 'Adidas',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/296154/1.jpg',
        description: "The Dunk Low 'Black White' also known as 'Panda' brings a classic two-tone look to its classic basketball construction. The shoe's low-top build emerges in leather, with a white base contrasted by black overlays, with further black on the Swoosh branding. Perforations on the toe box provide breathability, while underfoot, the two-tone look is matched by the tooling, which incorporates a concentric rubber outsole for traction.",
        size: [3, 4, 5, 6, 7, 8, 9, 10, 10.5, 11, 12, 13, 14, 14.5, 15, 16],
        price: 150,
        color: 'onyx/onyx/onyx'
    },
    {
        name: "Yeezy ",
        brand: 'Adidas',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/296154/1.jpg',
        description: "The Dunk Low 'Black White' also known as 'Panda' brings a classic two-tone look to its classic basketball construction. The shoe's low-top build emerges in leather, with a white base contrasted by black overlays, with further black on the Swoosh branding. Perforations on the toe box provide breathability, while underfoot, the two-tone look is matched by the tooling, which incorporates a concentric rubber outsole for traction.",
        size: [3, 4, 5, 6, 7, 8, 9, 10, 10.5, 11, 12, 13, 14, 14.5, 15, 16],
        price: 150,
        color: 'onyx/onyx/onyx'
    },
    {
        name: "Dunk Low Reverse Panda",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/319980/1.jpg',
        description: "The Nike Dunk Low 'Reverse Panda' gives a simplistic two-color makeover to the classic basketball sneaker. The white leather upper is tied with black laces and complemented by matching stitching and a black Swoosh. The shoe also features traditional elements like a breathable nylon tongue and a perforated toe box. Underfoot, the durable rubber cupsole with a foam wedge on the inside rides on the rubber outsole with a concentric-circle traction pattern which was initially created for college basketball courts.",
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 137,
        color: 'white/black'
    },
    {
        name: "Dunk Low Grey Fog",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/2200/TEMPLATE/280880/1.jpg',
        description: "Delivering a subtle two-tone colorway of the classic silhouette originally released in 1985 is the Nike Dunk Low 'Grey Fog'. The all-leather upper features a white base with contrasting overlays in a light grey shade. The Swoosh, laces, and woven Nike tongue tag are in the same neutral tone. Additional Nike branding is on the heel tab and padded sockliner. On the bottom is a standard rubber cupsole that pairs white sidewalls with a grey rubber outsole.",
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        price: 187,
        color: 'white/grey fog'
    },
    {
        name: "Dunk Low Team Gold",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/357405/1.jpg',
        description: "The Nike Dunk Low 'Team Gold' is a tribute to the classic 'Be True to Your School' series from 1985, featuring the iconic color blocking of that era. The shoe's low-profile upper is constructed from smooth leather and boasts a white base with dull yellow overlays and a matching Swoosh. The toe box features perforated detailing for increased ventilation, while comfy fit is delivered by the padded low-cut collar. The sneaker provides lightweight cushioning via a sturdy rubber cupsole with an interior foam wedge.",
        size: [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13, 14, 15],
        price: 120,
        color: 'white/team gold/wolf grey/ white'
    },
    {
        name: "Dunk Low Rose Whisper",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/296986/1.jpg',
        description: "The Wmns Dunk Low 'Rose Whisper' refreshes the classic style of the retro basketball shoe in a light-hearted hue. The sneaker's leather upper is constructed entirely from a white base complemented by Rose Whisper overlays and Nike Swoosh. A breathable nylon tongue provides comfort while the rubber outsole anchors the build.",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        price: 117,
        color: 'white/rose whisper'
    },
    {
        name: "Dunk Low SE Sashiko - Industrial Blue",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/338152/1.jpg',
        description: "The Nike Dunk Low SE 'Sashiko Industrial Blue' is a renewed version of the iconic ‘80s sneaker. Instead of the traditional leather construction, the upper is made from textile twill, which includes a white base with blue overlays and a matching Swoosh. The toe box and heel tab are enhanced with Sashiko-style stitching, while the tongue is adorned with a woven Nike tag. The shoe rests on a traditional rubber cupsole with white sidewalls atop a blue rubber outsole with excellent traction.",
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 171,
        color: 'summit white/summit white/industrial blue/industrial blue'
    },
    {
        name: "Dunk Low Championship Purple",
        brand: 'Nike',
        model: 'Dunks',
        image: 'https://cdn.flightclub.com/3000/TEMPLATE/294745/1.jpg',
        description: "The Nike Dunk Low 'Championship Purple' is rendered in two-tone OG-inspired color blocking. The silhouette features an all-leather white upper with violet overlays and a matching Swoosh. A woven Nike tongue tag and branded embroidery appear on the heel. The low-top is mounted on a durable rubber cupsole, complete with a concentric rubber outsole for traction.",
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 161,
        color: 'white/court purple'
    },
]

module.exports = products;