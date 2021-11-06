class Environment {
    // -100: the storing items, -1: aisle, 100: packaging area
    rewards = [
        [-100, -100, -100, -100, -100, 100, -100, -100, -100, -100, -100],
        [-100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -100],
        [-100, -1, -100, -100, -100, -100, -100, -1, -100, -1, -100],
        [-100, -1, -1, -1, -1, -1, -1, -1, -100, -1, -100],
        [-100, -100, -100, -1, -100, -100, -100, -1, -100, -100, -100],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-100, -100, -100, -100, -100, -1, -100, -100, -100, -100, -100],
        [-100, -1, -1, -1, -1, -1, -1, -1, -1, -1, -100],
        [-100, -100, -100, -1, -100, -100, -100, -1, -100, -100, -100],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [-100, -100, -100, -100, -100, -100, -100, -100, -100, -100, -100]
    ];
    q_table = [];

    environment_rows = 11; environment_columns = 11;

    constructor() {
        this.reset_table();
    }

    is_terminal_state(current_row_index, current_column_index) {
        if(this.rewards[current_row_index][current_column_index] == -100) return true;
        return false;
    }

    //it is randomly
    get_starting_location(agent) {
        var current_row_index = agent.get_location()[0]; 
        var current_column_index = agent.get_location()[1];
        /*
        do {
            
        } while(this.is_terminal_state(current_row_index, current_column_index));
        */
        current_row_index = 1;
    }

    reset_table() {
        this.q_table = new Array(this.environment_rows);
        for(row in this.q_table) {
            row = new Array(this.environment_columns);
            for(index in row) index = [0, 0, 0, 0];
        }
    }
}