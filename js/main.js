// this is for menu implementation  
const menuIcon = document.querySelector('.hamb-icon');
const menu = document.querySelector('.menu-links');
const exitIcon = document.querySelector('.hamb-close-btn');

menuIcon.addEventListener('click', () => {
  menu.style.display = 'flex';
});

exitIcon.addEventListener('click', () => {
  menu.style.display = 'none';
});

// the code below for generate speakers dynamically
const speakerData = [
  {
    img: "../images/speaker/1.jpeg",
    name: "ALEXANDER J. DAVIS-GRIMES",
    about: "PRODUCT DESIGNER, LINKEDIN",
    talk: ` CREATE THE CAREER YOU’RE LOOKING FOR
            A design professional with
            the ability to communicate and empathize with users.`,
  },
  {
    img: "../images/speaker/2.jpg",
    name: "ANDREW KUMAR",
    about: "DIRECTOR, PLATFORM STRATEGY, CONTENTFUL	",
    talk: `  THE CONSEQUENCES OF UX THEATRE
							Andrew is a global leader of high-performing and diverse digital teams`
  },
  {
    img: "../images/speaker/3.jpg",
    name: "ANDY WELFLE",
    about: "UX CONTENT STRATEGY MANAGER, ADOBE",
    talk: `MAIN BEDROOMS AND SECONDARY BRANCHES: IT’S TIME TO SCRUB THE LANGUAGE OF
						OPPRESSION OUT OF OUR PRODUCTS.`,
  },
  {
    img: "../images/speaker/4.jpg",
    name: "ARIBA JAHAN",
    about: "VP, DESIGN & INNOVATION STRATEGY",
    talk: `WE CAN’T EMPATHIZE OUR WAY OUT OF PRIVILEGE
						Ariba is a biomechanical engineer turned innovation and design
						strategist focused on creating social impact.`,
  },
  {
    img: "../images/speaker/5.jpg",
    name: "BEN CALLAHAN",
    about: "PRESIDENT, SPARKBOX",
    talk: `A MATURITY MODEL FOR DESIGN SYSTEMS
					Ben has years of experience in standards-based
					web development and design systems.`,
  },
  {
    img: "../images/speaker/6.jpg",
    name: "BERJESTY (BERCESTE) KOZANOGLU",
    about: "UX MANAGER, SHOPIFY",
    talk: ` THE CONSEQUENCES OF UX THEATRE`,
  },
];
const gridContainer = document.querySelector('.grid-container');
const speakerContainer = document.createElement('article');
const gridContainer = document.createElement('img');
const gridContainer = document.createElement('div');
const gridContainer = document.createElement('h4');
const gridContainer = document.createElement('p');
const gridContainer = document.createElement('p');