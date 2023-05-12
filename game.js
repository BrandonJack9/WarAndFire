class campsite extends AdventureScene {
    constructor() {
        super("campsite" , "CAMP");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('sword', 'sword.png');
        this.load.image('matches', 'matches.png');
        this.load.image('sign', 'sign.png');
    }
    

    onEnter() {

        let updated = false;

        let campbg = this.add.image(10,0,'campbg').setOrigin(0,0);
        campbg.setScale(.57);

        this.sword = this.add.image(
            700,
            900,
            'sword',
        )

    
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("A sword")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up a sword.");
            this.gainItem('Sword');
            this.tweens.add({
                targets: this.sword,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: -1 },
                duration: 500,
                onComplete: () => this.sword.destroy()
            });
        })


        this.matches = this.add.image(
            1000,
            850,
            'matches',
        )
        
        //matches.setScale(.5);

        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("A box of matches")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the matches.");
            this.gainItem('Matches');
            this.tweens.add({
                targets: this.matches,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: -1 },
                duration: 500,
                onComplete: () => this.matches.destroy()
            });
        })

        this.sign1 = this.add.image(
            400,
            570,
            'sign',
        )
        this.sign1.setScale(1.5) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Go to the forest")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('forest');
    
        })

    }
}

class forest extends AdventureScene {
    constructor() {
        super("forest", "You are in the thick of a redwood forest");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('forest', 'ogre_forest.png');
        this.load.image('ogre', 'ogre.png');
        this.load.image('firepit', 'fire_pit.png');

    }

    onEnter() {
        let forest = this.add.image(10,0,'forest').setOrigin(0,0);
        forest.setScale(.57);

        this.ogre = this.add.image(
            800,
            400,
            'ogre',
        )
        
        this.ogre.setScale(2) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Attack the ogre with your sword!")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('death');
    
        })

        this.firepit = this.add.image(
            800,
            900,
            'firepit',
        )
        
        this.firepit.setScale(1.5) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("light the fire with your matches")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('happy ogre');
    
        })


    }
}

class death extends Phaser.Scene {
    constructor() {
        super('death');
    }
    create() {
        this.add.text(50, 50, "You Died!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('campsite'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload(){
        this.load.image('campbg', './assets/campsite.png')
    }

    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('campsite'));
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
        this.input.on('pointerdown', () => this.scene.start('campsite'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, campsite, forest, death, Outro],
    title: "Adventure Game",
});

