// Path: script.js
// create a button that when you pushes it launches a bunch of confetti and shows a happy fathers day gif

const button = document.getElementById('button');

button.addEventListener('click', () => {


    //   remove the button
    button.remove();

    //   add the gif
    const gif = document.createElement('img');
    gif.src = 'https://media.tenor.com/5dIDGIdOawMAAAAC/pusheen-fathersday.gif';
    
    //center the gif
    gif.style.position = 'absolute';
    gif.style.left = '50%';
    gif.style.top = '50%';
    gif.style.transform = 'translate(-50%, -50%)';

    // increase the gif size
    gif.style.height = '100%';
    
    
    
    document.body.appendChild(gif);

    // set the body background to a nice color
    document.body.style.backgroundColor = '#FAEEE5';


    confetti({
        particleCount: 2000,
        spread: 180,
        ticks: 400,
      });


    // confetti({
    //     particleCount: 2000,
    //     spread: 180,
    //     shapes: ['star'],
    //     ticks: 400,
    //   });
    //     // do this for 30 seconds
    // var duration = 30 * 1000;
    // var end = Date.now() + duration;

    // (function frame() {
    // // launch a few confetti from the left edge
    // confetti({
    //     particleCount: 7,
    //     angle: 60,
    //     spread: 55,
    //     origin: { x: 0 }
    // });
    // // and launch a few from the right edge
    // confetti({
    //     particleCount: 7,
    //     angle: 120,
    //     spread: 55,
    //     origin: { x: 1 }
    // });

    // // keep going until we are out of time
    // if (Date.now() < end) {
    //     requestAnimationFrame(frame);
    // }
    // }());
});

