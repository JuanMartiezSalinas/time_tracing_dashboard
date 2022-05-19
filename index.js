const cardContainer = document.querySelector('.cardContainer')
console.log(cardContainer)
fetch('data.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    clicked(data)
    cardContainer.childNodes.length === 0
      ? document.querySelector('.weekly').click()
      : ' '
  })

const clicked = (d) => {
  const btns = document.querySelectorAll('button')
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      btns.forEach((e) => e.classList.remove('active'))
      switch (btn.className) {
        case 'daily':
          cardContainer.innerHTML = ''
          createBoxes(d, btn.className.toString(), 'day')
          btn.classList.add('active')
          break
        case 'weekly':
          cardContainer.innerHTML = ''
          createBoxes(d, btn.className.toString(), 'week')
          btn.classList.add('active')
          break
        case 'monthly':
          cardContainer.innerHTML = ''
          createBoxes(d, btn.className.toString(), 'month')
          btn.classList.add('active')
          break
      }
    })
  })
}

const createBoxes = (arr, timeframes, period) => {
  arr.forEach((d) => {
    const box = `<div class="card ${d.title.toLowerCase().replace(' ', '')}">
        <div class="cardInfo">
          <div class="card_title">
            <p>${d.title}</p>
            <span><h2>...</h2></span>
          </div>
          <div class="card_info">
            <h1>${d.timeframes[timeframes].current}hrs</h1>
            <small>Last ${period}: ${
      d.timeframes[timeframes].previous
    }hrs</small>
          </div>
        </div>
      </div>`
    cardContainer.innerHTML += box
  })
}
