
document.body.addEventListener('mousemove', function (event) {
    const xpos = Math.round((event.clientX / window.innerWidth) * 255);
    const ypos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xpos +','+ ypos +',100)';
})
