let response = await fetch('https://jsonplaceholder.typicode.com/users');
const myObj = await response.json();
const FullName = [];
for(let i = 0; myObj.length; i++){
const Arr = myObj[i].name.split(' ')}
if(arr[0] === 'Mrs.' || a[0]==='Mr'){
 FullName.push({ FirstName : arr[1], LastName: arr[2]})}
 else {
 FullName.push({ FirstName : arr[0], LastName: arr[1]})
 }