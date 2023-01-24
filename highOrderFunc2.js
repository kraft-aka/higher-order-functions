const obj = [
  {item: 'Laptop',amount: 3},
  {item: 'TV',amount: 1},
  {item: 'Cell Phone',amount: 4}
]

const getItemNum = (arr)=> arr.filter(i=> i.amount >=2)
//console.log(getItem(obj))

const getItem = (arr)=> arr.map(i=> i.item);
console.log(getItem(obj))