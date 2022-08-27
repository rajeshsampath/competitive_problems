// function twoNumberSumS1(array, targetSum){
//     for(let i=0; i<array.length-1; i++){
//         for(let j=i+1; j<array.length-1; j++){
//             if(array[i]+array[j] === targetSum){
//                 return [array[i], array[j]]
//             }
//         }
//     }
//     return []
// }

const array = [4,6]
const targetSum = 10

// console.log(twoNumberSumS1(array, targetSum))


function twoNumberSumS2(array, targetSum){
    const nums = {} //?
    for(let i=0; i<array.length; i++){
        let potentialMatch = targetSum - array[i];
        if(nums.hasOwnProperty(potentialMatch)){ //? 
            return [potentialMatch, array[i]]
        }else{
            nums[array[i]] = true;
        }
    }
    return []
}

console.log(twoNumberSumS2(array,targetSum))