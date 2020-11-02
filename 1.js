let arr=[{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}]

let filterArr=(arr,key,value)=>{
  arr=arr.filter((item)=>{
    return item.hasOwnProperty(key) && item[key]==value;
  })
  return arr;
}

console.log(filterArr(arr,'type','external'))
