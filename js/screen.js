function Screen() {
    this.height = window.innerHeight;
    this.width  = window.innerWidth;
    this.get = function() {
        this.height = window.innerHeight;
        this.width  = window.innerWidth;
        if( DEBUG ) { console.log("Resize --> H:" + this.height +" W:" + this.width); }
    }
    this.center = function() {
        return { y : this.height/2, x : this.width/2 };
    }
}
var Screen = new Screen();
Screen.get();
