

const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox("box", {});

    return scene;
}

class Q_Matrix {  //Q values matrix is 3d array
    constructor(row, col, fill_value) {
        this.row = row;
        this.col = col;
        this.fill_value = fill_value;
        this.matrix = this.createMatrix();
    }

    createMatrix() {
        var matrix = new Array(this.row);

        for (var i = 0; i < this.row; i++) {
            matrix[i] = new Array(this.col);
            for (var j = 0; j < this.col; j++) {
                matrix[i][j] = new Array(4);
                for (var k = 0; k < 4; k++) {
                    matrix[i][j][k] = this.fill_value;
                }
            }
        }
        return matrix;
    }

    print() {
        console.log(this.matrix);
    }
}

class E_Matrix {  //environment matrix is 2d array
    r_map = [  //this is reward_map
        [-100, -100, -100, -100, -100, 100, -100, -100, -100, -100, -100],
        [-100,   -1,   -1,   -1,   -1,  -1,   -1,   -1,   -1,   -1, -100],
        [-100,   -1, -100, -100, -100, -100, -100,   -1, -100,   -1, -100],
        [-100,   -1,   -1,   -1,   -1,   -1,   -1,   -1, -100,   -1, -100],
        [-100, -100, -100, -1, -100, -100, -100,   -1, -100, -100, -100],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-100, -100, -100, -100, -100,   -1, -100, -100, -100, -100, -100],
        [-100,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, -100],
        [-100, -100, -100,   -1, -100, -100, -100,   -1, -100, -100, -100],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100]
    ];

    constructor() {
        this.e_rows = this.r_map[1].length;
        this.e_cols = this.r_map.length;
    }

    print_shape() {
        console.log(this.e_rows +' x ' + this.e_cols);
    }

    getRows() {
        return this.e_rows;
    }

    getCols() {
        return this.e_cols;
    }

    is_teminal_state() {
        if(r_map[this.current_row_i, this.current_col_i] == -1) return false;
        return true;
    }

    get_starting_location() {
        this.current_row_i = Math.floor(Math.random() * 11);
        this.current_col_i = Math.floor(Math.random() * 11);

        while(is_teminal_state()) {
            this.current_row_i = Math.floor(Math.random() * 11);
            this.current_col_i = Math.floor(Math.random() * 11);
        }
    }

    get_next_location(action_index);
}

class Agent {
    action = ['up', 'right', 'down', 'left'];

    constructor(current_row_i, current_col_i) {
        this.E = new E_Matrix();
        //this.E.print_shape();
        this.current_row_i = current_row_i;
        this.current_col_i = current_col_i;
    }
}

class Q_Learning {
    constructor(e_rows, e_cols) {
        this.e_rows = e_rows;
        this.e_cols = e_cols;
        this.init();
    }

    init() {
        
        this.Q = new Q_Matrix(
            11, 11, 0
        );
        //this.Q.print();
    }
}


q_learning = new Q_Learning();