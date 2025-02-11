const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/194';

const myURL = baseURL + endpointMe;

getMyAvatar();
getMyName();

let listItem = document.querySelector("header li:nth-of-type(4) img");
let h1 = document.querySelector("h1");


function getMyAvatar() {
    getData(myURL).then(data => {
        const myData = data.data;
        const myAvatar = myData.avatar;


        listItem.src = myAvatar;
        listItem.alt = "User Avatar";

    })
}

function getMyName() {
    getData(myURL).then(data => {
        // console.log(data.data);

        const myData = data.data;
        let myName = myData.nickname;

        // console.log(myName);

        h1.textContent = myName;
    });
}

function setFavicon(avatarUrl) {
    // Maak de <link> tag aan als deze nog niet bestaat
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    // Zet de favicon naar de avatar URL
    link.href = avatarUrl;
}

getData(myURL).then(data => {
    const myData = data.data;
    const myAvatar = myData.avatar; // Zorg ervoor dat je de juiste property gebruikt voor de avatar
    setFavicon(myAvatar); // Zet de avatar als de favicon
});

// function searchFunction(event) {
//     event.preventDefault(); // Zorg ervoor dat het formulier niet opnieuw laadt.

//     const query = document.querySelector('form > input').value.toLowerCase();
//     const sections = document.querySelectorAll('section, div, article'); // Je kunt dit aanpassen afhankelijk van de HTML-structuur van je website.
//     let results = [];

//     sections.forEach(section => {
//         // Zoek naar tekstinhoud in de sectie
//         if (section.textContent.toLowerCase().includes(query)) {
//             results.push(section);
//         }

//         // Zoek naar afbeeldingen met alt-tekst die overeenkomt met de zoekterm
//         const images = section.querySelectorAll('img');
//         images.forEach(img => {
//             if (img.alt.toLowerCase().includes(query)) {
//                 results.push(img);
//             }
//         });
//     });

//     // Toon de resultaten (je kunt dit aanpassen naar hoe je de resultaten wilt weergeven)
//     if (results.length > 0) {
//         alert("Resultaten gevonden: " + results.length);
//         console.log(results);
//     } else {
//         alert("Geen resultaten gevonden.");
//     }
// }
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

// Als de voorkeur voor minder beweging uitstaat, toon de video
if (prefersReducedMotion) {
    const video = document.querySelector("video");
    video.style.display = "block"; // Video zichtbaar maken
    document.body.style.backgroundImage = 'none'; // Achtergrondafbeelding verbergen

    let btn = document.getElementById("myBtn");
    btn.style.display = "block"; // Knop zichtbaar maken

    let h1 = document.querySelector("h1");
    let h2 = document.querySelectorAll("h2");

    h1.style.color = "white";

    h2.forEach(h2 => {
        h2.style.color = "white";
    })
   

    function myFunction() {
        if (video.paused) {
            video.play();
            btn.innerHTML = "Pause video";

        } else {
            video.pause();
            btn.innerHTML = "Play video";
        }
    }
}


document.querySelector(".closeDialog").addEventListener("click", function() {
    document.getElementById("myDialog").close();
});


// document.querySelectorAll(".dialog section ul li").forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.add("revealed");
//     });
// });

document.querySelectorAll(".dialog section ul li").forEach(item => {
    item.addEventListener("click", () => {
        console.log("hi");
        item.classList.add("is-revealed"); // Maak de tekst zichtbaar en laat de deksel wegvliegen
    });
});

async /*9*/ function getData(URL) {
    return ( //8
        fetch(URL) //1
            .then( //2
                response /*3*/ => response.json() //4
            )
            .then( //5
                jsonData /*6*/ => { return jsonData } //7
            )
    );
}