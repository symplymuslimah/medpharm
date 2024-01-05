//info number javascript code
document.addEventListener('DOMContentLoaded',function () {
    const Pnumber  = document.querySelectorAll('.pharmnumber');
    const firstNumber = document.getElementById('firstnumber');
    const secondNumber = document.getElementById('secondnumber');
    const thirdNumber = document.getElementById('thirdnumber');
    const fourthNumber = document.getElementById('fourthnumber');

    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;

    const targetFirst = 320;
    const targetSecond = 128;
    const targetThird = 12;
    const targetFourth = 24;
    function updateNumber() {
        if (first < targetFirst) {
            first += 4;
        }
        if (second < targetSecond) {
            second += 2;
        }
        if (third < targetThird) {
            third += 1;
        }
        if (fourth < targetFourth) {
            fourth += 1;
        }
        firstNumber.textContent = first;
        secondNumber.textContent = second;
        thirdNumber.textContent= third + "K";
        fourthNumber.textContent = fourth;

        if(first === targetFirst && second===targetSecond && third===targetThird && fourth===targetFourth){
            clearInterval(stopInterval);
        }
        
    }
    setInterval(updateNumber,100);
    
});

// navigation js code
document.addEventListener('DOMContentLoaded',function () {
  const activeIcon = document.querySelector('.icon-active');
  const cancelIcon = document.querySelector('.icon-cancel');
  const navHeading = document.querySelector('.nav-header');
   activeIcon.addEventListener('click',function () {
     navHeading.classList.add('active');
     activeIcon.style.display = 'none';
     cancelIcon.style.display = 'block';
  })
   
  cancelIcon.addEventListener('click',function () {
    navHeading.classList.remove('active');
    activeIcon.style.display = 'block';
    cancelIcon.style.display = 'none';
 })
  

});

//scroll reveal javascript
ScrollReveal({ distance: '120px' });
ScrollReveal().reveal('.container', { origin: 'top', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.number-section,.our-company-section,.commitment-section,.our-purpose-section', { origin: 'left', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.our-brand-section,.footer-section', { origin: 'left', delay:200, interval:300,
duration:3000 });
ScrollReveal().reveal('.our-value-section,.partnership-section,.medics-content', { origin: 'bottom', delay:200, interval:300,
duration:3000 });
