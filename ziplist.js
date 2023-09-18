const testlist1 = ['a', 'b', 'c'];
const testlist2 = [1, 2, 3];

function zipList(list1, list2) {
  const zipped = [];
  for (let i = 0; i < list1.length; i++) {
    zipped.push(list1[i], list2[i]);
  }
  return zipped;
}

console.log(zipList(testlist1, testlist2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testlist1, testlist2));
