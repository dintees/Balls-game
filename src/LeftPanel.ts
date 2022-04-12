class LeftPanel {
    static currentThree: string[] = [];
    static colors: string[] = ["red", "green", "blue", "orange", "yellow", "pink", "black"]
    constructor() {

    }

    static init() {
        for (let i = 0; i < 3; i++) {
            this.currentThree.push(this.colors[this.rand(0, 7)])
        }
        this.addThreeBallToLeftPanel();
    }

    static createBall(bgColor: string) {
        let d: HTMLElement = document.createElement("div")
        d.className = "ball"
        d.style.cssFloat = "left"
        d.style.marginLeft = "5px"
        d.style.background = bgColor
        return d
    }

    static addThreeBallToLeftPanel() {
        let balls = document.getElementById("balls")
        let colors: string[] = []
        for (let i = 0; i < 3; i++) {
            let col = this.colors[this.rand(0, 7)];
            balls.appendChild(this.createBall(col));
            colors.push(col)
        }
        this.currentThree = colors
    }

    static randomThree() {
        let colors: string[] = []
        for (let i = 0; i < 3; i++) {
            let col = this.colors[this.rand(0, 7)];
            colors.push(col)
        }
        return colors;
    }

    static replaceLeftBalls() {
        document.getElementById("balls").innerHTML = '';
        this.addThreeBallToLeftPanel();
    }

    static rand(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export default LeftPanel