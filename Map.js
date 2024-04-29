const array = [
    { minSort: 12, maxSort: 30 },
    { minSort: 7, maxSort: 30 },
    { minSort: 3, maxSort: 30 },
    { minSort: 6, maxSort: 30 },
    { minSort: 22, maxSort: 30 },
];
console.log(
    array.map((ele) => {
        ele=ele.maxSort;
        return ele;
    })
);