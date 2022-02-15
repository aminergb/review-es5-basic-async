//le promise chaining :
// le promise chaining c'est quand on a une suite de then et eventuellement de catch tout en debutant par une promesse:
//exemple simple : 
const promise = new Promise((resolve, reject) => {
    console.log("on arrive à l'execution resolve")
    //un if true then resolve sinon reject()
    if (1 + 1 === 2)
        resolve()
    else
        reject()
})
promise.then(() =>
    console.log("finished 1")).then(() => {
        console.log("finished 2")
    }).then(() => {
        console.log("finished 3")
    })
//lors de l'execution du premier exemple : on à l'impression d'avoir un enchainement sequentielle (comportement sequentiel)
//est ce que cela veut dire que then attends la fin de l'execution du then precedent ?
//pour repondre à cette question, on doit utiliser le promise chaining dans un contexte asynchrone.
//on va utiliser la fonction settimout :
//setTimout(): est une fonction ASYNCHRONE permettant d'executer des instruction au bout de x temps (attendre la fin du temps x pour exec)
// (malheureusement il n'existe pas de solution pour mettre en pause la fonction settimout)
//exemple 2 : avec timeout : promise chaining problem
//explication : ici on veut faire en sorte d'afficher finished 1 au bout de 5s, finished 2 au bout de 3s et finished 3 au bout de 2 sec
//donc en tout on va attendre 8 sec pour avoir tout les resultat.

promise.then(() =>
    setTimeout(() => { console.log("finished 1") }, 5000)
).then(() =>
    setTimeout(() => { console.log("finished 2") }, 3000)
).then(() =>
    setTimeout(() => { console.log("finished 3") }, 2000)
)
//RQ : sauf que lors de l'execution : 
//finished 3 est en premier lieu puis vient 2 puis 1. ==> ce n'est pas ce qu'on voulait !

//EXPLICATION: 
//le premier then se declenche dés qu'on rentre 'au niveau du body de promise' dans le resolve().
//le deuxieme then se declenche avant la fin des 5s, le 3eme se declenche avant le 2 
//donc on conclut que le 3eme finish est le premier à etre declencher ? ==> FAUX
//le promise chaining a bien executer le premier then avant le deuxieme et avant le 3eme. 
//vu que setTimout est asynchrone, alors le premier then est considéré comme exécuté, d'ou l'execution du 2eme then
//puis le 2eme then est asynchrone aussi alors il est aussi considéré comme exécuté, ce qui resulte l'execution du 3eme then.
//vu que le 3eme then a un temps moindre que les deux autres then , il fini en premier puis vient le 2 puis le 1.

//RQ: asynchrone : execution en background, en bloquant pas l'execution des autres instructions.

///===> A SUIVRE : Realpromisechaining