import Board from './Board'
import LeftPanel from './LeftPanel'

class Ball {
    ball: HTMLElement
    Board: Board = new Board();
    howManyBalls: number = 4
    constructor() {

    }

    createBall(bgColor: string) {
        let d: HTMLElement = document.createElement("div")
        d.className = "ball"
        d.style.background = bgColor
        d.setAttribute("data-color", bgColor);
        this.ball = d;
        d.onclick = () => this.makeBig()
        return <HTMLElement>d
    }

    makeBig() {
        let executed = false;
        if (Board.choosen) {
            if (Board.choosen == this.ball) {
                this.ball.style.width = "30px";
                this.ball.style.height = "30px";
                this.ball.style.marginTop = "8px";
                Board.choosen = null;
                executed = true;
            } else {
                Board.choosen.style.width = "30px";
                Board.choosen.style.height = "30px";
                Board.choosen.style.marginTop = "8px";
            }
        }
        if (executed == false) {
            this.ball.style.width = "40px";
            this.ball.style.height = "40px";
            this.ball.style.marginTop = "4px";
            Board.choosen = this.ball
            setTimeout(this.enableClick, 200);
        }
    }

    enableClick = () => {
        let id = Board.choosen.parentElement.id
        let ballX = parseInt(id[1])
        let ballY = parseInt(id[2])
        let color = Board.choosen.getAttribute("data-color");
        let tabX: { x: number, y: number }[] = []
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (document.getElementById("b" + j + i).classList.contains("hasBall")) {
                    tabX.push({ x: j, y: i })
                }
            }
        }
        let pos: any;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (!document.getElementById("b" + j + i).classList.contains("hasBall")) {
                    document.getElementById("b" + j + i).onmousemove = e => {
                        for (let i = 0; i < 9; i++) {
                            for (let j = 0; j < 9; j++) {
                                document.getElementById("b" + j + i).style.background = "#FFF"
                            }
                        }
                        pos = Board.astar([{ x: ballX, y: ballY }], { x: j, y: i }, tabX)
                        for (let i = 1; i < pos.length; i++) {
                            let x = parseInt(pos[i][0])
                            let y = parseInt(pos[i][2])
                            document.getElementById("b" + x + y).style.background = "pink";
                        }
                    }
                }


                document.getElementById("b" + j + i).onclick = (e: any) => {
                    if (Board.choosen != this.ball) {
                        for (let i = 0; i < 9; i++)
                        for (let j = 0; j < 9; j++) {
                            document.getElementById("b" + j + i).onclick = null
                            document.getElementById("b" + j + i).style.background = "#FFF"
                            document.getElementById("b" + j + i).onmousemove = null
                        }
                        return
                    }
                    if (pos.length != 1 && !e.currentTarget.classList.contains("hasBall")) { // jeżeli jest droga
                        // console.log("KLIK")

                        let currentCol = this.ball.style.background
                        let curPos: { x: number, y: number } = {
                            x: parseInt(e.currentTarget.id[1]), y: parseInt(e.currentTarget.id[2])
                        }

                        for (let i = 1; i < pos.length; i++) {
                            document.getElementById("b" + pos[i][0] + pos[i][2]).style.background = "#aaa";
                        }
                        for (let i = 0; i < 9; i++)
                            for (let j = 0; j < 9; j++)
                                document.getElementById("b" + j + i).onmousemove = null
                        this.moveBall(ballX, ballY, j, i, color)

                        setTimeout(() => {
                            for (let i = 0; i < 9; i++)
                                for (let j = 0; j < 9; j++) {
                                    document.getElementById("b" + j + i).onclick = null
                                    document.getElementById("b" + j + i).style.background = "#FFF"
                                    document.getElementById("b" + j + i).onmousemove = null
                                }

                            let positions: { x: number, y: number }[][] = [[]]
                            for (let n = 0; n < 8; n++) {
                                positions[n] = []
                            }
                            let dirs: number[] = [0, 0, 0, 0, 0, 0, 0, 0]

                            let vectors: { x: number, y: number }[] = [{ x: 1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 1, y: -1 }, { x: -1, y: -1 }, { x: -1, y: 1 }]

                            for (let i = 0; i < 8; i++) {
                                let boardPos: { x: number, y: number } = { ...curPos }

                                boardPos.x += vectors[i].x
                                boardPos.y += vectors[i].y

                                while (this.getColor(boardPos.x, boardPos.y) == currentCol) {

                                    // console.log(boardPos.x, boardPos.y)
                                    positions[i].push({ x: boardPos.x, y: boardPos.y })
                                    dirs[i] += 1;

                                    if (boardPos.x + vectors[i].x >= 0 && boardPos.x + vectors[i].x < 9 && boardPos.y + vectors[i].y >= 0 && boardPos.y + vectors[i].y < 9) {
                                        boardPos.x += vectors[i].x
                                        boardPos.y += vectors[i].y
                                    }
                                    else {
                                        break;
                                    }
                                }
                            }
                            // console.log(dirs)
                            // console.log("KONIEC")
                            let d: number[] = [];
                            d[0] = dirs[0] + dirs[2]
                            d[1] = dirs[1] + dirs[3]
                            d[2] = dirs[4] + dirs[6]
                            d[3] = dirs[5] + dirs[7]

                            let czyDodac: boolean = true


                            if (d[0] >= this.howManyBalls) {
                                this.removeBalls(positions[0])
                                this.removeBalls(positions[2])
                                czyDodac = false
                            }
                            if (d[1] >= this.howManyBalls) {
                                this.removeBalls(positions[1])
                                this.removeBalls(positions[3])
                                czyDodac = false
                            }
                            if (d[2] >= this.howManyBalls) {
                                this.removeBalls(positions[4])
                                this.removeBalls(positions[6])
                                czyDodac = false
                            }
                            if (d[3] >= this.howManyBalls) {
                                this.removeBalls(positions[5])
                                this.removeBalls(positions[7])
                                czyDodac = false
                            }
                            if (d[0] >= this.howManyBalls || d[1] >= this.howManyBalls || d[2] >= this.howManyBalls || d[3] >= this.howManyBalls) {
                                this.removeBalls([curPos])
                            }

                            if (czyDodac) {
                                this.Board.addThreeBall(LeftPanel.currentThree);
                                LeftPanel.replaceLeftBalls();
                            }
                        }, 500)
                    }
                }
            }
        }
    }

    getColor(x: number, y: number) {
        let b: any = document.getElementById("b" + x + y)
        if (b) {
            if (b.childNodes.length > 0)
                return b.children[0].style.background
            else
                return "-1"
        }
    }

    removeBalls(tab: { x: number, y: number }[]) {
        for (let i = 0; i < tab.length; i++) {
            let board: HTMLElement = document.getElementById("b" + tab[i].x + tab[i].y)
            board.innerHTML = ''
            board.classList.remove("hasBall")
        }
        let HTMLScore: HTMLElement = document.getElementById("score")
        let score: number = parseInt(HTMLScore.innerHTML)
        score += tab.length
        HTMLScore.innerHTML = score.toString();
    }

    moveBall = (oldX: number, oldY: number, newX: number, newY: number, bgColor: string) => {
        if (document.getElementById("b" + newX + newY).classList.contains("hasBall")) {
            newX = oldX
            newY = oldY
            // console.log("Ta sytuancja")
        }
        document.getElementById("b" + oldX + oldY).innerHTML = ''
        document.getElementById("b" + oldX + oldY).classList.remove("hasBall")
        document.getElementById("b" + newX + newY).appendChild(this.createBall(bgColor))
        document.getElementById("b" + newX + newY).classList.add("hasBall")
    }


    rand(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default Ball;