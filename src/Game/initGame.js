import {insertNewNumber} from './getRandomIndex';

export function initGame()
{
    var numbers = Array(4);
    for (let i = 0; i < 4; i++) 
    {
        numbers[i] = new Array(4).fill(null);
    }
    
    // add 2 numbers
    numbers = insertNewNumber(numbers);
    numbers = insertNewNumber(numbers);
    
    return numbers;
}