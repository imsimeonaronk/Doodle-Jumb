import 'phaser'

class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    init(): void{
        this.sceneevent();
    }

    preload(): void{

    }

    create(): void{
        this.createui();
    }

    update(time: number, delta: number): void {
        
    }

    //Other functions
    private createui(): void{
        
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

export default GameScene;