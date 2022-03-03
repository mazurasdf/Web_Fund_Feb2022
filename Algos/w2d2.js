// var flavor1 = "chocolate";
// var flavor2 = "vanilla";

// var temp = flavor1;
// flavor1 = flavor2;
// flavor2 = temp;
// // [flavor1,flavor2] = [flavor2,flavor1];

// console.log(flavor1);
// console.log(flavor2);

// var start = 0;
// var end = 12;

// while(start < end){
//     console.log(`start: ${start}, end: ${end}`);
//     start += 2;
//     end -= 2;
// }

// function reverse(arr){

// }

// var someArray = [4,8,15,16,23,42];
// reverse(someArray);
// console.log(someArray);//should print out [42,23,16,15,8,4]
function reverse(arr){
    var temp =0;
    var i = 0;
    var j = arr.length-1;


    while(i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

var someArray = [4,8,15,16,23,42,98];
reverse(someArray);
console.log(someArray);//should print out [42,23,16,15,8,4]