//asincronia en js


//Una promesa es un objeto especial de JS que representa un valor que puede llegar a estar disponible ahora, en el futuro inmmediato o en el futuro proximo, tambien es importantate remarcar la que la promesa puede que no este disponible nunca, o que falle.


//API (Aplication Programing Interaface)


//COMO HAGO USO de una API


//fetch

document.addEventListener('DOMContentLoaded', function () {

  const conteinerProjects = document.getElementById('conteiner_projects');
  const URL = 'https://fundametos-api-porfolios-dev-exsn.2.ie-1.fl0.io/api/v1/projects'

  const left = document.querySelector('.left')
  const rigth = document.querySelector('.rigth')
  const articleUl = document.querySelector('.article__ul')

  const data = fetch(URL)
  // console.log(data);

  data
    .then((res) => res.json())
    .then((data) => {

      // console.log(data)


      data.forEach(element => {

        // console.log(element);


        conteinerProjects.innerHTML += `
        
        <li class='article__li'>
          <img src='${element.image}' alt='${element.title}' class='article__img'>
          <h3 data-translate-en="${element.title}" data-translate-es="${element.titulo}" class='article__h3'>${element.titulo}</h3>
          <p data-translate-en="${element.description}" data-translate-es="${element.descripcion}">${element.descripcion}</p>
          <h4 data-translate-en="${element.tecnologias}" data-translate-es="${element.tecnologias}" class='article__h4'>${element.tecnologias}</h4>
        </li>
        `
      });

      let index = 0

      left.addEventListener('click', function () {
        // window.alert('left')
        index = (index > 0) ? --index : data.length - 1
        articleUl.style.transform = `translateX(-${index * 100}%)`
      })

      rigth.addEventListener('click', function () {
        // window.alert('rigth')
        index = (index < data.length - 1) ? ++index : 0
        articleUl.style.transform = `translateX(-${index * 100}%)`
      })




    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('Termine de hacer la peticion');
    })

})

