export default function charLocEpi() {
  // Create the buttons div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('buttons');

  // Create the character button
  const characterButton = document.createElement('button');
  characterButton.classList.add('character');
  characterButton.textContent = 'Character';

  // Create the location button
  const locationButton = document.createElement('button');
  locationButton.classList.add('location');
  locationButton.textContent = 'Location';

  // Create the episode button
  const episodeButton = document.createElement('button');
  episodeButton.classList.add('episode');
  episodeButton.textContent = 'Episodes';

  const aboutButton = document.createElement('button');
  aboutButton.classList.add('about');
  aboutButton.textContent = 'About';
  // Append the buttons to the buttons div
  buttonsDiv.appendChild(characterButton);
  buttonsDiv.appendChild(locationButton);
  buttonsDiv.appendChild(episodeButton);
  buttonsDiv.appendChild(aboutButton);

  // Append the buttons div to the body or another parent element
  document.body.appendChild(buttonsDiv);
}
