const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const carousel = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]

/* Declaring the alternative text for each image file */
const alts = {
    "pic1.jpg" : 'acai bowl',
    'pic2.jpg' : 'ramen',
    'pic3.jpg' : `poke bowl`,
    'pic4.jpg' : 'pastel de nata',
    'pic5.jpg' : 'nachos'}

/* Looping through images */
for (const image of carousel) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click',()=> {
const btnClass = btn.getAttribute('class');
    if (btnClass == 'dark'){
    btn.setAttribute("class", 'light');
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
} else {
    btn.setAttribute("class", 'dark');
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}
});