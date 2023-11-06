/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import './style.css';
import { newEpisodeFact } from './seacrhByEpidsode';
import { newLocationFact } from './seacrhByLocation';
import { newCharFact } from './searchByChar';
import { newclosemodalFactory } from './closeModal';
import { newAboutFactory } from './about';

let charBtnShouldExecute = true;
let locBtnShouldExecute = true;
let epiBtnShouldExecute = true;
let aboutButtonShouldExecute = true;

const charBtn = document.querySelector('.character');
charBtn.addEventListener('click', () => {
  if (charBtnShouldExecute === true) {
    locBtnShouldExecute = true;
    epiBtnShouldExecute = true;
    charBtnShouldExecute = false;
    newCharFact.displayChar();
    newclosemodalFactory.closeModalChar();
  }
});

const locBtn = document.querySelector('.location');
locBtn.addEventListener('click', () => {
  console.log('hi');
  if (locBtnShouldExecute === true) {
    charBtnShouldExecute = true;
    epiBtnShouldExecute = true;
    locBtnShouldExecute = false;
    newLocationFact.displayLocation();
    console.log('Location here');
    newclosemodalFactory.closeModalLoc();
  }
});

const epiBtn = document.querySelector('.episode');
epiBtn.addEventListener('click', () => {
  console.log('hi');
  if (epiBtnShouldExecute === true) {
    charBtnShouldExecute = true;
    locBtnShouldExecute = true;
    epiBtnShouldExecute = false;
    newEpisodeFact.displayEpisode();
    newclosemodalFactory.closemodalEpi();
    console.log('Episodes  here');
  }
});

const aboutButton = document.querySelector('.about');
aboutButton.addEventListener('click', () => {
  if (aboutButtonShouldExecute === true) {
    charBtnShouldExecute = true;
    locBtnShouldExecute = true;
    epiBtnShouldExecute = true;
    aboutButtonShouldExecute = false;
    newAboutFactory.displayAboutPage();
  }
});
