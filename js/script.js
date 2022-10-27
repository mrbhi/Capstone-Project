// Hamburger Menu

const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu-list');
const close = document.querySelector('.hamburger-menu-close');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

document.querySelectorAll('.menu-link').forEach((l) => l.addEventListener('click', () => {
  menu.classList.remove('active');
}));

// Populating od data

const speakerSection = document.querySelector('.grid');
let render = '';

const speaker = [
  {
    image: '../img/sp1.png',
    title: 'Bello Taofeeq Adeoye',
    position: 'Software Engineer, Full-Stack, Front-end Back-end',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat fuga ex vitae consequuntur!',
  },
  {
    image: '../img/sp2.png',
    title: 'Adelugba Emmanuel',
    position: 'Software Engineer, Full-Stack, Front-end Back-end',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat fuga ex vitae consequuntur!',
  },
  {
    image: '../img/sp3.png',
    title: 'Ogochukwu Anyanwu',
    position: 'Software Engineer, Full Front-end',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat fuga ex vitae consequuntur!',
  },
  {
    image: '../img/sp4.png',
    title: 'Fulis Abdi Riyana',
    position: 'Software Engineer, Full-Stack, Front-end Back-end',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat fuga ex vitae consequuntur!',
  },
  {
    image: '../img/sp5.png',
    title: 'Zuhra Ashimi',
    position: 'Software Engineer, Full-Stack, Front-end Back-end',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat fuga ex vitae consequuntur!',
  },
  {
    image: '../img/sp6.png',
    title: 'Yonas Ken',
    position: 'Software Engineer, Full-Stack, Front-end Back-end',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In maiores repellat fuga ex vitae consequuntur!',
  },
];

speaker.forEach((data) => {
  render += `<div class="speakers-container">
<div class="speaker-image">
<img src="${data.image}" alt="Speaker image">
</div>
<div class="details">
<h2>${data.title}</h2>
<p class="speaker-position">${data.position}</p>
<hr>
<p class="about-speaker">${data.description}</p>
</div>
</div>`;
  speakerSection.innerHTML = render;
});

// Scrool To Top

// Get the button
const mybutton = document.querySelector('.myBtn');

// When the user scrolls down 50px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

window.onscroll = () => { scrollFunction(); };

// When the user clicks on the button, scroll to the top of the document

mybutton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
