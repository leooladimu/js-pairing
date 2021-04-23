var data = [
    [['key11', 'value11'], ['key12','value12'],['key13', 'value13']],
    [['key21', 'value21'], ['key22','value22'],['key23', 'value23']],
    [['key31', 'value31'], ['key32','value32'],['key33', 'value33']]
];

exports.data = data;

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
