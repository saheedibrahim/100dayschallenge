tennisGame =(pPlayersRegistered, cTennisCourt) =>{
    let numberHosted = pPlayersRegistered/cTennisCourt;
    let snumberHosted = Math.ceil(numberHosted)
    return snumberHosted;
} 

let gameToPlay = tennisGame(58,8)
console.log(gameToPlay)