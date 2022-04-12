import Ball from "./Ball";
import LeftPanel from './LeftPanel'

class Board {
    N: number;
    colors: string[]
    tabA: string[][] = [[]]
    tabB: string[][] = [[]]
    static choosen: HTMLElement
    constructor() {
        this.N = 9
        this.colors = ["red", "green", "blue", "orange", "yellow", "pink", "black"]

    }

    buildBoard() {
        for (let i: number = 0; i < this.N; i++) {
            for (let j: number = 0; j < this.N; j++) {
                document.getElementById("board").appendChild(this.createDiv(j, i))
            }
        }
    }

    static astar(pos: { x: number, y: number }[], mPos: { x: number, y: number }, tabX: { x: number, y: number }[]) {
        let tabA: string[][] = [[]]
        let tabB: string[][] = [[]]
        for (let i = 0; i < 9; i++) {
            tabA[i] = []
            tabB[i] = []
        }
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                tabA[j][i] = "0"
                tabB[j][i] = ""
            }
        }

        for (let i = 0; i < tabX.length; i++) {
            tabA[tabX[i].y][tabX[i].x] = "X"
        }
        tabA[pos[0].y][pos[0].x] = "S";
        tabA[mPos.y][mPos.x] = "M";

        let koniec = false
        let licznik = 1;
        // let pos: { x: number, y: number }[] = [{ x: 3, y: 2 }]
        let newPos: { x: number, y: number }[] = []
        // let mPos: { x: number, y: number } = { x: 1, y: 1 }

        while (koniec == false) {
            // if (licznik > 15) {
            //     koniec = false;
            //     return [];
            // }

            for (let i = 0; i < pos.length; i++) {
                if ((pos[i].x + 1 < 9 && tabA[pos[i].y][pos[i].x + 1] == "M") ||
                    (pos[i].y + 1 < 9 && tabA[pos[i].y + 1][pos[i].x] == "M") ||
                    (pos[i].x - 1 >= 0 && tabA[pos[i].y][pos[i].x - 1] == "M") ||
                    (pos[i].y - 1 >= 0 && tabA[pos[i].y - 1][pos[i].x] == "M")) {
                    // console.info("ZNALEZIONY")

                    // if (pos[i].x + 1 < 9)
                    //     tabB[pos[i].y][pos[i].x + 1] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y;
                    // else if (pos[i].y + 1 < 9)
                    //     tabB[pos[i].y + 1][pos[i].x] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y
                    // else if (pos[i].x - 1 >= 0)
                    //     tabB[pos[i].y][pos[i].x - 1] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y
                    // else if (pos[i].y - 1 >= 0)
                    //     tabB[pos[i].y - 1][pos[i].x] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y


                    // if (tabA[pos[i].y][pos[i].x + 1] == "M") // prawo
                    // else if (pos[i].y + 1 < 9 && tabA[pos[i].y + 1][pos[i].x] == "M") // na dół
                    // tabB[pos[i].y][pos[i].x] = tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y
                    // else if (tabA[pos[i].y][pos[i].x - 1] == "M") // w lewo
                    // tabB[pos[i].y][pos[i].x] = tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y

                    // else if (tabA[pos[i].y - 1][pos[i].x] == "M") // w górę
                    // tabB[pos[i].y][pos[i].x] = tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y

                    tabB[pos[i].y][pos[i].x] = tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + pos[i].y
                    tabB[mPos.y][mPos.x] = tabB[pos[i].y][pos[i].x] + "," + mPos.x + "_" + mPos.y

                    koniec = true
                    break;
                }

                // o 1 w dół
                if (pos[i].y + 1 < 9 && tabA[pos[i].y + 1][pos[i].x] == "0") {
                    tabA[pos[i].y + 1][pos[i].x] = licznik.toString()
                    newPos.push({ x: pos[i].x, y: pos[i].y + 1 })

                    tabB[pos[i].y + 1][pos[i].x] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + (pos[i].y)
                }

                // o 1 w prawo
                if (pos[i].x + 1 < 9 && tabA[pos[i].y][pos[i].x + 1] == "0") {
                    tabA[pos[i].y][pos[i].x + 1] = licznik.toString()
                    newPos.push({ x: pos[i].x + 1, y: pos[i].y })

                    tabB[pos[i].y][pos[i].x + 1] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + (pos[i].y)
                }

                // o 1 w górę
                if (pos[i].y - 1 >= 0 && tabA[pos[i].y - 1][pos[i].x] == "0") {
                    tabA[pos[i].y - 1][pos[i].x] = licznik.toString()
                    newPos.push({ x: pos[i].x, y: pos[i].y - 1 })

                    tabB[pos[i].y - 1][pos[i].x] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + (pos[i].y)
                }

                // o 1 w lewo
                if (pos[i].x - 1 >= 0 && tabA[pos[i].y][pos[i].x - 1] == "0") {
                    tabA[pos[i].y][pos[i].x - 1] = licznik.toString()
                    newPos.push({ x: pos[i].x - 1, y: pos[i].y })

                    tabB[pos[i].y][pos[i].x - 1] += tabB[pos[i].y][pos[i].x] + "," + pos[i].x + "_" + (pos[i].y)
                }

                // if ((pos[i].y + 2 < 4 && this.tabA[pos[i].y + 2][pos[i].x] == "M") || (pos[i].x + 2 < 4 && this.tabA[pos[i].y][pos[i].x+1] != "X" && this.tabA[pos[i].y][pos[i].x + 2] == "M") || (pos[i].y - 2 >= 0 && this.tabA[pos[i].y - 2][pos[i].x] == "M") || (pos[i].x - 2 >= 0 && this.tabA[pos[i].y][pos[i].x - 2] == "M")) koniec = true
            }
            licznik++
            pos = newPos.slice()
            newPos = []
            if (pos.length == 0) koniec = true;
            // console.log("POZYCJE: ")
            // console.table(pos)
            // console.log(pos.length)
            // console.log("Tablica");
            // console.table(this.tabA)
            // this.tabA[y][x+1] = "1"
        }

        // console.table(this.tabB)
        // console.log(tabB[mPos.y][mPos.x].split(","))
        return tabB[mPos.y][mPos.x].split(",")
        // console.table(this.tabA)
    }

    createDiv(x: number, y: number) {
        let d: HTMLElement = document.createElement("div")
        d.className = "board"
        d.id = "b" + x.toString() + y.toString()
        return <HTMLElement>d
    }

    addBall(x: number, y: number, bgColor: string) {
        let d: HTMLElement = new Ball().createBall(bgColor);
        let board = document.getElementById("b" + x.toString() + y.toString())
        board.appendChild(d);
        board.classList.add("hasBall")
    }

    addThreeBall(bgColors: string[]) {
        for (let i = 0; i < 3; i++) {
            let x: number, y: number;
            do {
                x = this.rand(0, 9)
                y = this.rand(0, 9)
            } while (document.getElementById("b" + x.toString() + y.toString()).classList.contains("hasBall"))
            this.addBall(x, y, bgColors[i])
        }
    }

    rand(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default Board;