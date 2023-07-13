//group-2

let firstEmployee = {
    firstName : "adam",
    secondName : "dunn",
    birthDate : 1999,
    yearOfparticipate : 2021,
    departmentMembers :  ["tatum", "martin", "jermy", "susan"],

    dailyTask : function () {
        return `done`;
    },
    age : function () {
        const date = new Date().getFullYear();
        return date - this.birthDate;
    },
};

console.log(typeof(firstEmployee));
console.log(firstEmployee);
console.log(typeof(firstEmployee.birthDate));
console.log(typeof(firstEmployee.departmentMembers));
console.log(firstEmployee.departmentMembers[1])
console.log(firstEmployee.departmentMembers[1][3]);
console.log(typeof(firstEmployee.dailyTask));
console.log(firstEmployee.dailyTask());
console.log(firstEmployee.age());
