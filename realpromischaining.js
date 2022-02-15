//comment regler le probleme asynchrone de setTimout : autrement dit, comment regler le probleme du promesse chaining ?

//Notion: il est imperatif de savoir que la fonction then doit retourner idealement une promesse !

const promise = new Promise((resolve, reject) => {
    console.log("on arrive à l'execution resolve")
    //un if true then resolve sinon reject()
    if (1 + 1 === 2)
        resolve()
    else
        reject()
})

//voici la solution:  
//then va retourner une promesse qui va etre traiter par le then suivant !

promise.then(() => {
    //retourne une promesse
    return new Promise((resolve, reject) => {
        //execute les instruction au bout de 2s
        setTimeout(() => {
            console.log("finished 1")
            //le resolve va etre executé apres 2 sec
            resolve()
        }, 2000)
    })
}
    //le then va executer le callback de resolve qui sera executé apres 2sec
).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("finished 2")
            resolve()
        }, 5000)
    })
}
).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("finished 3")
            resolve()
        }, 1000)
    })
}
)
//conclusion: ici on a bien ce qu'on veut : execution du 1er  au bout de 2 sec , le 2eme au bout de 5s et le 3eme au bout de 1 seconde : 
//total 8 sec 
//explication : en haut dans les commentaires 
