class Maze {
    constructor(rows, columns) {
        this.m = new Matrix(rows, columns);
        this.rows = rows;
        this.columns = columns;
        this.fill_rewards();
    }

    //create the wall for not escape the robot
    fill_rewards() {
        const reward_json = [
            {
                element: 100,
                probability: 1 / ((this.rows) * (this.columns)),
            }, {
                element: -100,
                probability: 0.2,
            }, {
                element: -1,
                probability: 0.7
            }
        ];

        let destination_number = 0;

        //If the number of destination is more than 1, it was tryed again the loop.
        do {
            //reset the value;
            destination_number = 0;

            //create random rewrads value
            this.m.map((value, row, column) => {
                let reward_value = Random.random_element_usinGprobability(reward_json);

                //If it is on the border about 0 or rows - 1 or columns - 1,
                //Giving the value -100
                if (row === 0 ||
                    row === this.rows - 1 ||
                    column === 0 ||
                    column === this.columns - 1) {
                    reward_value = -100;
                }

                //Checking the number of destination about the matrix. (value is -100)
                if (reward_value === 100) destination_number++;

                return reward_value;
            });
            //console.log(destination_number);
        } while (destination_number !== 1);

        //debug
        this.m.print();
    }

    //pass a function to map
    //the function called map is callback function.
    //and the parameter about func is current reward, row, columns.
    map(func) {
        for(let row = 0; row < this.rows; row++) {
            for(let column = 0; column < this.columns; column++) {
                const reward = this.m.get_value(row, column);
                func(reward, row, column);
            }
        }
    }
}
