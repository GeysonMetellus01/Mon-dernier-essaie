const ecran = document.querySelector('.conteneur-texte');
const formulaire = document.querySelector('form');

formulaire.addEventListener('submit',(e)=>{
    e.preventDefault();
    const selection = e.currentTarget;
    const form = new FormData(selection);
    const reponseForm = form.get('mail').trim();
    if(reponseForm===""){
        return;
    }
    else{
        ecran.innerHTML='';
        const titre = document.createElement('h1');
        titre.innerText = 'Message Envoyé!'

        const paragraphe = document.createElement('p');
        paragraphe.setAttribute('class',"txt-recuperation");
        paragraphe.innerText='Merci de nous avoir fait confiance,\
        nous vous enverrons un email de récupération dans quelques secondes.';

        ecran.append(titre);
        ecran.append(paragraphe);
    }

})
