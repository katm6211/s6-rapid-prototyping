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
        const start = this.add.image(width / 4, height / 2, 'start');
        start.setScale(0.35);

        this.add.text(100, 300, 'Tap to Start', { fontSize: '32px' });
        this.input.on('pointerdown', function (pointer) {
            this.scene.start('Gameplay1');
        }, this);
    }
}