var numbers = [3, 4, -2, 7, 16, -8, 0];

// RIOT WALK
// R read/restate
// I input - an array of ints
// O output - an int that equals the number of inputs that meet the qualifier
// the number of positive ints
// T talk 
// WALK 


function countPositivesInArray(arrParam){
    // create var for count
    var countPositives = 0;
    // loop through array
    for(var i=0; i<arrParam.length;i++) {
        if (arrParam[i]>0) {
            countPositives++;
        }
    }

    // compare element to zero
    
    // if greater than zero inc count

    // log the number of positives
    console.log("there are " + countPositives + " positive values");

}
countPositivesInArray(numbers)