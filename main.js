/*Affichons le choix d'abonnement au click*/
const ecran = document.querySelector('.conteneur-plan-abonnement');
const _plan1 = document.querySelector('.plan-1');
const _plan2 = document.querySelector('.plan-2');
const _type1 = document.querySelector('.type-1');
const _type2 = document.querySelector('.type-2');
const donnee1 =_plan1.content.cloneNode(true);
const donnee2 =_plan2.content.cloneNode(true);

_type1.addEventListener('click',()=>{
    _type2.classList.remove('active-plan');
    _type1.classList.add('active-plan');
    ecran.textContent="";
    ecran.append(donnee1);
})
_type2.addEventListener('click',()=>{
    _type1.classList.remove('active-plan');
    _type2.classList.add('active-plan');
    ecran.textContent="";
    ecran.append(donnee2);
})