class Agent {
    actions = ['up', 'right', 'down', 'left']

    //location (row_index, column_index)
    location = [0, 0];

    constructor(x, y) {

    }

    set_location(row_index, column_index) {
        this.location[0] = row_index;
        this.location[1] = column_index;
    }

    get_location() {
        return this.location;
    }

    print_location() {
        console.log('agent_location --> ', this.location[0], this.location[1]);
    }
}