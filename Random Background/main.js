// button pertama favourite color

const btnFav = document.getElementById('btn-fav');
btnFav.addEventListener('click',function(){
    document.body.classList.toggle('bg-salmon');
});

// button kedua random color
const btnRandom = document.createElement('button');
const textBtnRandom = document.createTextNode('Random BG Color');
const container = document.querySelector('.container');
btnRandom.appendChild(textBtnRandom);
container.append(btnRandom);

// listener btn random
btnRandom.addEventListener('click', function(){
    const r = Math.round(Math.random()*255+1)
    const g = Math.round(Math.random()*255+1)
    const b = Math.round(Math.random()*255+1)
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    textView.innerHTML = 'rgb('+ r +','+ g +','+ b +')';
});

// rgb text view
const textView = document.querySelector('.container h3');

// slider
const redSlider = document.querySelector('.container input:nth-child(6)' );
const greenSlider = document.querySelector('.container input:nth-child(8)' );
const blueSlider = document.querySelector('.container input:nth-child(10)' );
redSlider.addEventListener('input', function () {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    textView.innerHTML = 'rgb('+ r +','+ g +','+ b +')';
    
});
greenSlider.addEventListener('input', function () {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    textView.innerHTML = 'rgb('+ r +','+ g +','+ b +')';
});
blueSlider.addEventListener('input', function () {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
    textView.innerHTML = 'rgb('+ r +','+ g +','+ b +')';
});


