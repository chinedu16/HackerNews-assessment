const app = document.getElementById('root');
const container = document.createElement('container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(news => {
      const card = document.createElement('container');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = news.title;

      const p = document.createElement('p');
      news.description = news.description.substring(0, 300);
      p.textContent = `${news.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `nothing is working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
