/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import charLocEpi from './functions';
import './style.css';

const crossImg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const LocationFactory = () => {
  const displayLocation = () => {
    document.body.innerHTML = '';
    const newScript = document.createElement('script');
    newScript.src = 'bundle.js';
    document.body.appendChild(newScript);
    charLocEpi();

    const locDisplayArea = document.createElement('div');
    locDisplayArea.classList.add('locArea');
    document.body.appendChild(locDisplayArea);

    const planet = document.createElement('div');
    planet.textContent = 'Planet: ';

    const dimension = document.createElement('div');
    dimension.textContent = 'Dimension: ';
    dimension.style.marginTop = '20px';

    const locType = document.createElement('div');
    locType.textContent = 'Type: ';
    locType.style.marginTop = '20px';

    locDisplayArea.appendChild(planet);
    locDisplayArea.appendChild(dimension);
    locDisplayArea.appendChild(locType);

    const locInputDiv = document.createElement('div');
    locInputDiv.classList.add('locInputDiv');
    const locLabel = document.createElement('label');
    locLabel.textContent = 'Location: ';
    locLabel.style.marginTop = 'auto';
    locLabel.style.marginBottom = 'auto';
    const locInput = document.createElement('input');
    locInput.style.padding = '5px';
    locInput.classList.add('locInput');
    const locSubmit = document.createElement('button');
    locSubmit.textContent = 'Submit';
    locSubmit.classList.add('locSubmit');

    const closeImg = document.createElement('div');
    closeImg.classList.add('closeModal');
    closeImg.innerHTML = crossImg;

    const locDiv = document.createElement('div');
    locDiv.classList.add('locDiv');
    locInputDiv.appendChild(locLabel);
    locInputDiv.appendChild(locInput);
    locInputDiv.appendChild(locSubmit);
    locDiv.appendChild(locDisplayArea);
    locDiv.appendChild(locInputDiv);
    locDiv.appendChild(closeImg);
    document.body.appendChild(locDiv);

    locSubmit.addEventListener('click', () => {
      async function getLocation(location) {
        try {
          if (locInput.value != null && locInput.value !== '') {
            const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${location}`, {
              mode: 'cors',
            });
            const responseJson = await response.json();
            planet.textContent = `Planet: ${responseJson.results[0].name}`;
            dimension.textContent = `Dimension: ${responseJson.results[0].dimension}`;
            locType.textContent = `Type: ${responseJson.results[0].type}`;
            console.log(responseJson.results, responseJson.results[0].dimension);
            return;
          }
          window.alert('No input received!');
        } catch (error) {
          console.error(error);
          window.alert('Could not find!');
          planet.textContent = 'Planet: ';
          dimension.textContent = 'Dimension: ';
          locType.textContent = 'Type: ';
        }
      }
      getLocation(locInput.value);
    });
  };
  return { displayLocation };
};

export const newLocationFact = LocationFactory();
