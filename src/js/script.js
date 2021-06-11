document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const wrapper = document.querySelector('.wrapper');
    const firstScreen = document.querySelector('.first');
    const secondScreen = document.querySelector('.second');
    const thirdScreen = document.querySelector('.third');

    skrollr.init({
        render: function (data) {
            // console.log(data)
            //Log the current scroll position.
            if (data.curTop > 0) {
                header.querySelectorAll('a').forEach(item => item.style.color = '#641358')
                anime({
                    targets: '.sprite rect',
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 400
                })

                anime({
                    targets: '.header',
                    translateY: [-40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 400
                })

                anime({
                    targets: '.advantages__box',
                    translateY: [-40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 600
                })

                anime({
                    targets: '.advantages__content .item',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: (el, i) => 800 + 70 * i
                })

                //first
                anime({
                    targets: '.main__title',
                    translateY: [-40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 600
                })

                anime({
                    targets: '.main__items .item',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: (el, i) => 800 + 100 * i
                })

                anime({
                    targets: '.item__count-one span',
                    textContent: [0, 2000],
                    round: 1,
                    easing: 'linear',
                    delay: 1000
                });

                anime({
                    targets: '.item__count-two span',
                    textContent: [0, 1],
                    round: 1,
                    easing: 'linear',
                    delay: 1100
                });

                anime({
                    targets: '.item__count-three span',
                    textContent: [0, 1000000],
                    round: 1,
                    easing: 'linear',
                    delay: 1200
                });

                anime({
                    targets: '.main__check .item',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: (el, i) => 1000 + 150 * i
                })

                anime({
                    targets: '.slides',
                    translateY: [-40, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 1200
                })

                anime({
                    targets: '.form',
                    translateX: [100, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 1400
                })

            } else {
                header.querySelectorAll('a').forEach(item => item.style.color = 'white')
            }
            if (data.curTop > 100) {
                header.querySelectorAll('a').forEach(item => item.style.color = 'white')
                console.log(data.curTop)
                anime({
                    targets: '.content__items',
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    delay: 600
                })
            }
        }
    });


// TABS
    let btnsTab = document.querySelectorAll('.tab__btn');
    let contTab = document.querySelectorAll('.tab__content');

    for (let i = 0; i < btnsTab.length; i++) {
        btnsTab[0].classList.add('active')
        contTab[0].classList.add('active')

        btnsTab[i].addEventListener('click', (e) => {
            e.preventDefault()

            for (let i = 0; i < btnsTab.length; i++) {
                btnsTab[i].classList.remove('active')
                contTab[i].classList.remove('active')
            }

            e.target.classList.add('active')
            contTab[i].classList.add('active')
        })
    }

// ANIMATE

    anime({
        targets: '.header',
        translateY: [-40, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: 400
    })

    anime({
        targets: '.main__title',
        translateY: [-40, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: 600
    })

    anime({
        targets: '.main__items .item',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: (el, i) => 800 + 100 * i
    })

    anime({
        targets: '.item__count-one span',
        textContent: [0, 2000],
        round: 1,
        easing: 'linear',
        delay: 1000
    });

    anime({
        targets: '.item__count-two span',
        textContent: [0, 1],
        round: 1,
        easing: 'linear',
        delay: 1100
    });

    anime({
        targets: '.item__count-three span',
        textContent: [0, 1000000],
        round: 1,
        easing: 'linear',
        delay: 1200
    });

    anime({
        targets: '.main__check .item',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: (el, i) => 1000 + 150 * i
    })

    anime({
        targets: '.slides',
        translateY: [-40, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: 1200
    })

    anime({
        targets: '.form',
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: 1400
    })

})