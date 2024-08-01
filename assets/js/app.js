
window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.animatedBg').style.height = '100lvh';
    window.scrollTo(0,0);
    const hamMenu = document.querySelector('.hamburger-menu');
    const offScreen = document.querySelector('.off-screen-menu');
    hamMenu.addEventListener('click', ()=> {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
    })
    let intro = document.querySelector('.intro');
    let logo = document.querySelector('.logo-header');
    let logoSpan = document.querySelectorAll('.logo');
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx+1) * 600)
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 100)
            })
            window.scrollTo(0,0);
        }, 3000);
        setTimeout(()=>{
            intro.style.top = '-100lvh';
            logo.style.display = 'none';
            window.scrollTo(0,0);
            document.body.classList.remove('no-scroll');
        }, 3680)
    }, 250)
    const header = document.querySelector('.sticky');
    window.onscroll = () => {      
        if (window.scrollY > 0) {
            header.classList.add('blue');
        } else {
            header.classList.remove('blue');
        }
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('showGrow');
            } else {
                entry.target.classList.remove('showGrow');
            }
        });
    });
    const observer3 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('showGrowGrid');
            } else {
                entry.target.classList.remove('showGrowGrid');
            }
        });
    });
    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('showTitle');
            } else {
                entry.target.classList.remove('showTitle');
            }
        });
    });
    const ecas = document.querySelectorAll('.item');
    ecas.forEach(element =>{
        element.addEventListener('touchend', ()=>{
            element.classList.toggle('click');
        })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
    const hiddenElementsSmall = document.querySelectorAll('.hidden-small');
    const hiddenElementsGrid = document.querySelectorAll('.hidden-grid');
    const hiddenElementsTitle = document.querySelectorAll('.hidden-title');
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElementsLeft.forEach((el1) => observer.observe(el1));
    hiddenElementsSmall.forEach((el2) => observer2.observe(el2));
    hiddenElementsGrid.forEach((el3) => observer3.observe(el3));
    hiddenElementsTitle.forEach((el4) => observer4.observe(el4));
})