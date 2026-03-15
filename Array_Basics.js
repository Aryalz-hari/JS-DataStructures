const numbers=[1,2,3,4,5]

console.log(numbers);

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(0);
console.log(numbers);

numbers.shift();
console.log(numbers)
numbers.map((item)=>{
    return item +1;
})

const newNumbers= numbers.filter((item)=>{
    return item>3;
})
console.log(newNumbers)

