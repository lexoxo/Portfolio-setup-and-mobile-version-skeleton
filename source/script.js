import { works } from './data.js';

function toogleNavBar() {
  const nav = document.querySelector('.hamburger');
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
  document.querySelector('.works').appendChilds(work);
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
  for (let j = 0; j < currentWork.popupDescriptions.technolgies.length; j += 1) liTech += `<li class = 'popup-li'>${currentWork.popupDescription.technolgies[j]}</li>`;

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
    <button type="button" class="see-live see-lives">
      <h6>See Live</h6>
      <i class="fa-solid fa-arrow-up-right-from-square"></i>
    </button>
    <button type="button" class="see-live see-source">
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
  <button type="button" class="see-live see-lives">
    <h6>See Live</h6>
    <i class="fa fa-github"></i>
  </button>
  <button type="button" class="see-live see-source">
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

  document.querySelectorAll('.see-lives').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.popupDescription.demoLink);
    });
  });

  document.querySelectorAll('.see-source').forEach((e) => {
    e.addEventListener('click', () => {
      window.open(currentWork.popupDescription.source);
    });
  });
}

const clickClick = document.querySelectorAll('.work-button');
clickClick.forEach((e) => {
  e.addEventListener('click', pop);
});

const form = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#error');
const submitError = document.querySelector('#submitError');
const reg = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

email.addEventListener('input', () => {
  console.log('press');

  if (reg.test(email.value)) {
    emailError.innerHTML = '';
    email.classList.remove('invalid');
  } else {
    email.classList.add('invalid');
    emailError.innerHTML = 'Email should be in lowercase';
  }
});

form.addEventListener('submit', (event) => {
  if (!reg.test(email.value.trim())) {
    email.classList.add('invalid');
    submitError.innerHTML = 'The form is not sent. Email should be in lowercase';
    event.preventDefault();
  }
});
