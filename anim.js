document.addEventListener('DOMContentLoaded', function() {
  let titles = document.querySelectorAll('.title')  
  let chauves = document.querySelectorAll('.chauve')  
  let starss = document.querySelectorAll('.stars')
  let rivers = document.querySelectorAll('.river')
  let buildings = document.querySelectorAll('.building')
  let bridges = document.querySelectorAll('.bridge')

  let titleTop = parseInt(getComputedStyle(titles[0]).top.replace('px', ''))
  let riverTop = parseInt(getComputedStyle(rivers[0]).bottom.replace('px', ''))
  let buildingTop = parseInt(getComputedStyle(buildings[0]).marginTop.replace('px', ''))
  let bridgeTop = parseInt(getComputedStyle(bridges[0]).marginBottom.replace('px', ''))
  const first_mt = parseInt(getComputedStyle(starss[0]).marginTop.replace('px', ''))
  const second_mt = parseInt(getComputedStyle(chauves[0]).marginTop.replace('px', ''))
  window.addEventListener('scroll', function() {
    window.addEventListener('scroll', function(){
      let value = window.scrollY
      buildings.forEach((building) => {  
        building.style.marginTop = buildingTop + value*0.4 + 'px'
      })
      
      titles.forEach((title) => {
        title.style.top = titleTop + value*1.2 + 'px'
      })

      rivers.forEach((river) => {
        river.style.bottom = riverTop + value*0.1 + 'px'
      })

      bridges.forEach((bridge) => {
        bridge.style.marginBottom = bridgeTop - value*0.5 + 'px'
      })

      starss.forEach((stars) => {
        stars.style.marginTop = first_mt+40+(value * 4) + 'px'
      })

      chauves.forEach((chauves) => {
        chauves.style.marginTop = second_mt+40+(value * 4) + 'px'
      })

    })
  })
/*=========== loop mode xray ===============*/
  const cursor = document.querySelector('.cursor')
  const inverse = document.querySelector('.inverse')
  const prime = document.querySelector('.prime')
  console.log(inverse)
  inverse.style.setProperty('--x', '0')
  inverse.style.setProperty('--y', '0')
  window.addEventListener('mousemove', function(event) {
    const x = event.clientX
    const y = event.clientY
    cursor.style.left = '${x - 50}px'
    cursor.style.top = '${y - 50}px'
  })
  prime.addEventListener('mousemove', function(event) {
    const x = event.pageX
    const y = event.pageY
    inverse.style.setProperty('--x', `${x}px`)
    inverse.style.setProperty('--y', `${y}px`)
    /*=============mouse timer ====================*/
      var timer
      function mouseStopped() {
        inverse.style.visibility = "hidden"
      }
      window.addEventListener("mousemove",function(){
        inverse.style.visibility =""
        clearTimeout(timer)
        timer=setTimeout(mouseStopped,500)
     })
  })
  const menuBtn = document.querySelector ('.menu-btn')
  const menuMobile = document.querySelector('.second_header')
  let menuOpen = false;
  menuBtn.addEventListener('click', ()=> {
    if (!menuOpen) {
      menuBtn.classList.add('open')
      menuMobile.style.display = 'flex'
      menuOpen = true;
    } else{
      menuBtn.classList.remove('open')
      menuMobile.style.display = 'none'
      menuOpen = false;
    }
  })
})