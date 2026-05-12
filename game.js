class Gameplay1 extends AdventureScene {
    constructor() {
        super("gameplay1", "Watch out for slugs!");
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('bg', 'assets/background.png');
        this.load.image('player', 'assets/Pillbug.png');
        this.load.image('slug', 'assets/slug.png');

    }

   /* update() {
        const { bg, sprite, bed, door, desk } = this;

        if (sprite && sprite.body && bg && (sprite.body.velocity.x !== 0 || sprite.body.velocity.y !== 0)) {

            if (this.exitDetected(sprite, bg)
                || this.collisionDetected(sprite, bed)
                || this.collisionDetected(sprite, desk)
                || this.collisionDetected(sprite, door)
            ) {
                sprite.body.reset(sprite.x, sprite.y);
                sprite.anims.stop();
            }
        }
    }
    collisionDetected(sprite, img) {

        const nextX = sprite.x + (sprite.body.velocity.x / 60);
        const nextY = sprite.y + (sprite.body.velocity.y / 60);

        const ghostRect = new Phaser.Geom.Rectangle(
            nextX - (sprite.displayWidth * sprite.originX),
            nextY - (sprite.displayHeight * sprite.originY),
            sprite.displayWidth,
            sprite.displayHeight
        );

        const imgBounds = img.getBounds();
        if (Phaser.Geom.Intersects.RectangleToRectangle(imgBounds, ghostRect)) {
            return true;
        }

    }

    exitDetected(sprite, img) {

        const nextX = sprite.x + (sprite.body.velocity.x / 60);
        const nextY = sprite.y + (sprite.body.velocity.y / 60);

        const ghostRect = new Phaser.Geom.Rectangle(
            nextX - (sprite.displayWidth * sprite.originX),
            nextY - (sprite.displayHeight * sprite.originY),
            sprite.displayWidth,
            sprite.displayHeight
        );

        const imgBounds = img.getBounds();

        if (Phaser.Geom.Intersects.RectangleToRectangle(ghostRect, imgBounds)) {
            const halfW = (sprite.displayWidth / 2);
            const halfH = (sprite.displayHeight / 2);

            const points = [
                { x: nextX - halfW, y: nextY },
                { x: nextX + halfW, y: nextY },
                { x: nextX, y: nextY - halfH },
                { x: nextX, y: nextY + halfH }
            ];

            let exitDetected = points.some(p => {
                const localX = (p.x - imgBounds.x) / img.scaleX;
                const localY = (p.y - imgBounds.y) / img.scaleY;
                return this.textures.getPixelAlpha(localX, localY, img.texture.key) === 0;
            });
            return exitDetected;
        }
            if (!Phaser.Geom.Rectangle.ContainsRect(imgBounds, ghostRect)) {
                return true; 
            }
    }*/


    onEnter() {
        const { width, height } = this.scale;
        const bg = this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg');
        const scale = Math.max(this.cameras.main.width / bg.width, this.cameras.main.height / bg.height);
        bg.setScale(scale).setScrollFactor(0);

        const player = this.player = this.add.image(0, 0, 'player').setScale(1);
        player.setPosition(0+player.displayWidth/2, height-player.displayHeight/2);

        const slug = this.slug = this.add.image( 0, 0, 'slug').setScale(1);
        slug.setPosition(width-slug.displayWidth/2, height-slug.displayHeight/2);



        /*  let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
              .setFontSize(this.s * 2)
              .setInteractive()
              .on('pointerover', () => this.showMessage("Metal, bent."))
              .on('pointerdown', () => {
                  this.showMessage("No touching!");
                  this.tweens.add({
                      targets: clip,
                      x: '+=' + this.s,
                      repeat: 2,
                      yoyo: true,
                      ease: 'Sine.inOut',
                      duration: 100
                  });
              });
  
          let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
              .setFontSize(this.s * 2)
              .setInteractive()
              .on('pointerover', () => {
                  this.showMessage("It's a nice key.")
              })
              .on('pointerdown', () => {
                  this.showMessage("You pick up the key.");
                  this.gainItem('key');
                  this.tweens.add({
                      targets: key,
                      y: `-=${2 * this.s}`,
                      alpha: { from: 1, to: 0 },
                      duration: 500,
                      onComplete: () => key.destroy()
                  });
              })
  
          let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
              .setFontSize(this.s * 2)
              .setInteractive()
              .on('pointerover', () => {
                  if (this.hasItem("key")) {
                      this.showMessage("You've got the key for this door.");
                  } else {
                      this.showMessage("It's locked. Can you find a key?");
                  }
              })
              .on('pointerdown', () => {
                  if (this.hasItem("key")) {
                      this.loseItem("key");
                      this.showMessage("*squeak*");
                      door.setText("🚪 unlocked door");
                      this.gotoScene('demo2');
                  }
              }) */

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    preload() {

    }

    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload() {
        this.cameras.main.setBackgroundColor("#000000");
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('start', 'assets/startingicon.png');


    }
    create() {
        const { width, height } = this.scale;
        const start = this.add.image(width / 2, height / 2, 'start');
        start.setScale(0.35);

        this.add.text(width/2, 100, "Tap to Start").setFontSize(50).setOrigin(0.5);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('gameplay1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [Intro, Gameplay1],
    title: "Roly Poly: To the End",
});

