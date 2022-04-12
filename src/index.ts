import Board from './Board'
import LeftPanel from './LeftPanel'

onload = () => {
    let x: Board = new Board()
    LeftPanel.init();

    // console.log(leftPanel)
    x.buildBoard()
    x.addThreeBall(LeftPanel.randomThree())
    // x.addBall(1, 5, "orange")
    // x.addBall(8, 8, "red")
}

// function rand(...args: [any]): number {
