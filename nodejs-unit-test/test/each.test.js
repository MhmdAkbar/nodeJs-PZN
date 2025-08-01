import { sum } from "../src/sum";

const table = [
    [
        [1,2],
        3
    ],
    [
        [2,3],
        5
    ],
    [
        [4,5],
        9
    ],
    [
        [3,5],
        8
    ]
];

test.each(table)("test sum(%s) should result %i ", (numbers, expected) => {
expect(sum(...numbers)).toBe(expected);
})