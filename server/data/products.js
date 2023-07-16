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
    // {
    //     name: "Yeezy Slides Onyx",
    //     brand: 'Adidas',
    //     model: '',
    //     image: 'https://cdn.flightclub.com/3000/TEMPLATE/296154/1.jpg',
    //     description: "The Dunk Low 'Black White' also known as 'Panda' brings a classic two-tone look to its classic basketball construction. The shoe's low-top build emerges in leather, with a white base contrasted by black overlays, with further black on the Swoosh branding. Perforations on the toe box provide breathability, while underfoot, the two-tone look is matched by the tooling, which incorporates a concentric rubber outsole for traction.",
    //     size: [3, 4, 5, 6, 7, 8, 9, 10, 10.5, 11, 12, 13, 14, 14.5, 15, 16],
    //     price: 150,
    //     color: 'onyx/onyx/onyx'
    // },
    // {
    //     name: "Yeezy ",
    //     brand: 'Adidas',
    //     model: 'Dunks',
    //     image: 'https://cdn.flightclub.com/3000/TEMPLATE/296154/1.jpg',
    //     description: "The Dunk Low 'Black White' also known as 'Panda' brings a classic two-tone look to its classic basketball construction. The shoe's low-top build emerges in leather, with a white base contrasted by black overlays, with further black on the Swoosh branding. Perforations on the toe box provide breathability, while underfoot, the two-tone look is matched by the tooling, which incorporates a concentric rubber outsole for traction.",
    //     size: [3, 4, 5, 6, 7, 8, 9, 10, 10.5, 11, 12, 13, 14, 14.5, 15, 16],
    //     price: 150,
    //     color: 'onyx/onyx/onyx'
    // },
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
    {
        name: "550 White Green",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/271892/1.jpg',
        description: "The 550 'White Green' brings a classic two-tone look to its retro construction. The shoe's upper is built with a white leather base, overlaid by tonal suede at the toe and supported by microperforations for breathability. The branding, including the 'N' logo, adds green to the design, with both colors coming together on the rubber cupsole underfoot, which includes EVA for cushioning.",
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 139,
        color: 'white/green'
    },
    {
        name: "550 Rain Cloud",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/349978/1.jpg',
        description: "The New Balance Men's 550 'Rain Cloud' is a retro-inspired shoe that combines a sleek, neutral color scheme with a classic design. Light grey accents appear on the white leather upper, including the signature 'N' logo, TPU heel counter, and the padded mesh collar’s leather overlay. The woven tongue tag displays the New Balance 550 branding, and a Flying NB logo adds a touch of style to the back heel. The shoe's durable rubber cupsole is reminiscent of 80s basketball shoes, with an exposed foam wedge on the medial side providing additional support.",
        size: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 123,
        color: 'white/rain cloud'
    },
    {
        name: "550 Silver Birch",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/315799/1.jpg',
        description: "The New Balance mens 550 ‘Silver Birch’ brings an understated two-tone palette to the late ‘80s basketball shoe. The low-top carries a white leather upper with a light tan ‘N’ logo on the quarter panel and microperforated detailing on the midfoot overlay. A padded textile collar combines with a breathable nylon tongue to deliver a comfortable fit. Anchoring the sneaker is a traditional rubber cupsole, featuring an exposed EVA wedge at the medial sidewall.",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 130,
        color: 'white/silver birch'
    },
    {
        name: "550 Concrete Black",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/353829/1.jpg',
        description: "The New Balance 550 'Concrete Black' features a colorless and neutral palette. The retro basketball shoe, originating from the 80s, showcases a white leather upper with a low-profile collar with padding for comfort delivered in black mesh. The quarter panel is adorned with a raised grey 'N' logo, and the heel overlay displays a black Flying NB graphic. The sneaker is built with a sturdy rubber cupsole, which includes an exposed foam wedge on the lateral side and a durable two-tone rubber outsole.",
        size: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 105,
        color: 'white/concrete black'
    },
    {
        name: "550 Oreo",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/288566/1.jpg',
        description: "Updating the vintage '80s hoops shoe with an essential two-tone design is the New Balance 550 'Oreo.' It features layered white leather with black textile construction on the padded collar with a nylon tongue and a TPU heel clip. A raised 'N' is on the quarter panel and a flying NB logo on the heel overlay. The low-top is built on a rubber cupsole with an exposed EVA wedge on the medial sidewall.",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15],
        price: 110,
        color: 'white/black'
    },
    {
        name: "Rich Paul X 550 Forever Yours",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/288566/1.jpg',
        description: "The Rich Paul x New Balance 550 ‘Forever Yours’ is taken from a capsule collection designed in partnership with the high-profile NBA agent. The heritage ‘80s hoops shoe features a suede upper in a pastel lavender hue, accented with violet trim around the midfoot overlay and signature ‘N’ logo. Dual-branded woven tags adorn the tongue, while the back heel of each shoe displays a Flying NB logo and an ‘RP’ rose graphic. The sneaker rides on a sturdy rubber cupsole, highlighted by white sidewalls and a lilac-colored outsole.",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 15.5],
        price: 181,
        color: 'purple'
    },
    {
        name: "550 White Team Red",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/250013/1.jpg',
        description: "The 550 'White Red' brings a classic mix of hues to its vintage basketball construction. Built with leather, the shoe's upper appears in white, black and red, with microperforations for breathability. The woven tongue includes a basketball graphic, with an 'N' logo standing out on the side wall. Underfoot, the rubber outsole, which continues the tritone look, incorporates flex grooves for traction.",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 15.5],
        price: 105,
        color: 'white/team red'
    },
    {
        name: "550 White Grey",
        brand: 'New Balance',
        model: '550',
        image: 'https://cdn.flightclub.com/1500/TEMPLATE/256703/1.jpg',
        description: "Bringing back the late 80s basketball shoe, the 550 'White Grey' emerges with a subdued look. Built with leather, the shoe's upper appears in white, with perforations throughout the midfoot offering breathability. Mesh on the tongue and collar add further breathability, while underfoot, a rubber cupsole includes an EVA wedge for cushioning. A grey rubber outsole offers traction.",
        size: [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 15.5],
        price: 105,
        color: 'white'
    },
]

module.exports = products;