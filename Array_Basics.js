const numbers=[1,2,3,4,5]

console.log(numbers);
//push
numbers.push(6);
console.log(numbers);
//pop
numbers.pop();
console.log(numbers);
//unshift
numbers.unshift(0);
console.log(numbers);
//shift
numbers.shift();
console.log(numbers)
//map
numbers.map((item)=>{
    return item +1;
})
//filter
const newNumbers= numbers.filter((item)=>{
    return item>3;
})
console.log(newNumbers)
//reduce
const sum = numbers.reduce((prev,item)=>{
    return prev+item; // here it firat add initailized prev with first item and stored in prev then iterated for other items 
},4) // 4 is used to initailaize the prev variable
console.log(sum);

//some
const condition = numbers.some((item)=>{
    return item >2;
})
console.log(condition);

//every
const res= numbers.every((item)=>{
    return item>2
})
console.log(res);

//find
const result= numbers.find((item)=>{
    return item>3//return the first item greater than 3
})
console.log(result);

//spread and rest operators 
const nums1=[1,2,3];
const nums2=[4,5,6];

const finalNums=[...nums1,...nums2];
console.log('Combined Array',finalNums);

function summation(...numbers){ //rest operator
    return numbers;
}
console.log(summation(nums1,nums2));
//slice 
const slices= numbers.slice(0,2);
console.log('Sliced array',slices);
//splice
const items=['Mango','Orange','Banana'];
console.log(items, "as items");
 items.splice(0,2,'Jackfruit');
console.log(items,'splices');

//fill
const dummy=[2,3,1,4];
dummy.fill(0,1,3);
console.log(dummy,'dummy');
//findindex
const index= dummy.findIndex(3);
console.log('index of 2', index);




