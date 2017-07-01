export default class ImageList {
    public selectedImage:any = {};
    public currentIndex = -1;

    private interval = 2000;
    private timer:NodeJS.Timer = null;
    private isPlaying:boolean = true;

    constructor(public images:any[]) {
        this.selectAtIndex(0);
    }

    moveNext = () => this.selectAtIndex( ++this.currentIndex % this.images.length );

    selectAtIndex = (i:number) => {
        this.selectedImage.isSelected = false;

        if (i < this.images.length) {
            this.currentIndex = i;
            this.selectedImage = this.images[this.currentIndex];
            this.selectedImage.isSelected = true;        
            
        } else {
            this.currentIndex = -1;
            this.selectedImage = {};
        }
    }

    selectImage = (src: string) => {
        const image = this.images.find(i => i.src == src);
        if (image) {
            clearTimeout(this.timer);
            const index = this.images.indexOf(image);
            this.selectAtIndex(index);
            this.timer = setTimeout(this.play, this.interval);
        }
    };

    removeImage = (src: string) => {
        this.images = this.images.filter(i => i.src != src);
        this.selectAtIndex(0);
    };

    play = () => {
      this.isPlaying = true;
      this.moveNext();
      this.timer = setTimeout(this.play, this.interval);
    };

    stop = () => { 
      clearTimeout(this.timer);
      this.isPlaying = false;
    }

    toggleState = () => this.isPlaying ? this.stop() : this.play();

}