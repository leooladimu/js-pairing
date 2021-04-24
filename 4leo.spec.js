const data1 = [
    [['k1', 'v1']]
];

const data2 = [
    [['name', 'Alex'], ['age', '40'],['status', 'novice']],
    [['name', 'Leo'], ['age','45'],['status', 'student']]
];

const my4leofuncs = require('./4leo');

describe('transformEmployeeData works ', () => {
    test('transform single employee data', () => {
        expect(my4leofuncs.transformEmployeeData(data1)).toEqual([{'k1':'v1'}]);
    });
    test('transform several employees\' data', () => {
        expect(my4leofuncs.transformEmployeeData(data2)).toEqual([{'name': 'Alex',
                                                                   'age': '40',
                                                                   'status': 'novice'},
                                                                  {'name': "Leo",
                                                                   'age': '45',
                                                                   'status': 'student'}]);

    });

});
