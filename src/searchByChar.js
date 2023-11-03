/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import charLocEpi from './functions';
import './style.css';

const crossImg = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const characterFactory = () => {
  const displayChar = () => {
    document.body.innerHTML = '';
    const newScript = document.createElement('script');
    newScript.src = 'bundle.js';
    document.body.appendChild(newScript);
    charLocEpi();

    const body = document.querySelector('body');
    // Create the elements
    const charImageDiv = document.createElement('div');
    charImageDiv.classList.add('char-image');
    charImageDiv.textContent = 'The character will appear here';
    charImageDiv.style.textAlign = 'center';

    const charInputDiv = document.createElement('div');
    charInputDiv.classList.add('char-input');

    const charInputLabel = document.createElement('label');
    charInputLabel.setAttribute('for', 'text');
    charInputLabel.textContent = 'Character: ';

    const charInput = document.createElement('input');
    charInput.setAttribute('type', 'text');
    charInput.style.padding = '5px';
    charInput.style.background = 'none';
    charInput.style.border = '1px solid greenyellow';
    charInput.style.borderRadius = '5px';
    charInput.style.color = 'greenyellow';
    charInput.style.outline = 'none';

    const submitButton = document.createElement('button');
    submitButton.classList.add('sbmtBtn');
    submitButton.textContent = 'Submit';

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.style.marginTop = '20px';
    nameDiv.textContent = 'Name: ';

    const speciesDiv = document.createElement('div');
    speciesDiv.classList.add('species');
    speciesDiv.style.marginTop = '20px';
    speciesDiv.textContent = 'Species: ';

    const genderDiv = document.createElement('div');
    genderDiv.classList.add('gender');
    genderDiv.style.marginTop = '20px';
    genderDiv.textContent = 'Gender: ';

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('char-location');
    locationDiv.style.marginTop = '20px';
    locationDiv.textContent = 'Location: ';

    const statusDiv = document.createElement('div');
    statusDiv.classList.add('status');
    statusDiv.style.marginTop = '20px';
    statusDiv.textContent = 'Is Alive? ';

    // Append the elements to the DOM
    charInputDiv.appendChild(charInputLabel);
    charInputDiv.appendChild(charInput);
    charInputDiv.appendChild(submitButton);

    detailsDiv.appendChild(nameDiv);
    detailsDiv.appendChild(speciesDiv);
    detailsDiv.appendChild(genderDiv);
    detailsDiv.appendChild(locationDiv);
    detailsDiv.appendChild(statusDiv);

    const charImageAndInputDiv = document.createElement('div');
    charImageAndInputDiv.appendChild(charImageDiv);
    charImageAndInputDiv.appendChild(charInputDiv);

    const closeImg = document.createElement('div');
    closeImg.classList.add('closecharModal');
    closeImg.innerHTML = crossImg;

    const charDiv = document.createElement('div');
    charDiv.classList.add('charDiv');
    charDiv.appendChild(charImageAndInputDiv);
    charDiv.appendChild(detailsDiv);
    charDiv.appendChild(closeImg);
    // Append everything to the body
    body.appendChild(charDiv);

    const btn = document.querySelector('.sbmtBtn');
    btn.addEventListener('click', () => {
      const img = document.createElement('img');
      let character = '';
      img.innerHTML = '';
      character = document.querySelector('input').value;
      async function getCharacterName(char) {
        try {
          if (character != null && character !== '') {
            const charArea = document.querySelector('.char-image');
            charArea.textContent = '';
            charArea.appendChild(img);
            const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${char}`, {
              mode: 'cors',
            });
            const responseJson = await response.json();
            img.src = responseJson.results[0].image;
            img.height = 350;
            img.width = 344;
            document.querySelector('.name').textContent = `Name: ${responseJson.results[0].name}`;
            document.querySelector('.species').textContent = `Species: ${responseJson.results[0].species}`;
            document.querySelector('.gender').textContent = `Gender: ${responseJson.results[0].gender}`;
            document.querySelector('.char-location').textContent = `Location: ${responseJson.results[0].location.name}`;
            if (responseJson.results[0].status === 'Alive') {
              document.querySelector('.status').textContent = 'Is Alive? Yes';
              return;
            }
            document.querySelector('.status').textContent = 'Is Alive? No';
            // eslint-disable-next-line no-console
            console.log(character, response.results);
            return;
          }
          window.alert('No input recieved!');
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          // eslint-disable-next-line no-alert
          window.alert('Could not find');
          nameDiv.textContent = 'Name: ';
          speciesDiv.textContent = 'Species: ';
          genderDiv.textContent = 'Gender: ';
          locationDiv.textContent = 'Location: ';
        }
      }
      getCharacterName(character);
    });
  };
  return { displayChar };
};

export const newCharFact = characterFactory();
