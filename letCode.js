// var getMaximumGold = function (grid) {
//     let qizil = 0
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid[i].length; j++) {
//             if (grid[i][j] !== 0) {
//                 qizil += grid[i][j]
//                 console.log(qizil);
//             }
//         }
//     }
//     console.log(qizil); 
// };

// getMaximumGold([[0,6,0],[5,8,7],[0,9,0]])

var twoSum = function (nums, target) {
    let eded = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && i > j) console.log([j, i])
        }
    }
}

twoSum([2, 7, 11, 15], 9)