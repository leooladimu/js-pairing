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
