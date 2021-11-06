class Drawing {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        
    }
    
    draw_strokeRect(x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.strokeRect(x1, y1, x2, y2);
    }

    draw_fillRect(x1, y1, x2, y2, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x1, y1, x2, y2);
    }

    //drawing the line to line... It is not limited.
    draw_path(paths) {

    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
    }
}