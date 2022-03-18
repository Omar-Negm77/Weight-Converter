document.querySelector('#output').style.visibility = 'hidden';
const lbsInput = document.querySelector('#lbsInput');
lbsInput.addEventListener('input', (e) => {
	document.querySelector('#output').style.visibility = 'visible';
	const lbs = e.target.value;
	document.querySelector('#gramsOutput').innerHTML = (lbs / 0022046).toFixed(5);
	document.querySelector('#kgOutput').innerHTML = (lbs / 2.2046).toFixed(5);
	document.querySelector('#ozOutput').innerHTML = (lbs * 16).toFixed(5);
});
