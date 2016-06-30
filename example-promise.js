// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Boston', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }
//
// getTempPromise('Boston').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('Error', err);
// });
//

function addPromise(a,b) {
  return new Promise(function(resolve, reject) {
    if (typeof a ==='number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Both values need to be a number!');
    }
  });
}

addPromise(5,'6').then(function (sum) {
  console.log(sum);
},function (err) {
  console.log(err);
});
