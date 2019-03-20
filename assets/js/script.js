const Email = document.getElementById('Email')

Email.addEventListener('click', () => {
  const Tooltip = document.getElementById('myTooltip');
  Email.select();
  document.execCommand("copy");
  Tooltip.innerText = "복사되었습니다";
})

Email.addEventListener('mouseout', () => {
  const Tooltip = document.getElementById('myTooltip');
  Tooltip.innerText = "주소 복사";
})
