import { LEFT, RIGHT, UP } from "../constants/directions";

export function makeMove(arr, direction) { // 4*4 array
    var totalScore = 0;
    if(direction === LEFT)
    {
        for(let i=0; i<4; i++)
        {
            let move = sumPairs(arr[i]);
            arr[i] = move.nums;
            totalScore += move.scoreCount;
        }
    }
    else if(direction === RIGHT)
    {
        for(let i=0; i<4; i++)
        {
            let temp = Array(4);
            for(let j=3,k=0; j>=0 ; j--,k++)
            {
                temp[k] = arr[i][j];
            }

            let move = sumPairs(temp);
            temp = move.nums;
            totalScore += move.scoreCount;

            for(let k=0, j=3; k<4; k++,j--)
            {
                arr[i][j] = temp[k];
            }
            
        }
    }
    else if(direction === UP)
    {
        for(let j=0; j<4; j++)
        {
            let temp = Array(4);
            for(let i=0; i<4; i++)
            {
                temp[i] = arr[i][j];
            }

            let move = sumPairs(temp);
            temp = move.nums;
            totalScore += move.scoreCount;

            for(let i=0; i<4; i++)
            {
                arr[i][j] = temp[i];
            }
        }
    }
    else
    {
        for(let j=0; j<4; j++)
        {
            let temp = Array(4);
            for(let i=3, k=0; i>=0; i--, k++)
            {
                temp[k] = arr[i][j];
            }
            
            let move = sumPairs(temp);
            temp = move.nums;
            totalScore += move.scoreCount;

            for(let k=0,i=3; k<4; k++,i--)
            {
                arr[i][j] = temp[k];
            }
        }   
    }
    
    return {
        nums :arr,
        totalScore : totalScore
    }
}

function sumPairs(a)
{
    var j=null;
    var score = 0;
    for(var i=0; i<4; i++)
    {
        if(a[i] === null)
            continue;
      
        if(j === null)
        {
            j = i;
        }
        else
        {
            if(a[i] === a[j])
            {
                a[j] = 2*a[i];
                score = score + 2*a[i];
                a[i] = null;
                j = null
            }
            else
            {
                j =i;
            }
        }
    }
    return {
        scoreCount : score,
        nums :  shiftNulls(a)
    }
}


function shiftNulls(nums)
{
    var i, temp;

    for (i = nums.length-1; i>=0; i--)
    {
        if(nums[i] === null) 
        {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
    return nums;
}