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

describe('array equality test', () => {
    test('empty arrays', () => {
        expect(my4leofuncs.arrayEqualityTest([],[],"whatever")).toBe(true);
    });
    test('different order arrays', () => {
        expect(my4leofuncs.arrayEqualityTest([2,1],[1,2],"whatever")).toBe(false);
    });
    test('same numeric', () => {
        expect(my4leofuncs.arrayEqualityTest([1,2,3],[1,2,3],"whatever")).toBe(true);
    });
    test('same chars', () => {
        expect(my4leofuncs.arrayEqualityTest(['q','w','e'],['q','w','e'],"whatever")).toBe(true);
    });
    test('same chars different case', () => {
        expect(my4leofuncs.arrayEqualityTest(["qwe"],["QWE"],"whatever")).toBe(false);
    });
    test('same objects', () => {
        expect(my4leofuncs.arrayEqualityTest([{'a':1},{'b':2}],[{'a':1},{'b':2}],"whatever")).toBe(true);
    });
});
