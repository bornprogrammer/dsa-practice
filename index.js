let checkEvenAndOdd = () => {
    return new Promise((resolve, reject) => {
        const randomValue = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        if ((randomValue % 2) === 0) {
            resolve({ name: "sandeep", randomValue });
        } else {
            reject({ name: "error", randomValue });
        }
    });
}

const myObjct = { name: "sandeep", "age": 25 };

const { name: myName } = myObjct;

console.log(myName);

const sandeep = () => ({ aaa: "sandeep" });
console.log(sandeep());

// setInterval(() => {
//     checkEvenAndOdd().then((data) => {
//         console.log(data);
//     }).catch((error) => {
//         console.log(error);
//     });
// }, 3000);

let readFile = () => {
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', "http://localhost:3003/about");
        req.onload = function () {
            if (req.status == 201) {
                resolve(req.response);
            } else {
                reject("File not Found");
            }
        };
        req.send();
    });
}

readFile().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("some error");
})