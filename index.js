const drawing = new Drawing();
const maze = new Maze(10, 10);


maze.map((reward, row, column) => {
    const row_size = drawing.canvas.width / maze.rows;
    const column_size = drawing.canvas.height / maze.columns
    const left_top = [row_size * row, column_size * column];
    
    if(reward === -1) {
        drawing.draw_strokeRect(left_top[0], left_top[1], row_size, column_size);
    } else if(reward === -100) {
        drawing.draw_fillRect(left_top[0], left_top[1], row_size, column_size, "#000000");
    } else if(reward === 100) {
        drawing.draw_fillRect(left_top[0], left_top[1], row_size, column_size, "#00FF00");
    }
    
})
