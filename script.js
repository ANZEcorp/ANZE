const members = [
  {
    name: "Shiro",
    role: "Main developper"
  },
  {
    name: "KaZ",
    role: "Developper and head of marketing"
  },
  {
    name: "Theredudu",
    role: "Developper and HR coordinator"
  },
  {
    name: "PSX",
    role: "Member"
  }
];

const membersGrid = document.getElementById("membersGrid");

members.forEach((member, index) => {
  const card = document.createElement("article");
  card.className = "card member-card";

  card.innerHTML = `
    <div class="member-number">${index + 1}</div>
    <div class="member-name">${member.name}</div>
    <div class="member-role">${member.role}</div>
  `;

  membersGrid.appendChild(card);
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.88;

  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < trigger) {
      element.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);