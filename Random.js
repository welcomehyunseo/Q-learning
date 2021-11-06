class Random {
    constructor() {

    }

    /*
    You must follow the form in the below example.
    you can input any objects in the element.
    const json = [
        {
            element: 100,
            probability: 0.05,
        }, {
            element: -100,
            probability: 0.3,
        }, {
            element: -1,
            probability: 0.7
        }
    ]
    */
    static random_element_usinGprobability(json) {
        const randomize = (probability) => {
            const getRandomArbitrary = (min, max) => {
                min = Math.ceil(min);
                max = Math.floor(max);
                return (Math.floor(Math.random() * (max - min + 1)) + min) / 10; //최댓값은 제외, 최솟값은 포함
            }
            //checking error
            if (probability < 0 || probability > 1) {
                console.error("The probability typed is 0 ~ 1.");
                return;
            }

            //i should work change the probability into one decimal place
            const new_probability = Math.random();
            const choose_probability = probability;
            //console.log(new_probability, choose_probability);
            return (new_probability <= choose_probability);
        }

        //debuging
        //We should debug the function called randomize,
        //and i was checking the 5 times is true in 100 times.
        /*
        let bool_true = 0;
        let bool_false = 0;
        const times = 10000;
        for (let i = 0; i < times; i++) {
            const bool = randomize(0.05);
            //console.log(bool);
            if (bool == true) bool_true++;
            else bool_false++;
        }
        console.table(bool_true, bool_false, bool_true / times);
        */

        //Sorted by probability order
        json.sort((a, b) => {
            if(a.probability > b.probability) return 1;
            else if(a.probability < b.probability) return -1;
            else return 0;
        }); 
        //console.log(json);

        const length = json.length;
        for(let i = 0; i < length; i++) {
            const probability_bool = randomize(json[i].probability);
            //console.log(probability_bool);

            if(probability_bool) return json[i].element;
        }

        const last_index = (length - 1);
        return json[last_index].element;
    }
}