class Gameplay1 extends AdventureScene {
    constructor() {
        super("gameplay1", "Watch out for slugs!");
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('bg', 'assets/background.png');
        this.load.image('player', 'assets/Pillbug.png');
        this.load.image('slug', 'assets/slug.png');
        this.load.image('snail', 'assets/snail.png');

    }


    onEnter() {
        const { width, height } = this.scale;
        const bg = this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg');
        const scale = Math.max(this.cameras.main.width / bg.width, this.cameras.main.height / bg.height);
        bg.setScale(scale).setScrollFactor(0);

        const player = this.player = this.physics.add.sprite(0, 0, 'player').setScale(1);
        player.setPosition(0 + player.displayWidth / 2, height - player.displayHeight / 2).setVelocityX(150);
        const playerNewWidth = player.displayWidth * 0.5;
        const playerOffsetX = (player.width - playerNewWidth) / 2;
        player.setBodySize(playerNewWidth, player.displayHeight);
        player.setOffset(playerOffsetX, 0);

        this.physics.world.gravity.y = 600;
        player.setCollideWorldBounds(true);
        player.body.onWorldBounds = true;
        this.input.on('pointerdown', () => {
            if (this.player.body.blocked.down || this.player.body.touching.down) {
                this.player.setVelocityY(-900);
            }
        });
        this.physics.world.on('worldbounds', (body, up, down, left, right) => {
            if (body.gameObject === this.player && right) {
                this.physics.pause();
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start('message2');
                });
            }
        });

        const slug = this.slug = this.physics.add.image(0, 0, 'slug').setScale(1);
        slug.setPosition(width - slug.displayWidth / 2, height - slug.displayHeight / 2).setVelocityX(-100);
        slug.setCollideWorldBounds(true);
        const slugNewWidth = slug.displayWidth * 0.5;
        const slugOffsetX = (slug.width - slugNewWidth) / 2;
        slug.setBodySize(slugNewWidth, slug.displayHeight);
        slug.setOffset(slugOffsetX, 0);

        const slug2 = this.slug2 = this.physics.add.image(0, 0, 'slug').setScale(1);
        slug2.setPosition(width / 2 - slug2.displayWidth / 2, height - slug2.displayHeight / 2).setVelocityX(-100);
        slug2.setCollideWorldBounds(true);
        const slug2NewWidth = slug2.displayWidth * 0.5;
        const slug2OffsetX = (slug2.width - slug2NewWidth) / 2;
        slug2.setBodySize(slug2NewWidth, slug2.displayHeight);
        slug2.setOffset(slug2OffsetX, 0);

        const fnGameover = (object1, object2) => {
            this.physics.pause();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('gameover');
            });
        };
        this.physics.add.collider(player, slug, fnGameover);
        this.physics.add.collider(player, slug2, fnGameover);
        this.physics.add.collider(slug, slug2);
    }
}

class Gameover extends AdventureScene {
    constructor() {
        super("gameover", "Start Over");
    }
    preload() {

    }

    onEnter() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Gameplay2 extends AdventureScene {
    constructor() {
        super("gameplay2", "That's good work! Watch out for snails!");
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('bg', 'assets/background.png');
        this.load.image('player', 'assets/Pillbug.png');
        this.load.image('slug', 'assets/slug.png');
        this.load.image('snail', 'assets/snail.png');
    }

    onEnter() {
        const { width, height } = this.scale;
        const bg = this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg');
        const scale = Math.max(this.cameras.main.width / bg.width, this.cameras.main.height / bg.height);
        bg.setScale(scale).setScrollFactor(0);

        const player = this.player = this.physics.add.sprite(0, 0, 'player').setScale(1);
        player.setPosition(0 + player.displayWidth / 2, height - player.displayHeight / 2).setVelocityX(190);
        const playerNewWidth = player.displayWidth * 0.5;
        const playerOffsetX = (player.width - playerNewWidth) / 2;
        player.setBodySize(playerNewWidth, player.displayHeight);
        player.setOffset(playerOffsetX, 0);

        this.physics.world.gravity.y = 600;
        player.setCollideWorldBounds(true);
        player.body.onWorldBounds = true;
        this.input.on('pointerdown', () => {
            if (this.player.body.blocked.down || this.player.body.touching.down) {
                this.player.setVelocityY(-900);
            }
        });
        this.physics.world.on('worldbounds', (body, up, down, left, right) => {
            if (body.gameObject === this.player && right) {
                this.physics.pause();
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start('message3');
                });
            }
        });

        const snail = this.snail = this.physics.add.image(0, 0, 'snail').setScale(1);
        snail.setPosition(width - snail.displayWidth / 2, height - snail.displayHeight / 2).setVelocityX(-200);
        snail.setCollideWorldBounds(true);
        const snailNewWidth = snail.displayWidth * 0.5;
        const snailOffsetX = (snail.width - snailNewWidth) / 2;
        snail.setBodySize(snailNewWidth, snail.displayHeight);
        snail.setOffset(snailOffsetX, 0);

        const snail2 = this.snail2 = this.physics.add.image(0, 0, 'snail').setScale(1);
        snail2.setPosition(width / 2 - snail2.displayWidth / 2, height - snail2.displayHeight / 2).setVelocityX(-200);
        snail2.setCollideWorldBounds(true);
        const snail2NewWidth = snail2.displayWidth * 0.5;
        const snail2OffsetX = (snail2.width - snail2NewWidth) / 2;
        snail2.setBodySize(snail2NewWidth, snail2.displayHeight);
        snail2.setOffset(snail2OffsetX, 0);

        const fnGameover = (object1, object2) => {
            this.physics.pause();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('gameover');
            });
        };
        this.physics.add.collider(player, snail, fnGameover);
        this.physics.add.collider(player, snail2, fnGameover);
        this.physics.add.collider(snail, snail2);
    }
}

class Gameplay3 extends AdventureScene {
    constructor() {
        super("gameplay3", "Good job! This is the last level!");
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('bg', 'assets/background.png');
        this.load.image('player', 'assets/Pillbug.png');
        this.load.image('slug', 'assets/slug.png');
        this.load.image('snail', 'assets/snail.png');
    }

    onEnter() {
        const { width, height } = this.scale;
        const bg = this.bg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg');
        const scale = Math.max(this.cameras.main.width / bg.width, this.cameras.main.height / bg.height);
        bg.setScale(scale).setScrollFactor(0);

        const player = this.player = this.physics.add.sprite(0, 0, 'player').setScale(1);
        player.setPosition(0 + player.displayWidth / 2, height - player.displayHeight / 2).setVelocityX(190);
        const playerNewWidth = player.displayWidth * 0.5;
        const playerOffsetX = (player.width - playerNewWidth) / 2;
        player.setBodySize(playerNewWidth, player.displayHeight);
        player.setOffset(playerOffsetX, 0);

        this.physics.world.gravity.y = 600;
        player.setCollideWorldBounds(true);
        player.body.onWorldBounds = true;
        this.input.on('pointerdown', () => {
            if (this.player.body.blocked.down || this.player.body.touching.down) {
                this.player.setVelocityY(-900);
            }
        });
        this.physics.world.on('worldbounds', (body, up, down, left, right) => {
            if (body.gameObject === this.player && right) {
                this.physics.pause();
                this.cameras.main.fadeOut(1000, 0, 0, 0);
                this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                    this.scene.start('victory');
                });
            }
        });
        const slug = this.slug = this.physics.add.image(0, 0, 'slug').setScale(1);
        slug.setPosition(width - slug.displayWidth / 2, height - slug.displayHeight / 2).setVelocityX(-100);
        slug.setCollideWorldBounds(true);
        const slugNewWidth = slug.displayWidth * 0.5;
        const slugOffsetX = (slug.width - slugNewWidth) / 2;
        slug.setBodySize(slugNewWidth, slug.displayHeight);
        slug.setOffset(slugOffsetX, 0);

        const slug2 = this.slug2 = this.physics.add.image(0, 0, 'slug').setScale(1);
        slug2.setPosition(width / 2 - slug2.displayWidth / 2, height - slug2.displayHeight / 2).setVelocityX(-100);
        slug2.setCollideWorldBounds(true);
        const slug2NewWidth = slug2.displayWidth * 0.5;
        const slug2OffsetX = (slug2.width - slug2NewWidth) / 2;
        slug2.setBodySize(slug2NewWidth, slug2.displayHeight);
        slug2.setOffset(slug2OffsetX, 0);

        const snail = this.snail = this.physics.add.image(0, 0, 'snail').setScale(1);
        snail.setPosition(width * 3 / 4 - snail.displayWidth / 2, height - snail.displayHeight / 2).setVelocityX(-200);
        snail.setCollideWorldBounds(true);
        const snailNewWidth = snail.displayWidth * 0.5;
        const snailOffsetX = (snail.width - snailNewWidth) / 2;
        snail.setBodySize(snailNewWidth, snail.displayHeight);
        snail.setOffset(snailOffsetX, 0);

        const fnGameover = (object1, object2) => {
            this.physics.pause();
            this.cameras.main.fadeOut(1000, 0, 0, 0);
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('gameover');
            });
        };
        this.physics.add.collider(player, slug, fnGameover);
        this.physics.add.collider(player, slug2, fnGameover);
        this.physics.add.collider(slug, slug2);
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

        this.add.text(width / 2, 100, "Tap to Start").setFontSize(50).setOrigin(0.5);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0, 0, 0);
            this.time.delayedCall(1000, () => this.scene.start('message1'));
        });
    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');
        this.load.image('trophy', 'assets/trophy.png');
    }
    create() {
        const { width, height } = this.scale;
        const trophy = this.trophy = this.physics.add.image(width / 2, height / 2, 'trophy').setScale(3);

        this.add.text(50, 50, "The roly poly gets a badge!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}
class Message1 extends Phaser.Scene {
    constructor() {
        super('message1');
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');

    }
    create() {
        const { width, height } = this.scale;
        this.add.text(width / 2, 100, "Watch out for slugs!").setFontSize(50).setOrigin(0.5);
        this.cameras.main.fadeOut(2000, 0, 0, 0);
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('gameplay1');
        });
    }
}

class Message2 extends Phaser.Scene {
    constructor() {
        super('message2');
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');

    }
    create() {
        const { width, height } = this.scale;
        const text1 = this.add.text(width / 2, 100, "That's good work!").setFontSize(50).setAlpha(0).setOrigin(0.5);
        const text2 = this.add.text(width / 2, 100, "Watch out for snails!").setFontSize(50).setAlpha(0).setOrigin(0.5);

        this.tweens.chain({
            tweens: [
                {
                    targets: text1,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.tweens.add({
                            targets: text1,
                            alpha: 0,
                            duration: 1000,
                            ease: 'Power2'
                        })
                    }

                },
                {
                    targets: text2,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.cameras.main.fadeOut(2000, 0, 0, 0);
                        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                            this.scene.start('gameplay2');

                        });
                    }
                }
            ]
        });
    }
}

class Message3 extends Phaser.Scene {
    constructor() {
        super('message3');
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/s6-rapid-prototyping/');

    }
    create() {
        const { width, height } = this.scale;
        const text1 = this.add.text(width / 2, 100, "Good job!").setFontSize(50).setAlpha(0).setOrigin(0.5);
        const text2 = this.add.text(width / 2, 100, "This is the last level!").setFontSize(50).setAlpha(0).setOrigin(0.5);

        this.tweens.chain({
            tweens: [
                {
                    targets: text1,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.tweens.add({
                            targets: text1,
                            alpha: 0,
                            duration: 1000,
                            ease: 'Power2'
                        })
                    }

                },
                {
                    targets: text2,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.cameras.main.fadeOut(2000, 0, 0, 0);
                        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                            this.scene.start('gameplay3');

                        });
                    }
                }
            ]
        });
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
    scene: [Intro, Gameplay1, Gameover, Gameplay2, Gameplay3, Victory, Message1, Message2, Message3],
    title: "Roly Poly: To the End",
});

