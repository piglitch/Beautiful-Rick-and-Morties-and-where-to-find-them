/* eslint-disable no-console */
import charLocEpi from './functions';

/* eslint-disable import/prefer-default-export */
const aboutFactory = () => {
  function displayAboutPage() {
    document.body.innerHTML = '';
    const newScript = document.createElement('script');
    newScript.src = 'bundle.js';
    document.body.appendChild(newScript);
    charLocEpi();

    document.querySelector('.about').style.background = 'greenyellow';
    document.querySelector('.about').style.color = 'black';
    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'aboutContainer';
    aboutContainer.innerHTML = `
        <div>
            <h1  style="color: white">About Beautiful Rick and Morties and where to find them</h1>
            <p>Welcome to the Beautiful Rick and Morties and where to find them! This website is dedicated to helping you explore the fascinating world of Rick and Morty, the beloved animated series created by Justin Roiland and Dan Harmon.</p>

            <h2 style="color: white">What is Rick and Morty?</h2>
            <p>Rick and Morty is an animated science fiction sitcom that follows the adventures of an eccentric, alcoholic scientist named Rick Sanchez and his good-hearted but easily influenced grandson, Morty Smith. Together, they embark on interdimensional escapades that take them to unimaginable places and introduce them to a multitude of bizarre characters.</p>

            <h2 style="color: white">What can you do on this website?</h2>
            <ul>
                <li>Character Search: Use our character search feature to find detailed information about your favorite characters from the show. From the enigmatic Birdperson to the mischievous Mr. Meeseeks, we've got you covered!</li>
                <li>Location Exploration: Explore the unique worlds and dimensions featured in the series. Learn about the dimension the planet is from and what type it is.</li>
                <li>Episode Insights: Learn about the serial number of a particular episode and the air-date of it.</li>
            </ul>

            <h2 style="color: white">How to Use the Rick and Morty Explorer</h2>
            <p>Using our website is as easy as pie! Simply navigate to the respective sections for Characters, Locations, or Episodes using the navigation menu. Use the search bar to find specific characters or locations, or browse through the list for a delightful surprise.</p>

            <h2 style="color: white">Contact Us</h2>
            <p>Have questions, suggestions, or just want to say hello? I'd love to hear from you! Feel free to reach out to me through <span class='instagram'>Instagram</span>, <span class='github'>Github</span>, <span class='email'>Email</span> and I'll get back to you as soon as I can.</p>

            <h2 style="color: white">Credits</h2>
            <p>The Rick and Morty Explorer was created by Avi Banerjee with a passion for bringing the delightful world of Rick and Morty to fans everywhere. I would like to extend a heartfelt thank you to the creators and contributors of the <a style="color: white" href = 'https://rickandmortyapi.com/'>rickandmortyapi</a>. Their dedication and hard work in providing access to the rich universe of Rick and Morty have been instrumental in making this website possible. I am grateful for their invaluable contribution to the fan community.</p>
        </div>
    `;
    document.body.appendChild(aboutContainer);
    const insta = document.querySelector('.instagram');
    insta.addEventListener('click', () => {
      window.open('https://instagram.com/avi_innit?igshid=MTlubmhkYmN3MDU1bw==');
    });
    const github = document.querySelector('.github');
    github.addEventListener('click', () => {
      window.open('https://github.com/piglitch');
    });
    const email = document.querySelector('.email');
    email.addEventListener('click', () => {
      window.location = 'mailto:avibanerjee2000@gmail.com';
    });
  }

  return { displayAboutPage };
};

export const newAboutFactory = aboutFactory();
