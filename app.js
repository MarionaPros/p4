const translations={
    es:{
        "title": "Vacaciones Mediterráneo",
        "apartments": "Apartmentos",
        "info":"Información General",
        "price":"Precios",
        "subtitle":"Disfruta de tus vacaciones cerca del mar",
        "contact":"Contacto",
        "facebook":"Facebook",
        "instagram": "Instagram",
        "page-title": "Vacaciones Mediterráneo/Apartamentos",
        "header-title": "Apartamentos",
        "apartment1-details": [
                "Una habitación:1 cama doble + 1 cama individual",
                "Un sofa cama doble",
                "Sistema de aire acondicionado",
                "Wifi",
                "Lavadora",
                "Patio compartido",
                "Piscina descubierta compartida"
            ],
        "apartment1-description": "Apartamento bajo para 5 en Cala'n Blanes, Menorca",
        "apartment2-details": [
                "Una habitación:2 camas individuales",
                "Un sofa cama doble",
                "Sistema de aire acondicionado",
                "Wifi",
                "Lavadora",
                "Patio compartido",
                "Piscina descubierta compartida"
            ],
        "apartment2-description": "Apartamento para 4 en Cala'n Blanes, Menorca",
        "contact-link": "Contacto",
        "facebook-link": "Facebook",
        "instagram-link": "Instagram",
        "header-title2": "Información general",
        "rule1": "Queda totalmente prohibido la realización de fiestas",
        "rule2": "El apartamento debe dejarse en el estado en el que se encontró",
        "rule3": "El número de húespedes queda limitado por lo que aparece en el anuncio, no se aceptan más húespedes de la capacidad del apartamento",
        "rule4": "Quedan totalmente prohibidos los animales",
        "rule5": "Se ruega que se deje el apartamento sobre las 10 de la mañana el día de salida",
        "contact-info": "Para cualquier duda o recomendación, no dude en ponerse en contacto con el propietario",
        "label-name": "Nombre:",
        "label-message": "Mensaje:",
        "submit-button": "Enviar",
        "locations-title": "Ubicaciones",
        "header-title3": "Precios",
        "menorca-5-title": "Menorca 5 personas",
        "season-title": "Temporada",
        "price-title": "Precio por noche",
        "low-season": "Baja",
        "low-season-price": "50EUR",
        "mid-season": "Media",
        "mid-season-price": "75EUR",
        "high-season": "Alta",
        "high-season-price": "115EUR",
        "menorca-4-title": "Menorca 4 personas",
        "season-title-4": "Temporada",
        "price-title-4": "Precio por noche",
        "low-season-4": "Baja",
        "low-season-price-4": "45EUR",
        "mid-season-4": "Media",
        "mid-season-price-4": "70EUR",
        "high-season-4": "Alta",
        "high-season-price-4": "110EUR"    
    },
    en:{
        "title": "Vacaciones Mediterráneo",
        "apartments": "Apartments",
        "info":"General information",
        "price":"Prices",
        "subtitle":"Enjoy your holidays near the sea",
        "contact":"Contact",
        "facebook":"Facebook",
        "instagram": "Instagram",
        "page-title": "Mediterranean Vacations/Apartments",
            "header-title": "Apartments",
            "apartment1-details": [
                "One bedroom: 1 double bed + 1 single bed",
                "One double sofa bed",
                "Air conditioning system",
                "Wifi",
                "Washing machine",
                "Shared patio",
                "Shared outdoor pool"
            ],
        "apartment1-description": "Ground floor apartment for 5 people in Cala'n Blanes, Menorca",
        "apartment2-details": [
                "One bedroom: 2 single beds",
                "One double sofa bed",
                "Air conditioning system",
                "Wifi",
                "Washing machine",
                "Shared patio",
                "Shared outdoor pool"
            ],
        "apartment2-description": "Apartment for 4 people in Cala'n Blanes, Menorca",
        "contact-link": "Contact",
        "facebook-link": "Facebook",
        "instagram-link": "Instagram",
        "header-title2": "General Information",
        "rule1": "The holding of parties is strictly prohibited",
        "rule2": "The apartment must be left in the condition in which it was found",
        "rule3": "The number of guests is limited to what appears in the advertisement, no more guests than the capacity of the apartment are accepted",
        "rule4": "Animals are strictly prohibited",
        "rule5": "Please leave the apartment by 10 am on the day of departure",
        "contact-info": "For any questions or recommendations, please contact the owner",
        "label-name": "Name:",
        "label-message": "Message:",
        "submit-button": "Send",
        "locations-title": "Locations",
        "header-title3": "Prices",
        "menorca-5-title": "Menorca 5 people",
        "season-title": "Season",
        "price-title": "Price per night",
        "low-season": "Low",
        "low-season-price": "50EUR",
        "mid-season": "Medium",
        "mid-season-price": "75EUR",
        "high-season": "High",
        "high-season-price": "115EUR",
        "menorca-4-title": "Menorca 4 people",
        "season-title-4": "Season",
        "price-title-4": "Price per night",
        "low-season-4": "Low",
        "low-season-price-4": "45EUR",
        "mid-season-4": "Medium",
        "mid-season-price-4": "70EUR",
        "high-season-4": "High",
        "high-season-price-4": "110EUR"
    }
          
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("El script app.js se ha cargado correctamente");
    const languageSelector = document.getElementById("language-selector");
    //Obtener el idioma guardado en localStorage o establecer español por defecto
    const savedLanguage=localStorage.getItem('idioma') || 'es';
    languageSelector.value=savedLanguage;
    loadTranslations(savedLanguage)
    // Función para cargar el archivo JSON de traducción y actualizar los textos
    function loadTranslations(language) {
        const data= translations[language];
        if (!data){
            console.error(`Traducción no encontrada`);
            return;
            
        }

                document.getElementById("title").textContent = data.title;
                document.getElementById("apartments-link").textContent = data.apartments;
                document.getElementById("info-link").textContent = data.info;
                document.getElementById("price-link").textContent = data.price;
                document.getElementById("subtitle").textContent = data.subtitle;
                document.getElementById("apartments-link-main").textContent = data.apartments;
                document.getElementById("info-link-main").textContent = data.info;
                document.getElementById("price-link-main").textContent = data.price;
                document.getElementById("contact-link").textContent = data.contact;
                document.getElementById("facebook-link").textContent = data.facebook;
                document.getElementById("instagram-link").textContent = data.instagram;
            
    }

    // Cargar traducción inicial (por defecto en español)
    loadTranslations("es");

    // Actualizar las traducciones al cambiar el idioma
    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        loadTranslations(selectedLanguage);
        localStorage.setItem('idioma',selectedLanguage);
    });
});
//APARTAMENTOS
document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");
    const savedLanguage=localStorage.getItem('idioma') || 'es';

    function loadTranslations(language) {
        const data= translations[language];
        if (!data){
            console.error(`Traducción no encontrada`);
            return;
        }
                console.log('Traducción cargada: ', data);
                document.getElementById('header-title').textContent = data['header-title'];
                document.getElementById('page-title').textContent = data['page-title'];

                document.getElementById('apartment1-description').textContent = data['apartment1-description'];
                document.getElementById('apartment2-description').textContent = data['apartment2-description'];

                document.getElementById('contact-link').textContent = data['contact-link'];
                document.getElementById('facebook-link').textContent = data['facebook-link'];
                document.getElementById('instagram-link').textContent = data['instagram-link'];

                const apartment1Details = document.getElementById("apartment1-details");
                apartment1Details.innerHTML = data["apartment1-details"].map(detail => `<li>${detail}</li>`).join('');

                const apartment2Details = document.getElementById("apartment2-details");
                apartment2Details.innerHTML = data['apartment2-details'].map(detail => `<li>${detail}</li>`).join('');

    }

    loadTranslations("es");

    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        loadTranslations(selectedLanguage);
        localStorage.setItem('idioma',selectedLanguage);
    });
});

//INFORMACIÓN GENERAL
document.addEventListener("DOMContentLoaded", function() {
    console.log("El script app.js se ha cargado correctamente");
    const languageSelector = document.getElementById("language-selector");
    const savedLanguage=localStorage.getItem('idioma') || 'es';

    // Función para cargar el archivo JSON de traducción y actualizar los textos
    function loadTranslations(language) {
        const data= translations[language];
        if (!data){
            console.error(`Traducción no encontrada`);
            return;
        }

                document.getElementById('page-title').textContent = data['page-title'];
                document.getElementById('header-title2').textContent = data['header-title2'];
                document.getElementById('rule1').textContent = data['rule1'];
                document.getElementById('rule2').textContent = data['rule2'];
                document.getElementById('rule3').textContent = data['rule3'];
                document.getElementById('rule4').textContent = data['rule4'];
                document.getElementById('rule5').textContent = data['rule5'];
                document.getElementById('contact-info').textContent = data['contact-info'];
                document.getElementById('label-name').textContent = data['label-name'];
                document.getElementById('label-message').textContent = data['label-message'];
                document.getElementById('submit-button').value = data['submit-button'];
                document.getElementById('locations-title').textContent = data['locations-title'];
                document.getElementById('contact-link').textContent = data['contact-link'];
                document.getElementById('facebook-link').textContent = data['facebook-link'];
                document.getElementById('instagram-link').textContent = data['instagram-link'];

    }

    // Cargar traducción inicial (por defecto en español)
    loadTranslations("es");

    // Actualizar las traducciones al cambiar el idioma
    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        loadTranslations(selectedLanguage);
        localStorage.setItem('idioma',selectedLanguage);
    });
});

//PRECIOS

document.addEventListener("DOMContentLoaded", function() {
    console.log("El script app.js se ha cargado correctamente");
    const languageSelector = document.getElementById("language-selector");
    savedLanguage=localStorage.getItem('idioma') || 'es';

    // Función para cargar el archivo JSON de traducción y actualizar los textos
    function loadTranslations(language) {
        const data= translations[language];
        if (!data){
            console.error(`Traducción no encontrada`);
            return;
        }
                document.getElementById('page-title').textContent = data['page-title'];
                document.getElementById('header-title3').textContent = data['header-title3'];
                document.getElementById('menorca-5-title').textContent = data['menorca-5-title'];
                document.getElementById('season-title').textContent = data['season-title'];
                document.getElementById('price-title').textContent = data['price-title'];
                document.getElementById('low-season').textContent = data['low-season'];
                document.getElementById('low-season-price').textContent = data['low-season-price'];
                document.getElementById('mid-season').textContent = data['mid-season'];
                document.getElementById('mid-season-price').textContent = data['mid-season-price'];
                document.getElementById('high-season').textContent = data['high-season'];
                document.getElementById('high-season-price').textContent = data['high-season-price'];
                document.getElementById('menorca-4-title').textContent = data['menorca-4-title'];
                document.getElementById('season-title-4').textContent = data['season-title-4'];
                document.getElementById('price-title-4').textContent = data['price-title-4'];
                document.getElementById('low-season-4').textContent = data['low-season-4'];
                document.getElementById('low-season-price-4').textContent = data['low-season-price-4'];
                document.getElementById('mid-season-4').textContent = data['mid-season-4'];
                document.getElementById('mid-season-price-4').textContent = data['mid-season-price-4'];
                document.getElementById('high-season-4').textContent = data['high-season-4'];
                document.getElementById('high-season-price-4').textContent = data['high-season-price-4'];
                document.getElementById('contact-link').textContent = data['contact-link'];
                document.getElementById('facebook-link').textContent = data['facebook-link'];
                document.getElementById('instagram-link').textContent = data['instagram-link'];
    }

    // Cargar traducción inicial (por defecto en español)
    loadTranslations("es");

    // Actualizar las traducciones al cambiar el idioma
    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        loadTranslations(selectedLanguage);
        localStorage.setItem('idioma',selectedLanguage);
    });
});

document.getElementById("submit-button").addEventListener("submit",async function(event){
    event.preventDefault();
    const mensajeObtenido= {
        nombre:document.getElementById("name").value,
        email:document.getElementById("email").value,
        numTelefono:document.getElementById("telefono").value,
        mensaje:document.getElementById("message").value

    };

    try{
        const response=await fetch("http://localhost:8080/api/mensajes",{
            method:"POST",
            headers:{
                "Content-Type":"application/json" //Se debe indicar el tipo de contenido para que el backend lo pueda entender
            },
            body:JSON.stringify(mensajeObtenido) //Se convierte el objeto a un string JSON

        });
        if(response.ok){
            alert("Mensaje enviado correctamente");
            document.getElementById("formulario").reset();
        }else{
            alert("Ha ocurrido un error al enviar el mensaje");
        }
    }catch(error){
        console.error("Ha ocurrido un error al enviar el mensaje",error);
    }
});



