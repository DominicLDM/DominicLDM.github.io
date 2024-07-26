
window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.animatedBg').style.height = '100vh';
    window.scrollTo(0,1);
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
        }, 3000);
        setTimeout(()=>{
            intro.style.top = '-100vh';
            logo.style.display = 'none';
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
})