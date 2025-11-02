function mincost(arr)
{ 
	let finalCost = 0
	while (arr.length>1) {
		let sortedArr = sortArray(arr);

		let first = sortArray[0]
		let second = sortArray[1]

		let cost  = first + second;
		finalCost +=cost;

		sortedArr.splice(0,2)
		sortedArr.push(cost)
		arr = sortedArr
		
		
	}
  
}

function sortArray(arr) {
	for(let i=1; i<arr.length; i++){
		let j= i;
		while (j>0 &&  arr[j]< arr[j-1]) {
			let temp = arr[j]
			arr[j] = arr[j-1]
			arr[j-1] = temp
			j--
		}
	}
	return arr;	
}

module.exports=mincost;
