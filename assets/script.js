const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];



const teamContainer = document.getElementById('team-container');

// fatto ciclo for per inserire più volte i dati dell'utente nella card
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  // sostituito i nomi con i singoli elementi dell'array in modo tale da farli cambiare in automatico
  teamContainer.innerHTML += `
  <div class="col-4">
                <div class="team-card">
                    <img src="./assets/${member.img}" alt="Marco Bianchi">
                    <div class="team-info text-start">
                        <h5 class="nome">${member.name}</h5>
                        <p class="ruolo">${member.role}</p>
                        <a class="email" href="">${member.email}</a>
                    </div>
                </div>
            </div>
  `
console.log(member);

}

