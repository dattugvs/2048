export function isGameOver(arr) // 4*4 array
{
    var isGameOver = true;

    for(let i=0; i<4; i++)
    {
        for(let j=0; j<4; j++)
        {
            if(arr[i][j] === 2048)
            {
                return {
                    isWon : true,
                    isGameOver : true
                }
            }
            else if(arr[i][j] === null)
            {
                isGameOver = false;
            }
            else if(j === 3 && i<3)
            {
                if(arr[i][j] === arr[i+1][j])
                {
                    isGameOver = false;
                }
            }
            else if(j<3 && i===3)
            {
                if(arr[i][j] === arr[i][j+1])
                {
                    isGameOver = false;
                }
            }
            else if(i<3 && j<3)
            {
                if(arr[i][j] === arr[i][j+1] || arr[i][j] === arr[i+1][j] )
                {
                    isGameOver = false;
                }
            }
        }
    }

    return {
        isWon : false,
        isGameOver : isGameOver
    }
}