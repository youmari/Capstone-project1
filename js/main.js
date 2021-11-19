// this is for menu implementation
const menuIcon = document.querySelector('.hamb-icon');
const menu = document.querySelector('.menu-links');
const exitIcon = document.querySelector('.hamb-close-btn');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle("open");
});

exitIcon.addEventListener('click', () => {
  menu.classList.toggle("open");

});

// the code below for generate speakers dynamically
const speakerData = [
  {
    img: './images/speakers/a.jpeg',
    name: 'ALEXANDER J. DAVIS-GRIMES',
    about: 'PRODUCT DESIGNER, LINKEDIN',
    talk: ' CREATE THE CAREER YOU’RE LOOKING FOR A design professional with the ability to communicate and empathize with users.',
  },
  {
    img: './images/speakers/b.jpg',
    name: 'ANDREW KUMAR',
    about: 'DIRECTOR, PLATFORM STRATEGY, CONTENTFUL',
    talk: '  THE CONSEQUENCES OF UX THEATRE Andrew is a global leader of high-performing and diverse digital teams',
  },
  {
    img: './images/speakers/c.jpg',
    name: 'ANDY WELFLE',
    about: 'UX CONTENT STRATEGY MANAGER, ADOBE',
    talk: 'MAIN BEDROOMS AND SECONDARY BRANCHES: IT’S TIME TO SCRUB THE LANGUAGE OF OPPRESSION OUT OF OUR PRODUCTS.',
  },
  {
    img: './images/speakers/d.jpg',
    name: 'ARIBA JAHAN',
    about: 'VP, DESIGN & INNOVATION STRATEGY',
    talk: 'WE CAN’T EMPATHIZE OUR WAY OUT OF PRIVILEGE Ariba is a biomechanical engineer turned innovation and design strategist focused on creating social impact.',
  },
  {
    img: './images/speakers/e.jpg',
    name: 'BEN CALLAHAN',
    about: 'PRESIDENT, SPARKBOX',
    talk: 'A MATURITY MODEL FOR DESIGN SYSTEMS Ben has years of experience in standards-based web development and design systems.',
  },
  {
    img: './images/speakers/f.jpg',
    name: 'BERJESTY (BERCESTE) KOZANOGLU',
    about: 'UX MANAGER, SHOPIFY',
    talk: ' THE CONSEQUENCES OF UX THEATRE',
  },
];
speakerData.forEach((Element, i) => {
  const gridContainer = document.querySelector('.grid-container');
  const speakerContainer = document.createElement('article');
  const imgSpeaker = document.createElement('img');
  const divSpeaker = document.createElement('div');
  const nameSpeaker = document.createElement('h4');
  const aboutSpeaker = document.createElement('p');
  const talkAboutSpeaker = document.createElement('p');
  const divStyle = document.createElement('div');

  gridContainer.append(speakerContainer);
  speakerContainer.classList.add('speaker-container');
  speakerContainer.append(divStyle, imgSpeaker, divSpeaker);
  imgSpeaker.classList.add('speaker-img');
  divSpeaker.classList.add('speaker-info');
  divStyle.classList.add('for-style');
  divSpeaker.append(nameSpeaker, aboutSpeaker, talkAboutSpeaker);
  nameSpeaker.classList.add('speaker-name');
  aboutSpeaker.classList.add('speaker-about');
  talkAboutSpeaker.classList.add('talk-about');

  imgSpeaker.src = speakerData[i].img;
  nameSpeaker.textContent = speakerData[i].name;
  aboutSpeaker.textContent = speakerData[i].about;
  talkAboutSpeaker.textContent = speakerData[i].talk;
});
