import 'phaser'
import { ProgressBar } from '../objects/progressbar';

class PreloadScene extends Phaser.Scene{

    private progressBar: ProgressBar;

    constructor(){
        super({
            key: 'PreloadScene'
        })
    }

    init(): void{
        this.sceneevent();
        this.createui();
        this.preloadlistener();
    }

    preload(): void{

        this.load.atlas('game', './assets/sprites/game.png', './assets/sprites/game.json')

    }

    create(): void{

    }

    update(time: number, delta: number): void {
        
    }

    //Other functions
    private createui(): void{
        this.progressBar = new ProgressBar(this);
    }

    //Preload listener
    private preloadlistener(): void{

        this.load.on(Phaser.Loader.Events.PROGRESS, (value: number)=>{
            this.progressBar.progress = value;
        });
                    
        this.load.on(Phaser.Loader.Events.FILE_PROGRESS, (file: any)=>{

        });

        this.load.on(Phaser.Loader.Events.FILE_LOAD_ERROR, (file: any)=>{

        });

        this.load.on(Phaser.Loader.Events.COMPLETE, ()=>{
            this.scene.stop('PreloadScene')
            this.scene.stop('GameScene')
        });

    }

    //Scene events
    private sceneclear(): void{
        /* Scene Clear */
        this.time.removeAllEvents();
    }

    private scenepause(): void{
        /* Scene Pause */
        this.sound.pauseAll();
    }

    private sceneresume(): void{
        /* Scene Resume */
        this.sound.resumeAll();
    }

    private sceneevent(): void{

        this.events.on(Phaser.Scenes.Events.SHUTDOWN, ()=>{
            this.sceneclear();
        });

        this.events.on(Phaser.Scenes.Events.PAUSE, ()=>{
            this.scenepause();
        });

        this.events.on(Phaser.Scenes.Events.RESUME, ()=>{
            this.sceneresume();
        });

    }
}

export default PreloadScene;