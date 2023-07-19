const addNumbers2 = (a: number, b: number) => {
    return a + b;
};
    
    console.log("addNumbers2: ", addNumbers2(2,8));

    const addNumbers = (a: number = 1, b: number = 9) => a + b;

    console.log("addNumbers: ", addNumbers());