// funzione che genera un numero random tra due numeri
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
  } 

  						 
  function getProgressiveDivId(nomeId,i,classe,html) {
	let idValue=`${nomeId}${i}`;
	let div= document.createElement('div');
	div.setAttribute('id', idValue);
	div.className = classe;
	div.innerHTML = html;
	return (div);
  } 

  