const Gameboard = (() => {
    let gameboard = ["X","O","X","X","O","X","X","O","X"];
    let box = document.querySelectorAll(".box")
    let shwgameboard = () =>{
        for (let i = 0; i < gameboard.length; i++){
            box[i].innerHTML = `${gameboard[i]}`;
        }
    }
    return {shwgameboard,box}
})();

const Playerfactory = (name,sign,turn) => {
    let bax = Gameboard.box;
    const markarea = () =>{
        bax.foreach(box => box.addEventListener("click",(e)=>{
            e.target.innerHTML = sign;
        }))
    }
    return {markarea,name,sign,turn}
}

const Gameflow = (() =>{
    Gameboard.shwgameboard();
    player1 = Playerfactory("max","X",false)
    player1.markarea()
})();

