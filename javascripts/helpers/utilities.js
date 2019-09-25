const printToDom = (divId, toPrint) => {
  console.log(divId)
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = toPrint;
};



export default { printToDom };