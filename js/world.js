function layer(lvl, bloc, axis, pos) {
    this.lvl     = lvl;
    this.bloc    = bloc;
    this.axis    = { x: axis.x, y: axis.y };
    this.pos     = { x: pos.x, y: pos.y };
    this.blocY   = 0;
    this.blocX   = 0;
    this.canvas  = document.getElementById(this.lvl);
    this.context = this.canvas.getContext("2d");

    this.blocalc = function (axis) {
        return Math.round(axis/this.bloc/2)-2;
    }
    this.get = function () {
        this.canvas.height = Screen.height;
        this.canvas.width = Screen.width;
        this.grill();
    }
    this.grill = function() {
        this.blocY = this.blocalc(Screen.height);
        this.blocX = this.blocalc(Screen.width);
        if ( DEBUG ) { console.log(this.lvl + ": Blocs --> Y:" + this.blocY +" X:" + this.blocX); }
        axis = Screen.center();
        var axY = axis.y-this.pos.y;
        var axX = axis.x-this.pos.x;
        this.makeBloc(axX, axY, this.axis.x, this.axis.y);
        this.topY(axY, axX, this.axis.x);     
        this.botY(axY, axX, this.axis.x);
        this.leftX(axY, axX, this.axis.y);
        this.rightX(axY, axX, this.axis.y);
    }
    this.topY = function(axY, axX, X) {
        for( topy=1; topy <= this.blocY; topy++ )
        {
            axY = axY-this.bloc;
            this.makeBloc(axX, axY, X, "-"+topy);
            this.leftX(axY, axX, topy);
            this.rightX(axY, axX, topy);
        }
    }
    this.botY = function(axY, axX, X) {
        for( boty=1; boty <= this.blocY; boty++ )
        {
            axY = axY+this.bloc;
            this.makeBloc(axX, axY, X, boty);
            this.leftX(axY, axX, boty);
            this.rightX(axY, axX, boty);
        }
    }
    this.leftX = function(axY, axX, Y) {
        for( leftx=1; leftx <= this.blocX; leftx++ )
        {
            axX = axX-this.bloc;
            this.makeBloc(axX, axY, "-"+leftx, "-"+Y);
        }
    }    
    this.rightX = function(axY, axX, Y) {
        for( rightx=1; rightx <= this.blocX; rightx++ )
        {
            axX = axX+this.bloc;
            this.makeBloc(axX, axY, rightx, Y);
        }
    }
    this.makeBloc = function(posX, posY, X, Y) {
        this.context.strokeRect(posX, posY, this.bloc, this.bloc);
        this.context.fillStyle = "#000";
        this.context.fillText("Y: "+Y, posX+2, posY+10, 50);
        this.context.fillText("X: "+X, posX+2, posY+20, 50);
        this.context.fill();
    }
}

function world(player) {
    this.player       = player;
    this.world        = null;
    this.Layers       = {};
    this.canvas       = null; 
    this.addCanvas = function(position) {
        this.canvas = document.createElement("CANVAS");
        this.canvas.id = position;
        document.getElementById("world").appendChild(this.canvas); 
    }
    this.layer = function(id, size) {
        this.addCanvas(id);
        this.Layers[id] = new layer(this.canvas.id, size, this.player.axis, this.player.pos);
        this.Layers[id].get();
    }
    this.load = function() {
        this.world = {"layers":{"front": 41}}  
        for(l in this.world.layers) {
            this.layer(l, this.world.layers[l]);
        }
    }
}