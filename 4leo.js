exports.transformEmployeeData = function(employeeData) {
    pairsToObj = function(pairs) {
        var obj = {};
        pairs.forEach(pair =>
            {
                key = pair[0];
                val = pair[1];
                obj[key] = val;
            });
        return obj;
    };
    return employeeData.map(arr => {
        return pairsToObj(arr);
    });
};

exports.arrayEqualityTest = function(expected, actual, msg) {
    if (actual.length != expected.length)
        return false;
    for (i = 0; i < expected.length; i++) {
        if (expected[i] !== actual[i]) return false;
    }
    return true;
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  var arr = [];
  // creates an object for each string in the input array, with an age of 10 or 11
  for (var i = 0; i < classList.length; i++) {
    const vName = classList[i];
    const vAge = getRandomIntInclusive(10, 11);
    arr.push({name : vName, age : vAge});
  }
  // console.log(arr);
  return arr;
  
  // returns an array of these objects
}
