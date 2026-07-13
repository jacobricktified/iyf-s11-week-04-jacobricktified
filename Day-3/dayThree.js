//using a loop
// function to find the largest number in an array using a loop

function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log(findLargest([12, 45, 8, 99, 23]));