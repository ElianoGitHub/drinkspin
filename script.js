// Constants and variables
const cocktails = [
    { name: 'Martini', imageUrl: 'https://i.imgur.com/O8J5srt.png' },
    { name: 'Margarita', imageUrl: 'https://i.imgur.com/cnDWWNH.png' },
    { name: 'Old Fashioned', imageUrl: 'https://i.imgur.com/pLc6Yj9.png' },
    { name: 'Negroni', imageUrl: 'https://i.imgur.com/Iryayuy.png' }, 
    { name: 'Whiskey Sour ', imageUrl: 'https://i.imgur.com/y2A5zkj.png' }, 
    { name: 'Cosmopolitan', imageUrl: 'https://i.imgur.com/S75ah43.png' },
    { name: 'Mai Tai', imageUrl: 'https://i.imgur.com/CT87RsW.png' },
    { name: 'Gin and Tonic', imageUrl: 'https://i.imgur.com/6SrbIWJ.png' },
    { name: 'Moscow Mule', imageUrl: 'https://i.imgur.com/IreKPU4.png' },
    { name: 'Caesar', imageUrl: 'https://i.imgur.com/vJPagMq.png' },
    { name: 'Tom Collins', imageUrl: 'https://i.imgur.com/14pwLmN.png' },
    { name: 'Manhattan', imageUrl: 'https://i.imgur.com/cNz7aj5.png' },
    { name: 'Piña Colada', imageUrl: 'https://i.imgur.com/Tzt23IQ.png' },
    { name: 'Mojito', imageUrl: 'https://i.imgur.com/ziGUbNJ.png' },
    { name: 'Espresso Martini', imageUrl: 'https://i.imgur.com/rf7bSg2.png' },
    { name: 'Daiquiri', imageUrl: 'https://i.imgur.com/14oYwYP.png' },
    { name: 'Bellini', imageUrl: 'https://i.imgur.com/fxdkJLo.png' },
    { name: 'Long Island Iced Tea', imageUrl: 'https://i.imgur.com/dgcJihK.png' },
    { name: 'Sazerac', imageUrl: 'https://i.imgur.com/n0hp1FM.png' },
    { name: 'Floradora', imageUrl: 'https://i.imgur.com/CIPtEZN.png' },
    { name: 'Paloma', imageUrl: 'https://i.imgur.com/L4QSOiT.png' },
    { name: 'Activated Charcoal Martini', imageUrl: 'https://i.imgur.com/rkg9FJz.png' },
    { name: 'Matcha Mojito', imageUrl: 'https://i.imgur.com/rqnNu2Z.png' },
    { name: 'Hibiscus Gin Fizz', imageUrl: 'https://i.imgur.com/KubK4f7.png' },
    { name: 'Smoked Rosemary Whiskey Sour', imageUrl: 'https://i.imgur.com/sqGtpLw.png' },
    { name: 'Turmeric Margarita', imageUrl: 'https://i.imgur.com/0maHYjd.png' },
    { name: 'Cucumber Basil Gin Smash', imageUrl: 'https://i.imgur.com/mbFc1ze.png' },
    { name: 'Blueberry Lavender Vodka Lemonade', imageUrl: 'https://i.imgur.com/MLFtE40.png' },
    { name: 'Coconut Ginger Caipirinha', imageUrl: 'https://i.imgur.com/HcNQqUZ.png' },
    { name: 'Saffron-infused Gin and Tonic', imageUrl: 'https://i.imgur.com/oJdJSev.png' },
    { name: 'Beetroot Bourbon Sour', imageUrl: 'https://i.imgur.com/bipkv2c.png' },
    { name: 'Spicy Mango Jalapeño Margarita', imageUrl: 'https://i.imgur.com/h3WWeL6.png' },
    { name: 'Elderflower Paloma', imageUrl: 'https://i.imgur.com/fTGbJ8f.png' },
    { name: 'Raspberry Thyme Prosecco Smash', imageUrl: 'https://i.imgur.com/9n51pEH.png' },
    { name: 'Chai Spiced Rum Punch', imageUrl: 'https://i.imgur.com/oCFzm9C.png' },
    { name: 'Blackberry Sage Gin Fizz', imageUrl: 'https://i.imgur.com/93GxmGj.png' },
    { name: 'Cucumber Mint Gin Tonic', imageUrl: 'https://i.imgur.com/jTo5EHX.png' },
    { name: 'Fig and Honey Bourbon Fizz', imageUrl: 'https://i.imgur.com/8dkIJLr.png' },
    { name: 'Vanilla Chai White Russian', imageUrl: 'https://i.imgur.com/WPY9ADs.png' },
    { name: 'Pomegranate Rosemary Sparkle', imageUrl: 'https://i.imgur.com/fPheb82.png' },
    { name: 'Ginger Lemongrass Caipiroska', imageUrl: 'https://i.imgur.com/69yWSQy.png' },
    { name: 'Japanese Yuzu Sour', imageUrl: 'https://i.imgur.com/dl60W2x.png' },
    { name: 'Brazilian Caipirinha', imageUrl: 'https://i.imgur.com/XFY6y23.png' },
    { name: 'Mexican Mezcal Mule', imageUrl: 'https://i.imgur.com/HWL6NfY.png' },
    { name: 'Spanish Sangria', imageUrl: 'https://i.imgur.com/jB79orJ.png' },
    { name: 'French 75', imageUrl: 'https://i.imgur.com/BBzRhUE.png' },
    { name: 'Irish Coffee Martini', imageUrl: 'https://i.imgur.com/F4NqjL9.png' },
    { name: 'Caribbean Rum Punch', imageUrl: 'https://i.imgur.com/sq7KT8X.png' },
    { name: 'Thai Basil Chili Margarita', imageUrl: 'https://i.imgur.com/JBJj9fh.png' },
    { name: 'Cuban Mojito', imageUrl: 'https://i.imgur.com/xw2i1HP.png' },
    { name: 'Aperol Spritz', imageUrl: 'https://i.imgur.com/RUo0R1M.png' },
    { name: 'Argentina Fernet and Cola', imageUrl: 'https://i.imgur.com/pR03IMI.png' },
    { name: 'Cumin Honey Tequila', imageUrl: 'https://i.imgur.com/xI9FcrH.png' },
    { name: 'Jamaican Dark ’n’ Stormy', imageUrl: 'https://i.imgur.com/OiDAOKh.png' },
    { name: 'Greek Ouzo Lemonade', imageUrl: 'https://i.imgur.com/9e3oxoQ.png' },
    { name: 'German Radler Cocktail', imageUrl: 'https://i.imgur.com/DVA7hio.png' },
    { name: 'Indian Masala Chai Martini', imageUrl: 'https://i.imgur.com/tHWjAfR.png' },
    { name: 'Black Russian', imageUrl: 'https://i.imgur.com/7gwlQa5.png' },
    { name: 'Austrian Hugo Cocktail', imageUrl: 'https://i.imgur.com/1Zwdfc2.png' },
    { name: 'Portuguese Ginjinha Sour', imageUrl: 'https://i.imgur.com/ieWI62x.png' },
    { name: 'Chinese Lychee Martini', imageUrl: 'https://i.imgur.com/ZuY5ssy.png' },
    { name: 'Australian Eucalyptus Vodka Lemonade', imageUrl: 'https://i.imgur.com/5F9raB6.png' },
    { name: 'Watermelon Basil Cooler', imageUrl: 'https://i.imgur.com/7cmaJLs.png' },
    { name: 'Peach Mint Julep', imageUrl: 'https://i.imgur.com/F5FBLBG.png' },
    { name: 'Dragon Fruit Rum Punch', imageUrl: 'https://i.imgur.com/2Q7W8x2.png' },
    { name: 'Passion Fruit Caipiroska', imageUrl: 'https://i.imgur.com/NqdaQNw.png' },
    { name: 'Kiwi Coconut Mojito', imageUrl: 'https://i.imgur.com/OBjdo6k.png' },
    { name: 'Strawberry Balsamic Smash', imageUrl: 'https://i.imgur.com/p6VX1Es.png' },
    { name: 'Cantaloupe Ginger Sparkler', imageUrl: 'https://i.imgur.com/811aXuL.png' },
    { name: 'Raspberry Peach Bellini', imageUrl: 'https://i.imgur.com/yGxBNIh.png' },
    { name: 'Blood Orange Elderflower Martini', imageUrl: 'https://i.imgur.com/gYjo92P.png' },
    { name: 'Papaya Pineapple Rum Punch', imageUrl: 'https://i.imgur.com/bbLXLrd.png' },
    { name: 'Lychee Rose Gin Fizz', imageUrl: 'https://i.imgur.com/ifWskgM.png' },
    { name: 'Blackberry Mint Lemonade Rum Float', imageUrl: 'https://i.imgur.com/j9hbTUy.png' },
    { name: 'Apple Cinnamon Whiskey Sour', imageUrl: 'https://i.imgur.com/mKu6SpY.png' },
    { name: 'Cranberry Orange Mule', imageUrl: 'https://i.imgur.com/EkRYhO3.png' },
    { name: 'Grapefruit Thyme Sparkler', imageUrl: 'https://i.imgur.com/tHkPyxE.png' },
    { name: 'Guava Basil Margarita', imageUrl: 'https://i.imgur.com/14m2uKa.png' },
    { name: 'Mango Habanero Margarita', imageUrl: 'https://i.imgur.com/D7WNrYr.png' },
    { name: 'Blueberry Mint Gin Fizz', imageUrl: 'https://i.imgur.com/RXL5pXT.png' },
    { name: 'Coconut Pineapple Rum Runner', imageUrl: 'https://i.imgur.com/FHvY5aV.png' },
    { name: 'Cherry Almond Smash', imageUrl: 'https://i.imgur.com/aZhwTH7.png' },
    { name: 'Toasted Marshmallow White Russian', imageUrl: 'https://i.imgur.com/9pUV1an.png' },
    { name: 'Chocolate Orange Martini', imageUrl: 'https://i.imgur.com/S6aE66S.png' },
    { name: 'Tiramisu Cocktail', imageUrl: 'https://i.imgur.com/iUQeWqJ.png' },
    { name: 'Banana Bread Old Fashioned', imageUrl: 'https://i.imgur.com/tGxVmoN.png' },
    { name: 'Caramel Apple Moscow Mule', imageUrl: 'https://i.imgur.com/jYl9SX5.png' },
    { name: 'Pumpkin Spice Bourbon Sour', imageUrl: 'https://i.imgur.com/xt0ayLJ.png' },
    { name: 'Strawberry Shortcake Martini', imageUrl: 'https://i.imgur.com/SFH5iff.png' },
    { name: 'Lemon Meringue Pie Martini', imageUrl: 'https://i.imgur.com/Ysy0D3m.png' },
    { name: 'Hazelnut Espresso Martini', imageUrl: 'https://i.imgur.com/fZIFxk9.png' },
    { name: 'Key Lime Pie Mojito', imageUrl: 'https://i.imgur.com/u2uERn8.png' },
    { name: 'Chipotle Passion Fruit Martini', imageUrl: 'https://i.imgur.com/ayLJfZ6.png' },
    { name: 'Wasabi Ginger Sake Cocktail', imageUrl: 'https://i.imgur.com/PyMynKh.png' },
    { name: 'Mangorita Slush', imageUrl: 'https://i.imgur.com/G4hlVIp.png' },
];

const colors = ['#0CC0DF', '#666666', '#A6A6A6', '#0E8FA6', '#D9D9D9'];
const sectors = cocktails.map((cocktail, index) => ({
    color: colors[index % colors.length],
    label: cocktail.name
}));

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector('#spin');
const ctx = document.querySelector('#wheel').getContext('2d');
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;

const friction = 0.991;
let angVel = 0;
let ang = 0;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
    const ang = arc * i;
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = sector.color;
    ctx.moveTo(rad, rad);
    ctx.arc(rad, rad, rad, ang, ang + arc);
    ctx.lineTo(rad, rad);
    ctx.fill();
    ctx.translate(rad, rad);
    ctx.rotate(ang + arc / 2);
    ctx.textAlign = 'right';
    ctx.fillStyle = '#002c33';
    ctx.font = 'bold 12px Arial';
    ctx.fillText(sector.label, rad - 12, 4);
    ctx.restore();
}

function rotate() {
    const sector = sectors[getIndex()];
    ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;

    // Set the spin button to display the cocktail image
    spinEl.style.backgroundImage = `url(${cocktails.find(c => c.name === sector.label).imageUrl})`;

    if (angVel < 0.002) {
        angVel = 0;
        displayCocktailDetails(sector);
    }
}

function displayCocktailDetails(sector) {
    const selectedCocktail = detailedCocktails.find(c => c.name === sector.label); // Ensure detailedCocktails is defined
    document.getElementById('cocktailName').textContent = selectedCocktail.name;
    document.getElementById('cocktailImage').src = selectedCocktail.imageUrl;
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    selectedCocktail.ingredients.forEach(ingredient => {
        const listItem = document.createElement('li');
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    });
    const instructionsList = document.getElementById('instructionsList');
instructionsList.innerHTML = ''; // Clear previous content
// Assuming you have a list of instructions in a property called 'instructions' within each cocktail object
selectedCocktail.instructions.forEach(instruction => {
    const listItem = document.createElement('li');
    listItem.textContent = instruction;
    instructionsList.appendChild(listItem);
});
}

function frame() {
    if (!angVel) return;
    angVel *= friction;
    if (angVel < 0.002) {
        angVel = 0;
    }
    ang += angVel;
    ang %= TAU;
    rotate();
}

function engine() {
    frame();
    requestAnimationFrame(engine);
}

function init() {
    sectors.forEach(drawSector);
    rotate();
    engine();
    spinEl.addEventListener('click', () => {
        if (!angVel) angVel = rand(0.01, 0.03);
    });
}

// Initialize the spinning wheel and other functionalities
window.onload = function() {
    init();
};