function player() {
    this.name    = null;
    this.world   = null;
    this.layer   = null;
    this.axis    = {x: 0, y: 0};
    this.pos     = {x: 0, y: 0};
    this.canvas  = null;
    this.context = null;

    this.load = function() {
        this.world = "BloodWorld";
        this.layer = "front";
        this.axis.x = 28;        
        this.axis.y = 48;
        this.pos.x = 5;        
        this.pos.y = 12;

    }
    this.wakeup = function() {
        this.canvas = document.getElementById(this.layer);
        this.context = this.canvas.getContext("2d");
        this.context.fillStyle="red";
        axis = Screen.center();
        this.context.arc(axis.x,axis.y, 5, 0,Math.PI*2,true);
        this.context.closePath();
        this.context.fill();
    }
}




// this.canvas = document.getElementById(this.world + "-" + this.layer);
// this.context = this.canvas.getContext("2d");
// this.context.fillStyle="red";