let arr=[6,9,3,5,4]

//sorting an array using insertion sort:

function insertion_sort(arr) 

{ 
    
    for (let i = 1; i < arr.length; i++)
    { 
       let temp = arr[i]
       let j = i - 1 
   
        
        while (j >= 0 && arr[j] > temp)
        { 
            arr[j + 1] = arr[j]
            j = j - 1
        } 
        arr[j + 1] = temp
  }
    return arr
}


