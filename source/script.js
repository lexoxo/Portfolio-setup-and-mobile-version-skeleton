import {works} from "data.js";
function toogleNavBar() {
  const nav = document.getElementById('nav');
  if (nav.style.display !== 'none') nav.style.display = 'none';
  else nav.style.display = 'flex';
}

const links = document.querySelectorAll('.hamburger-menu a');
for (let i = 0; i < links.length; i += 1) links[i].addEventListener('click', toogleNavBar);
document.querySelector('.close').addEventListener('click', toogleNavBar);
document.querySelector('.mob-menu img').addEventListener('click', toogleNavBar);



for(let i = 0; i< works.length; i++){
   let liText ="";
   for (let j =0; j < works[i].technolgies.length; j++ ) liText+=`<li>${works[i].technolgies[j]}</li>`;

  let work = document.createElement('div');
  work.classList.add('work');
  work.innerHTML= `
  <img src="${works[i].imageSrc}" alt="project overwiew image" />
            <div class="work-text">
              <h2 class="work-description">${works[i].titre}</h2>
              <ul class="used-langages">
              ${liText}
              </ul>
              <div class="work-button">See Project</div>
            </div>
  `;
 document.querySelector('.works').appendChild(work);
}

