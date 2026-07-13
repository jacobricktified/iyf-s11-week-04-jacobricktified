// using filter
// function to remove duplicates from an array using filter
function removeDuplicates(array) {
    return array.filter((item, index) => {
        return array.indexOf(item) === index;
    });
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));