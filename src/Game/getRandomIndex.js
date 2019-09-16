export function insertNewNumber(arr) // 4*4 array 
{
    var emptyIndices = [];
    for(let i=0; i<4; i++)
    {
        for(let j=0; j<4; j++)
        {

            if(arr[i][j] === null)
            {
                emptyIndices.push((4*i)+j);
            }
        }
    }

    if(emptyIndices.length === 0)
    {
        return arr;
    }

    var gameNumbers = [2,4];
    
    var randomNumber = gameNumbers[getRandomIndex([2,4])]; // either 2 or 4
    var randomIndex = emptyIndices[getRandomIndex(emptyIndices)]; // index in 4*4 grid

    // if(randomIndex === null || randomIndex === undefined)
    // {
    //     return arr;
    // }

    arr[Math.floor(randomIndex/4)][randomIndex%4] = randomNumber; // update grid
    return arr;
}

function getRandomIndex(arr)
{
    if(arr.length === 0)
    {
        return null;
    }
        
    var min = 0;
    var max = arr.length-1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}