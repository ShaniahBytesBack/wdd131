document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = document.lastModified;

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            navMenu.style.display = "flex";
        } else {
            navMenu.style.display = "none";
        }
    });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru",
    location: "San Diego, California, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 10600,
    imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1946, January, 10",
      area: 8900,
      imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "2024, January, 10",
    area: 16700,
    imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "2014, January, 10",
    area: 13600,
    imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
    
];
const container = document.querySelector("#temple-container");
  
function renderTemples(templesToRender) {
  container.innerHTML = "";
  templesToRender.forEach((temple) => {
    const templeCard = `
      <div class="temple-card">
        <h2>${temple.templeName}</h2>
        <p><span>Location:</span> ${temple.location}</p>
        <p><span>Dedicated:</span> ${temple.dedicated}</p>
        <p><span>Area:</span> ${temple.area} sqft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      </div>
    `;
    container.innerHTML += templeCard;
  });
}

function filterTemples(filterType) {
  let filteredTemples = [];
  switch (filterType) {
    case "Old":
      filteredTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 2000);
      break;
    case "New":
      filteredTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case "Large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      break;
    case "Small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }
  renderTemples(filteredTemples);
}
  
document.querySelector("#nav-home").addEventListener("click", () => filterTemples("Home"));
document.querySelector("#nav-old").addEventListener("click", () => filterTemples("Old"));
document.querySelector("#nav-new").addEventListener("click", () => filterTemples("New"));
document.querySelector("#nav-large").addEventListener("click", () => filterTemples("Large"));
document.querySelector("#nav-small").addEventListener("click", () => filterTemples("Small"));
  
renderTemples(temples);