// section1 - section2 img & video motion
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
});

gsap.to('.video__img__container', {
  scale: 52,
  ease: 'ease',
  scrollTrigger: {
    trigger: '.video__section',
    scrub: 1,
    start: 'top top',
    end: 'bottom',
    pin: true,
  },
});

gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 1,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to('.bar__container', {
  autoAlpha: 0,
  x: -500,
  duration: 1,
  scrollTrigger: {
    start: 1,
  },
});

gsap.to('.text__bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 0.5,
  scrollTrigger: {
    start: 2,
  },
});

const tl = gsap.timeline();

tl.from('.left-side div', {
  y: 150,
  opacity: 0,
  stagger: {
    amount: 0.4,
  },
  delay: 1,
}).from('.right-side', { opacity: 0, duration: 2 }, 0.05);
// .to('#section2', { x: -window.innerWidth });

ScrollTrigger.create({
  animation: tl,
  trigger: '.section2',
  start: 'top top',
  end: '+=600',
  scrub: 1,
  pin: true,
  ease: 'ease',
});

const timeline = gsap.timeline();

timeline
  .from('.title span', {
    y: 150,
    skewY: 5,
    duration: 2,
  })
  .from('.text__bottom', {
    letterSpacing: -10,
    opacity: 0,
    duration: 0.1,
  });

// section4 imgGallery motion
gsap.to('.col-1', {
  y: -450,
  ease: 'none',
  duration: 2,
  scrollTrigger: {
    trigger: '#section5',
    start: 'top center',
    end: '+=10000',
    scrub: true,
  },
});
gsap.to('.col-2', {
  y: 450,
  ease: 'none',
  duration: 2,
  scrollTrigger: {
    trigger: '#section5',
    start: 'top center',
    end: '+=10000',
    scrub: true,
  },
});
gsap.to('.col-3', {
  y: -450,
  ease: 'none',
  duration: 2,
  scrollTrigger: {
    trigger: '#section5',
    start: 'top center',
    end: '+=10000',
    scrub: true,
  },
});

// 01.  나타나기 표현하기
const hide = (item) => {
  gsap.set(item, { autoAlpha: 0 });
};

const animate = (item) => {
  let x = 100;
  let y = 0;
  let delay = item.dataset.delay;

  if (item.classList.contains('reveal')) {
    (x = 0), (y = -300);
  } else if (item.classList.contains('reveal_BTT')) {
    (x = 0), (y = 300);
  } else if (item.classList.contains('reveal_TTB')) {
    (x = 0), (y = -100);
  } else {
    (x = 100), (y = 0);
  }
  gsap.fromTo(
    item,
    { autoAlpha: 0, x: x, y: y },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      delay: delay,
      duration: 1.25,
      overwrite: 'auto',
      ease: 'expo',
    }
  );
};

gsap.utils.toArray('.reveal').forEach((item) => {
  hide(item);

  ScrollTrigger.create({
    trigger: item,
    containerAnimation: scrollTween,
    start: '10% center',
    end: '10% right',
    toggleActions: 'play none play none',
    end: '+=800',
    markers: false,
    onEnter: () => {
      animate(item);
    },
  });
});

// 07 : 텍스트 제자리 애니메이션
const ani7 = gsap.timeline();
ani7
  .from('#section17 .t1', { autoAlpha: 0, duration: 1, y: 50 }, '+=1')
  .from('#section17 .t2', { autoAlpha: 0, duration: 1, y: 50 }, '+=1')
  .from('#section17 .t3', { autoAlpha: 0, duration: 1, y: 50 }, '+=1')
  .from('#section17 .t4', { autoAlpha: 0, duration: 1, y: 50 }, '+=1')
  .from('#section17 .t5', { autoAlpha: 0, duration: 1, y: 50 }, '+=1');

ScrollTrigger.create({
  animation: ani7,
  trigger: '#section17',
  start: 'top top',
  end: '+=6000',
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

const ani5 = gsap.timeline();
const ani3 = gsap.timeline();
const aniReverse = gsap.timeline();

ani5
  .from('#section18 .t1', { xPercent: 300, duration: 5 }, 'text')
  .from('#section18 .t2', { xPercent: -300, duration: 5 }, 'text')
  .from('#section18 .t4', { xPercent: -300, duration: 5 }, 'text')
  .from('#section18 .t5', { xPercent: 300, duration: 5 }, 'text');

ani3
  .from('#section18 .t3', { scale: 0, autoAlpha: 0 }, 'text')
  .to(
    '#section18 .t3',
    { scale: 50, rotation: 360, duration: 10, autoAlpha: 1 },
    '+=1'
  )
  .to('#section18 .t3', { autoAlpha: 0 }, '-=0.5')
  .call(reverseAnimation); // t3 애니메이션이 끝나면 reverseAnimation 함수 호출

function reverseAnimation() {
  // t1, t2, t4, t5 요소들의 반대 방향 애니메이션
  aniReverse
    .to('#section18 .t1', { xPercent: -300, duration: 1 })
    .to('#section18 .t2', { xPercent: 300, duration: 1 }, '-=1')
    .to('#section18 .t4', { xPercent: 300, duration: 1 }, '-=1')
    .to('#section18 .t5', { xPercent: -300, duration: 1 }, '-=1');
}

ani5.add(ani3);

ScrollTrigger.create({
  animation: ani5,
  trigger: '#section18',
  start: 'top top',
  end: '+=2000',
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});

// // 06 : 텍스트 확대하기
// const ani6 = gsap.timeline();
// ani6
//   .to('#section9 .t5', {
//     scale: 50,
//     rotation: 360,
//     duration: 3,
//     autoAlpha: 1,
//   })
//   .to('#section9 .t5', { autoAlpha: 0 });

// ScrollTrigger.create({
//   animation: ani6,
//   trigger: '#section9',
//   start: 'top top',
//   end: '+=2000',
//   scrub: true,
//   pin: true,
//   anticipatePin: 1,
//   markers: false,
// });

// rotate animation
const text = document.querySelector('.text');
text.innerHTML = text.innerText
  .split('')
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
  )
  .join('');

// 메뉴 이동 스크립트
$('.menu a').click(function (e) {
  e.preventDefault();
  let target = $(this).attr('href');

  // 섹션 7이면 해당 스크롤 값으로 이동
  if (target === '#section7') {
    gsap.to(window, {
      scrollTo: { y: 7031, autoKill: false },
      duration: 1,
    });
  } else {
    // 섹션 7 이외의 메뉴는 해당 태그대로 이동
    gsap.to(window, {
      scrollTo: { y: target, autoKill: false },
      duration: 1,
    });
  }
});

// Arrow-up 클릭시 section1로 이동
$('.arrow-up').click(function (e) {
  e.preventDefault();
  gsap.to(window, {
    scrollTo: { y: '#section1', autoKill: false },
    duration: 1,
  });
});

// test
