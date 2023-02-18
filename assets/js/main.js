(function() {
  "use strict";

  /*-------------------------------------------
  Selector helper function
  -------------------------------------------*/
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /*-------------------------------------------
  Event listener function
  -------------------------------------------*/
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /*-------------------------------------------
  On scroll event listener 
  -------------------------------------------*/
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /*-------------------------------------------
  Navbar links active state on scroll
  -------------------------------------------*/
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /*-------------------------------------------
  Navbar display state on scroll
  -------------------------------------------*/
  // Initial state
  var scrollPos = 0;
  // adding scroll event
  window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top < -100) { 
      document.getElementById('navblur').classList.add('navblur');
    } 
    else {
      document.getElementById('navblur').classList.remove('navblur');
    }
    if ((document.body.getBoundingClientRect()).top < scrollPos)
      document.getElementById('navbar').classList.add('navbar-off');
    else 
      document.getElementById('navbar').classList.remove('navbar-off');
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
  });

  /*-------------------------------------------
  Scrolls to an element with header offset
  -------------------------------------------*/
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /*-------------------------------------------
  Back to top button
  -------------------------------------------*/
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /*-------------------------------------------
  Scroll with ofset on page load with hash links in the url
  -------------------------------------------*/
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /*-------------------------------------------
  Hero type effect
  -------------------------------------------*/
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /*-------------------------------------------
  Animation on scroll
  -------------------------------------------*/
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /*-------------------------------------------
  Initiate Pure Counter 
  -------------------------------------------*/
  new PureCounter();

})()