//Câu 1
console.log("Câu 1:");
var x=5;
var y=3;
console.log("x + y = ",x+y);
console.log("x - y = ",x-y);
console.log("x * y = ",x*y);
console.log("x / y = ",x/y);
console.log("x % y = ",x%y);
console.log("x ** y = ",x**y);
console.log("++x = ",++x);
console.log("x++ = ",x++);
console.log("x = ",x);
console.log("--x = ",--x);
console.log("x-- = ",x--);
console.log("x = ",x);
//Câu 2
console.log("Câu 2:");
console.log(2==2);
console.log(2=='2');
console.log(3!=2);
console.log('hello'!='Hello');
console.log(2===2);
console.log(2=='2');
console.log(2!=='2');
console.log(2!==2);
//Câu 3
console.log("Câu 3:");
console.log(true&&true);
console.log(true&&false);
console.log(true||false);
console.log(!true);
//Câu 4
console.log("hello "+"world ");
var a="Javascript";
a+=" tutorial";
console.log(a);
//Câu 5
var values1="one";
var values2="two";
console.log(values1);
console.log(values2);
var values3=values1;
values1=values2;
values2=values3;
console.log(values1);
console.log(values2);
//Câu 6
//Diện tích hình vuông nội tiếp hình tròn=(2*r)**2
//Diện tích hình vuông ngoại tiếp hình tròn=(1/2*r*2r)**2
//S=4r**2-2r**2=2r**2
function dienTichHV(r){
   var S=2*r**2;
   return S; 
}
var s1=dienTichHV(5);
console.log(s1);
var s2=dienTichHV(6);
console.log(s2);
var s3=dienTichHV(7);
console.log(s3);
//Câu 7
function Check(string){
    const checkString=string.split("").reverse().join("");
    console.log(checkString);
    return string===checkString;
}
console.log(Check("rotavator"));
console.log(Check("hello"));
//Câu 8
console.log(typeof "Le Van A");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Le Van A", age: 18, country: "Viet Nam" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
//Câu 9
var img = "https://cdn.daca.vn/media/blog/lap-trinh/js%20tips%20-%20m%E1%BB%99t%20s%E1%BB%91%20c%C3%A1ch%20vi%E1%BA%BFt%20js%20ng%E1%BA%AFn%20g%E1%BB%8Dn%20h%C6%A1n.png";
var title = "JS TIPS - Một số cách viết JS ngắn gọn hơn";
var desc = "Hôm nay Daca.vn gửi tới các bạn một số những tips để giúp bạn code JS một cách hiệu quả...";
var url = "https://daca.vn/js-tips-mot-so-cach-viet-js-ngan-gon-hon";

var string = `
  <div class="article">
    <a href="${url}">
    <div class="inner-image">
      <img src="${img}" />
    </div>
    <div class="inner-content">
      <h2 class="inner-title">${title}</h2>
      <p class="inner-desc">${desc}</p>
    </div>
    </a>
  </div>
`;

console.log(string);