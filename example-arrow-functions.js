// var names = ['Garon', 'Kurt', 'Yaw'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = name => name + '!';
//
// console.log(returnMe('Garon'));
//
// var person ={
//   name: 'Garon',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// function add(a, b) {
//   return a + b;
// }

 var addStatement = (a,b) => a+b;
 var addExpression = (a,b) => {
   return a + b;
 };

console.log(addStatement(1,3));
console.log(addExpression(9,0));
