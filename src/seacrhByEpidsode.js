/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import charLocEpi from './functions';
import './style.css';

const crossImg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const episodeFactory = () => {
  const displayEpisode = () => {
    document.body.innerHTML = '';
    const newScript = document.createElement('script');
    newScript.src = 'bundle.js';
    document.body.appendChild(newScript);
    charLocEpi();

    document.querySelector('.episode').style.background = 'greenyellow';
    document.querySelector('.episode').style.color = 'black';
    const epiDisplayArea = document.createElement('div');
    epiDisplayArea.classList.add('epiArea');
    document.body.appendChild(epiDisplayArea);

    const epiName = document.createElement('div');
    epiName.textContent = 'Episode name: ';

    const airDate = document.createElement('div');
    airDate.textContent = 'Air-Date: ';
    airDate.style.marginTop = '20px';

    const epiNum = document.createElement('div');
    epiNum.textContent = 'Episode number: ';
    epiNum.style.marginTop = '20px';

    epiDisplayArea.appendChild(epiName);
    epiDisplayArea.appendChild(airDate);
    epiDisplayArea.appendChild(epiNum);

    const epiInputDiv = document.createElement('div');
    epiInputDiv.classList.add('epiInputDiv');
    const epiLabel = document.createElement('label');
    epiLabel.textContent = 'Episode: ';
    epiLabel.style.marginTop = 'auto';
    epiLabel.style.marginBottom = 'auto';
    const epiInput = document.createElement('input');
    epiInput.style.padding = '5px';
    epiInput.classList.add('epiInput');
    const epiSubmit = document.createElement('button');
    epiSubmit.textContent = 'Submit';
    epiSubmit.classList.add('epiSubmit');

    const closeImg = document.createElement('div');
    closeImg.classList.add('closeModal');
    closeImg.innerHTML = crossImg;

    const epiDiv = document.createElement('div');
    epiDiv.classList.add('epiDiv');
    epiInputDiv.appendChild(epiLabel);
    epiInputDiv.appendChild(epiInput);
    epiInputDiv.appendChild(epiSubmit);
    epiDiv.appendChild(epiDisplayArea);
    epiDiv.appendChild(epiInputDiv);
    epiDiv.appendChild(closeImg);
    document.body.appendChild(epiDiv);

    epiSubmit.addEventListener('click', () => {
      async function getEpisode(episode) {
        try {
          if (epiInput.value === '') {
            window.alert('No input received!');
            return;
          }
          const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=${episode}`, {
            mode: 'cors',
          });
          const responseJson = await response.json();
          console.log(responseJson.results[0]);
          epiName.textContent = `Episode name: ${responseJson.results[0].name}`;
          airDate.textContent = `Air-Date: ${responseJson.results[0].air_date}`;
          epiNum.textContent = `Episode number: ${responseJson.results[0].episode}`;
        } catch (error) {
          console.error(error);
          window.alert('Could not find!');
        }
      }
      getEpisode(epiInput.value);
    });
  };
  return { displayEpisode };
};

export const newEpisodeFact = episodeFactory();
