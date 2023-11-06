/* eslint-disable import/prefer-default-export */
const closemodalFactory = () => {
  function closemodalEpi() {
    document.querySelector('.closeModal').addEventListener('click', () => {
      document.querySelector('.epiDiv').style.display = 'none';
    });
  }
  function closeModalLoc() {
    document.querySelector('.closeModal').addEventListener('click', () => {
      document.querySelector('.locDiv').style.display = 'none';
    });
  }
  function closeModalChar() {
    document.querySelector('.closeModal').addEventListener('click', () => {
      document.querySelector('.charDiv').style.display = 'none';
    });
  }
  //  document.querySelector('.locDiv');
  //  document.querySelector('.charDiv');
  return { closemodalEpi, closeModalChar, closeModalLoc };
};

export const newclosemodalFactory = closemodalFactory();
