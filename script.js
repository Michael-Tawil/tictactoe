const Gameboard = (() => {
    let gameboard = [];
    let box = document.querySelectorAll(".box")
    let shwgameboard = () =>{
        for (let i = 0; i < gameboard.length; i++){
            box[i].innerHTML = gameboard[i];
        }
    }
    let playermark = (e) => {
        if (player1.turn === true && e.target.innerHTML === ""){
        player1.markarea(e)
        gameboard.push(player1.sign)
        player1.turn = false;
        player2.turn = true;
        console.log(gameboard)
    }else if (player2.turn === true && e.target.innerHTML === ""){
        player2.markarea(e)
        gameboard.push(player2.sign)
        player2.turn = false;
        player1.turn = true;
    }else{
        alert("This Spot is taken")
    }}

    
    return {shwgameboard,box,playermark}
})();

const Playerfactory = (name,sign,turn) => {
    let markarea = (e) => {
        e.target.innerHTML = sign;
    }
    return {markarea,name,sign,turn}
}

const Gameflow = (() =>{
    Gameboard.shwgameboard();
    player1 = Playerfactory("max","X",true)
    player2 = Playerfactory("max","O",false)
    Gameboard.box.forEach(box => box.addEventListener('click',Gameboard.playermark))
    
    return {}
})();
