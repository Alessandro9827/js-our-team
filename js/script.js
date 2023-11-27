const teamList = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

const wrapper = document.querySelector(".cardWrapper");
createCard(teamList, wrapper);

//Funzioni

function createCard(cardInfo, cardWrapper) {
    for(let i = 0; i < cardInfo.length; i++) {
        const member = cardInfo[i];
        cardWrapper.innerHTML += 
        `
        <!-- Article ${i} -->
        <article class="card">
            <div class="imgWrapper">
                <img src="img/${member.image}" alt="Picture of ${member.name}">
            </div>
            <div class="infoWrapper">
                <h2>${member.name}</h2>
                <p>${member.role}</p>
            </div>
        </article>
        `;
    }
}