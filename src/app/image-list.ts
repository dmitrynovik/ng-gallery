export default class ImageList {
    public selectedImage: any;
    public currentIndex = -1;

    private interval = 2000;
    private timer:NodeJS.Timer = null;
    private isPlaying:boolean = true;

    constructor(public images:any[]) {
        if (images && images.length) {
            this.currentIndex = 0;
            this.selectedImage = this.images[this.currentIndex];
            this.selectedImage.isSelected = true;
        }
    }

    moveNext = () => this.selectAtIndex( ++this.currentIndex % this.images.length );

    selectAtIndex = (i:number) => {
        this.currentIndex = i;
        this.selectedImage.isSelected = false;
        this.selectedImage = this.images[this.currentIndex];
        this.selectedImage.isSelected = true;        
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