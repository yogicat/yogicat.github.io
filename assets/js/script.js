const Introduction = document.getElementById('introduction')
const clickables = document.querySelectorAll('.clickable')


function handleClick(e) {
  let child = e.target.querySelector('img')
  child.classList.toggle('isShow')
}

clickables.forEach(item => {
  item.addEventListener('click', handleClick)
  item.addEventListener('touchstart', handleClick)
  item.addEventListener('mouseover', handleClick)
  item.addEventListener('mouseleave', handleClick)
})
