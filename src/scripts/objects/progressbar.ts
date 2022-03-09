import Phaser from "phaser";

export class ProgressBar extends Phaser.GameObjects.Container{

    private progressbar: Phaser.GameObjects.Graphics;
    
    constructor(scene: Phaser.Scene) {
        
        super(scene);

        this.width = Number(this.scene.game.config.width);
        this.height = Number(this.scene.game.config.height);

        let pw = Math.floor(this.width * 0.8);
        let ph = Math.floor(this.height * 0.01);

        this.progressbar = scene.add.graphics();
        this.progressbar.fillStyle(0x000000, 1);
        this.progressbar.fillRoundedRect(0, 0, pw, ph, Math.floor(ph*0.5));
        this.progressbar.x = this.width * 0.5 - pw * 0.5;
        this.progressbar.y = this.height * 0.5 + 12;
        this.progressbar.scaleX = 0.01;
        this.add(this.progressbar);

        scene.add.existing(this);

    }

    public set progress(value: number){
        this.progressbar.scaleX = (value);
    }

}