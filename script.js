const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/194';

const myURL = baseURL + endpointMe;

getMyAvatar();
getMyName();
getMyImage();


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
    console.log("setFavicon() is aangeroepen!");
    let link = document.querySelector('link[rel="icon"]');

    if (!link) {
        console.log("Geen bestaande favicon gevonden, nieuwe aanmaken...");
        link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/x-icon';
        document.head.appendChild(link);
    } else {
        console.log("Bestaande favicon gevonden, wordt geüpdatet...");
    }

    console.log("Nieuwe favicon URL:", avatarUrl);
    link.href = avatarUrl;
}

// Roep de functie aan om te testen
setFavicon("https://example.com/favicon.ico");


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


// const myImgDialog = document.querySelector('.dialog-content');


getMyImage();


// function getMyImage() {
// 	getData(myURL).then( data => {  
//     console.log(data.data);


// 		const myData = data.data;

//         const customData = JSON.parse(myData.custom);

// 		let myPhotos = myData.custom.photos;
//         console.log(myPhotos)
// 	});	
// }


function getMyImage() {
    getData(myURL).then(data => {
        // console.log(data.data);

        const myData = data.data;

        // Als custom een string is, moet je het parsen naar een object
        const customData = JSON.parse(myData.custom);

        // Haal de foto's uit customData
        let myPhotos = customData.photos;
        // console.log(myPhotos);

        // Zoek het element in de HTML waar je de foto's wilt plaatsen
        let photoContainer = document.getElementById('photoContainer');
        
        // Zorg ervoor dat de container leeg is voordat je nieuwe foto's toevoegt
        photoContainer.innerHTML = '';

        // Loop door de foto's en voeg ze toe aan de HTML
        myPhotos.forEach(photo => {
            // Maak een nieuw img-element voor elke foto
            let img = document.createElement('img');
            img.src = photo.image_url;  // Veronderstel dat elke foto een 'image_url' heeft
            img.alt = photo.description || 'Photo';  // Beschrijving is optioneel

            // Wacht tot de afbeelding geladen is om te controleren of het landscape of portrait is
            img.onload = function() {
                // Controleer de natuurlijke breedte en hoogte van de afbeelding
                if (img.naturalWidth > img.naturalHeight) {
                    img.classList.add('landscape'); // Voeg de 'landscape' klasse toe voor horizontale foto's
                    // Zorg ervoor dat de landscape afbeelding minder ruimte inneemt dan portrait
                    img.style.gridRowEnd = "span 1"; // Landscape afbeeldingen nemen 1 rij in
                } else {
                    img.classList.add('portrait');  // Voeg de 'portrait' klasse toe voor verticale foto's
                    img.style.gridRowEnd = "span 2"; // Portrait afbeeldingen nemen 2 rijen in
                }
            };

            // Voeg de afbeelding toe aan de container
            photoContainer.appendChild(img);
        });
    }).catch(error => {
        console.error('Er is een fout opgetreden:', error);
    });
}


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