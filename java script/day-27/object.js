// var emp={
//     fname:"Priyanka",
//     lname:"Kokkera",
//     empId:"TCS234",
//     empDesg:"software engineer",
//     empAge:56,
//     empfullname:`${this.fname}+" "+${this.lname}`
    
// }
// console.log(emp.lname)
// console.log(emp.fname)
// console.log(emp.empAge)
// console.log(emp.empfullname)


// var operation={
//     add:function(num1,num2){
//         return num1+num2;
//     },
//     sub:(num1,num2)=>{
//         return num1-num2;
//     },
//     mul:(num1,num2)=>{
//         return num1*num2;
//     },
//     div:(num1,num2)=>{
//         return num1/num2;
//     },
//     mod:function(num1,num2){
//         return num1%num2;
//     }

// }
// console.log(operation.add(8,4))
// console.log(operation.sub(8,4))
// console.log(operation.mul(8,4))
// console.log(operation.div(8,4))
// console.log(operation.mod(18,4))

// var obj={
//     1:"one",
//     2:"two",
//     "3":"three",
//     nameuser:"priyanka"
// };
// obj["4"]="uioo";
// console.log(obj["1"]);
// console.log(obj["2"]);
// console.log(obj[3]);
// console.log(obj["nameuser"]);
// console.log(obj[4]);
// console.log(obj);

// var emp=new Object();
// console.log(emp);
// emp.fname="priyanka"
// emp.lname="kokkera"
// emp.sal=4.5
// emp.fullname=function(){
//     return this.fname+" "+this.lname
// }
// console.log(emp.fullname())
// console.log(emp.fname)
// console.log(emp.lname)


function Employee(fname,lname,empid,empsal){
    this.firstname=fname;
    this.lastname=lname;
    this.employeeid=empid;
    this.employeesal=empsal;
    this.fullname=function(){
        return this.firstname+" "+this.lastname;
    }
}

// var d=new Employee("priyanka","kokkera",123,234567);
// console.log(d);

var femp=new Employee("priyanka","kokkera","tcswd3435","1cr")
console.log(femp)
console.log(femp.firstname)
console.log(femp.lastname)
console.log(femp.fullname())


// function BankAccount(owner,balance){
//     this.owner=owner;
//     this.balance=balance;
//     this.deposit=function(amount){
//         this.balance+=amount;
//         console.log(`${this.owner} deposited ${amount}₹,New Balance:${this.balance}`);
//     }
//     this.withdraw=function(amount){
//         if(amount<=this.balance){
//             this.balance-=amount;  
//         console.log(`${this.owner} withdraw ${amount}₹,New Balance:${this.balance}`);
//     }
//     else{
//         console.log(`Insufficient Balance:${this.balance}₹`)

//     }
// }
// }
// var sai=new BankAccount("sai",2000)
// console.log(sai.balance)
// sai.deposit(500000)
// console.log(sai.balance)
// sai.withdraw(50589)
