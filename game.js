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
                
                this.gotoScene('happyogre');
    
        })


    }
}

class happyogre extends AdventureScene {
    constructor() {
        super("happyogre", "Congrats on not dying!");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('forest', 'ogre_forest.png');
        this.load.image('happyogre', 'happyogre.png');
        this.load.image('litfirepit', 'lit_fire_pit.png');
        this.load.image('leftarrow', 'left_arrow.png');
        this.load.image('rightarrow', 'right_arrow.png');


    }

    onEnter() {
        let forest = this.add.image(10,0,'forest').setOrigin(0,0);
        forest.setScale(.57);

        this.ogre = this.add.image(
            800,
            400,
            'happyogre',
        )
        
        this.ogre.setScale(2) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("A happy, friendly guy!")

        })
        

        this.firepit = this.add.image(
            800,
            900,
            'litfirepit',
        )
        
        this.firepit.setScale(1.5) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("a warm, comforting fire")

        })
        
        this.signl = this.add.image(
            300,
            900,
            'leftarrow',
        )
        this.signl.setScale(.8) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Go to the beach")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('beach');
    
        })


    }
}

class beach extends AdventureScene {
    constructor() {
        super("beach", "You are at the beach");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('beach', 'beach.png');
        this.load.image('beachguy', 'beachguy.png');
        this.load.image('torch', 'torch.png');

    }

    onEnter() {
        let beach = this.add.image(10,0,'beach').setOrigin(0,0);
        beach.setScale(.57);

        this.beachguy = this.add.image(
            800,
            400,
            'beachguy',
        )
        
        this.beachguy.setScale(2) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Attack the douchebag!")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('death');
    
        })

        


        //buddies start here
        this.beachguy = this.add.image(
            200,
            800,
            'beachguy',
        )
        
        this.beachguy.setScale(.6) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Attack the douchebag!")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('death');
    
        })

        this.beachguy = this.add.image(
            400,
            550,
            'beachguy',
        )
        
        //this.beachguy.setScale() //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Attack the douchebag!")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('death');
    
        })

        this.beachguy = this.add.image(
            1200,
            400,
            'beachguy',
        )
        
        this.beachguy.setScale(1.5) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Attack the douchebag!")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('death');
    
        })

        //buddies end here


        this.torch = this.add.image(
            600,
            900,
            'torch',
        )
        
        this.torch.setScale(.8) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("light the torch with your matches")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('beachvibes');
    
        })

        this.torch = this.add.image(
            1000,
            900,
            'torch',
        )
        
        this.torch.setScale(.8) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("light the torch with your matches")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('beachvibes');
    
        })


    }
}

class beachvibes extends AdventureScene {
    constructor() {
        super("beachvibes", "You are at a beach party!");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('beach', 'beach.png');
        this.load.image('happybeachguy', 'happybeachguy.png');
        this.load.image('littorch', 'littorch.png');
        this.load.image('key', 'key.png');

    }

    onEnter() {
        let beach = this.add.image(10,0,'beach').setOrigin(0,0);
        beach.setScale(.57);



        this.key = this.add.image(
            800,
            800,
            'key',
        )

        this.key.setScale(.75)

    
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("A key")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up a key.");
            this.gainItem('key');
            this.tweens.add({
                targets: this.key,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: -1 },
                duration: 500,
                onComplete: () => this.key.destroy()
            });
        })

        var happybeachguy = this.add.image(
            800,
            400,
            'happybeachguy',
            0
        );

        happybeachguy.setScale(2);

        var tween = this.tweens.add({
            targets: happybeachguy,
            props: {
                x: { value: 1300, duration: 4000, flipX: true },
                y: { value: 500, duration: 8000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            paused: true
        });
    
        tween.play(); 

        var happybeachguy = this.add.image(
            1200,
            400,
            'happybeachguy',
            0
        );

        happybeachguy.setScale(1.5);

        var tween = this.tweens.add({
            targets: happybeachguy,
            props: {
                x: { value: 1300, duration: 2000, flipX: true },
                y: { value: 700, duration: 4000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            paused: true
        });
    
        tween.play();

        var happybeachguy = this.add.image(
            200,
            800,
            'happybeachguy',
            0
        );

        happybeachguy.setScale(.6);

        var tween = this.tweens.add({
            targets: happybeachguy,
            props: {
                x: { value: 1300, duration: 2000, flipX: true },
                y: { value: 700, duration: 4000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            paused: true
        });
    
        tween.play();

        var happybeachguy = this.add.image(
            400,
            550,
            'happybeachguy',
            0
        );

        //happybeachguy.setScale(1.5);

        var tween = this.tweens.add({
            targets: happybeachguy,
            props: {
                x: { value: 900, duration: 3000, flipX: true },
                y: { value: 800, duration: 4000,  },
            },
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            paused: true
        });
    
        tween.play();
        
        this.torch = this.add.image(
            600,
            900,
            'littorch',
        )
        
        this.torch.setScale(.8) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("A warm, festive decoration")

        })
       

        this.torch = this.add.image(
            1000,
            900,
            'littorch',
        )
        
        this.torch.setScale(.8) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("A warm, festive decoration")

        })
        
        this.signl = this.add.image(
            300,
            900,
            'leftarrow',
        )
        this.signl.setScale(.8) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("Go to the lighthouse")

        })
        .on('pointerdown', () => {
                
                this.gotoScene('lighthouse1');
    
        })
        

    }
}

class lighthouse1 extends AdventureScene{
    constructor() {
        super("lighthouse1", "You are at the lighthouse");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('lighthouse1', 'lighthouse1.png');
        this.load.image('door', 'door.png');

    }

    onEnter() {
        let lighthouse = this.add.image(10,0,'lighthouse1').setOrigin(0,0);
        lighthouse.setScale(.57);

        this.door = this.add.image(
            700,
            600,
            'door',
        )
        
        this.door.setScale(5) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("A locked door")

        })
        .on('pointerdown', () => {
                
            this.gotoScene('lighthouse2');

    })

    }
}

class lighthouse2 extends AdventureScene{
    constructor() {
        super("lighthouse2", "A redneck answers the door");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('lighthouse2', 'lighthouse2.png');
        

    }

    onEnter() {
        let lighthouse = this.add.image(10,0,'lighthouse2').setOrigin(0,0);
        lighthouse.setScale(.57);

        /*this.door = this.add.image(
            700,
            600,
            'door',
        )
        
        this.door.setScale(5) //resize
        
        .setInteractive()
        
        .on('pointerover', () => {
           this.showMessage("A locked door")

        })
        .on('pointerdown', () => {
                
            this.gotoScene('lighthouse2');

    })*/

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
    scene: [Intro, campsite, forest, death, happyogre, beach, beachvibes, lighthouse1, lighthouse2, Outro],
    title: "Adventure Game",
});

