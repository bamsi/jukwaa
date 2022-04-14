const menuItem = document.querySelectorAll('.nav-link');
const moreButton = document.querySelector('#more-button');

menuItem.forEach((n) => n.addEventListener('click', () => {
  const activeMenu = document.querySelector('.active');
  activeMenu.classList.remove('active');
  n.classList.add('active');
}));

/** list of speakers */
const speakerList = [
  {
    name: 'Tumsifu Mkaangasumu',
    title: 'Event Organizer',
    description:
      'He has been working as an organizer for the meeting since 2016. His contribution to the society regarding the peoples health is commendable!',
    image: 'speaker-1.png',
  },
  {
    name: 'John Doe',
    title: 'Event Organizer',
    description:
      'He has been working as an organizer for the meeting since 2016. His contribution to the society regarding the peoples health is commendable!',
    image: 'speaker-2.png',
  },
  {
    name: 'Haiba Mwakasupa',
    title: 'Event Organizer',
    description:
      'She has been working as an organizer for the meeting since 2016. Her contribution to the society regarding the peoples health is commendable!',
    image: 'speaker-3.png',
  },
  {
    name: 'Haifu Mwawando',
    title: 'Event Organizer',
    description:
      'She has been working as an organizer for the meeting since 2016. Her contribution to the society regarding the peoples health is commendable!',
    image: 'speaker-4.png',
  },
  {
    name: 'Fahma Hanifu',
    title: 'Event Organizer',
    description:
      'She has been working as an organizer for the meeting since 2016. Her contribution to the society regarding the peoples health is commendable!',
    image: 'speaker-5.png',
  },
  {
    name: 'Phill Aden',
    title: 'Event Organizer',
    description:
      'He has been working as an organizer for the meeting since 2016. His contribution to the society regarding the peoples health is commendable!',
    image: 'speaker-6.png',
  },
];

function loadProjects() {
  const list = document.getElementById('speaker-list');
  let data = '';
  for (let i = 0; i < speakerList.length; i += 1) {
    if (i > 1) {
      data += '<div class="col-md-6 d-none d-md-block read-more">';
    } else {
      data += '<div class="col-md-6">';
    }
    data += `  <div class="card mb-3 border-0">
                  <div class="row g-0">
                    <div class="col-4">
                      <img
                        src="images/${speakerList[i].image}"
                        class="img-fluid rounded-start img-speaker"
                        alt="..."/>
                    </div>
                    <div class="col-8">
                      <div class="card-body text-start">
                          <h4 class="card-title">${speakerList[i].name}</h4>
                          <p class="card-text">
                            <small class="orange fst-italic"
                              >${speakerList[i].title}</small
                            >
                          </p>
                          <p class="card-text">
                            ${speakerList[i].description}
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  }

  list.innerHTML = data;
}

window.onload = function () {
  loadProjects();
};

function readMore() {
  const items = document.querySelectorAll('.read-more');
  items.forEach((n) => {
    n.classList.toggle('d-none');
  });
}

moreButton.addEventListener('click', readMore);
