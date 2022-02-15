//les promesses c'est basiquement un objet qui a 3 etats :
//etat pending => l'etat par defaut (etat initial) qui veut tout simplement dire : je suis tjr en execution je n'ai pas encore atteint
//l'un des deux callbacks resolve ou reject.
//Etat: resolve : l'etat dans lequel la promesse est tenu, c-a-d => on vient de rentrer dans le callback resolve()
//Etat: reject : l'etat dans lequel la promesse n'est pas tenu  c-a-d => on vient de rentrer dans le callback reject()
//------------------------------------------------------------------------------------------------------------------------------
//creation de la promesse : 
//la promesse prend un parametre qui correspond a une fonction qui elle méme à deux parametres correspondant a des callbacks "resolve"
//et "reject" ==> la fonction correspond a then.
const promise = new Promise((resolve, reject) => {
    console.log("on arrive à l'execution resolve")
    //un if true then resolve sinon reject()
    if (1 + 1 === 2)
        resolve()
    else
        reject()
})
//------------------------------------------------------------------------------------------------------------------------------
//premiere utilisation de then : 
//attente que l'execution de la promesse arrive a "resolve()"
//then prend comme parametre, resolve et rejet : perso je prefere mettre catch pour reject.
// RQ : catch est un then avec seulement callback reject 
//1ere version : moins clean
promise.then(() =>
    console.log("going to resolve 2"), () => {
        console.log("going to reject")
    })
//2eme version en utilisant then et catch: cleaner :
promise.then(() =>
    console.log("going to resolve 2")).catch(() => {
        console.log("going to reject")
        //finally est utilisé surtout pour fermer par exemple un flux de donnée, une connection à une bdd ou a un reseau 
    }).finally(() => {

        console.log("on l'execute peut importe le resultat de la promesse")
    })

//------------------------------------------------------------------------------------------------------------------------------
//===>VOIR LA SUITE : promischaining.js