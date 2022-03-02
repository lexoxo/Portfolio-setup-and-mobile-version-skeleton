import { works } from './data.js';

function toogleNavBar() {
  const nav = document.getElementById('nav');
  if (nav.style.display !== 'none') nav.style.display = 'none';
  else nav.style.display = 'flex';
}

const links = document.querySelectorAll('.hamburger-menu a');
for (let i = 0; i < links.length; i += 1) links[i].addEventListener('click', toogleNavBar);
document.querySelector('.close').addEventListener('click', toogleNavBar);
document.querySelector('.mob-menu img').addEventListener('click', toogleNavBar);

for (let i = 0; i < works.length; i += 1) {
  let liText = '';
  for (let j = 0; j < works[i].technolgies.length; j += 1) liText += `<li>${works[i].technolgies[j]}</li>`;

  const work = document.createElement('div');
  work.classList.add('work');
  work.innerHTML = `
  <img src="${works[i].imageSrc}" alt="project overwiew image" />
            <div class="work-text">
              <h2 class="work-description">${works[i].titre}</h2>
              <ul class="used-langages">
              ${liText}
              </ul>
              <div class="work-button" id = "${works[i].id}">See Project</div>
            </div>
  `;
  document.querySelector('.works').appendChild(work);
}

const previousBody = document.body;

function pop(event) {
  const clickButton = event.target.getAttribute('id');
  let currentWork = [];
  works.forEach((o) => {
    if (clickButton === o.id) currentWork = o;
  });
  const popup = document.createElement('div');
  let liTech = '';
  for (let j = 0; j < currentWork.popupDescription.technolgies.length; j += 1) liTech += `<li class = 'popup-li'>${currentWork.popupDescription.technolgies[j]}</li>`;

  popup.classList.add('popup');
  popup.setAttribute('id', 'popup');
  popup.innerHTML = `
<div class="popup-container">
<div class="project-img">
    <i class="fa-solid fa-xmark closeTab"></i>
  <img src="${currentWork.popupDescription.imageSrc}" class="popup-image">
</div>

<div class="header-buttons">
  <h2 class="popup-title">
  ${currentWork.popupDescription.titre}
  </h2>
  <div class="popup-buttons-desk">
    <button id="see-live" type="button" class="see-live">
      <h6>See Live</h6>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </button>
    <button id="see-source" type="button" class="see-live">
      <h6>See Source</h6>
      <i class="fa fa-github"></i></button>
  </div>
</div>

<div class="popup-technologies">
  <ul class="popup-ul">

    ${liTech}

  </ul>
</div>
<p class="popup-description">
 ${currentWork.popupDescription.description}
</p>
<div class="popup-buttons">
  <button id="see-live" type="button" class="see-live">
    <h6>See Live</h6>
    <i class="fa fa-github"></i>
  </button>
  <button id="see-source" type="button" class="see-live">
    <h6>See Source</h6>
    <i class="fa fa-github"></i></button>
</div>
</div>
`;
  const newbody = document.createElement('body');
  newbody.appendChild(popup);
  document.body = newbody;

  document.querySelector('.closeTab').addEventListener('click', () => {
    document.body = previousBody;
    window.location.href = 'index.html#recentWork';
  });

  document.querySelector('#see-live').addEventListener('click', () => {
    window.open(currentWork.popupDescription.demoLink);
  });

  document.querySelector('#see-source').addEventListener('click', () => {
    window.open(currentWork.popupDescription.source);
  });
}

const clickClick = document.querySelectorAll('.work-button');
clickClick.forEach((e) => {
  e.addEventListener('click', pop);
});