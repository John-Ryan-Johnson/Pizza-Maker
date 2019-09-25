import cheese from './cheese.js';
import utilities from '../helpers/utilities.js';


const createFinalOrder = (items) => {
  let domString2 = '';
  for(let i = 0; i < items.length; i++){
    domString2 += `<p>${items[i].name}</p>`
  }
  return domString2
}


const createOrderEvent = () => {
  const selectedCheeses = cheese.getSelectedCheeses();
  console.log('getSelectedCheeses', selectedCheeses)
  let domString = createFinalOrder(selectedCheeses);
  utilities.printToDom('order', domString)
}


const printOrderButton = () => {
  const domString = `<button class="btn btn-secondary" id="order-button">Make Pizza</button>`
  utilities.printToDom('final-order', domString);
  document.getElementById('order-button').addEventListener('click', createOrderEvent);
};








export default { printOrderButton };