const Gameboard = (() => {
    let gameboard = Array(9).fill(null)
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let header = document.querySelector("#title")
    let restart = document.querySelector("#re")
    let box = document.querySelectorAll(".box")
    let shwgameboard = () =>{
        for (let i = 0; i < gameboard.length; i++){
            box[i].innerHTML = gameboard[i];
        }
    }

    let checkwin = () => {
        for (const condition of winningConditions) {
            let [a,b,c] = condition
            if (gameboard[a] && (gameboard[a] == gameboard[b] && gameboard[a] == gameboard[c])){
                return [a,b,c]
            }
        }
        return false

    }

    let restartgame = () =>{
        gameboard.fill(null)
        shwgameboard()
        header.innerHTML = "TIC TAC TOE";
        player2.turn = false;
        player1.turn = true;
    }

    let playermark = (e) => {
        if (player1.turn === true && e.target.innerHTML === ""){
        player1.markarea(e)
        gameboard[e.target.id] = player1.sign
        if(checkwin()){
            header.innerHTML = player1.name + " has Won";
        }else{
            player1.turn = false;
            player2.turn = true;
        }
        
        console.log(gameboard)
    }else if (player2.turn === true && e.target.innerHTML === ""){
        player2.markarea(e)
        gameboard[e.target.id] = player2.sign
        if(checkwin()){
            header.innerHTML = player2.name + " has Won";
        }else{
            player2.turn = false;
            player1.turn = true;
        }
        
    }else{
        alert("This Spot is Taken")
    }}
    
    return {shwgameboard,box,playermark,checkwin,restart,restartgame}
})();

const Playerfactory = (name,sign,turn) => {

    let markarea = (e) => {
        e.target.innerHTML = sign;
    }
    return {markarea,name,sign,turn}
}

const Gameflow = (() =>{
    let person = prompt("What's Your Name?")
    player1 = Playerfactory(person,"X",true)
    player2 = Playerfactory("The Other GUY","O",false)
    Gameboard.shwgameboard();
    Gameboard.box.forEach(box => box.addEventListener('click',Gameboard.playermark))
    Gameboard.restart.addEventListener("click",Gameboard.restartgame)
})();
