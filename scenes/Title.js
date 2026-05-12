class Title extends Phaser.Scene {
    constructor() {
        super({ key: "Title" });
    }
    preload() {
        this.cameras.main.setBackgroundColor("#000000");
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('start', 'assets/startingicon.png');


    }

    create() {
        const { width, height } = this.scale;
        this.add.text(250, 300, 'Press Any Key or Click to Start', { fill: '#fff' });
        const startGame = () => {
            this.input.keyboard.off('keydown', startGame);
            this.input.off('pointerdown', startGame);
            this.scene.start('TitleScene');
        };
        this.input.keyboard.on('keydown', startGame);
        this.input.on('pointerdown', startGame);

    }
}