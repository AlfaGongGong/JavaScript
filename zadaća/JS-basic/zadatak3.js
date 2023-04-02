let s1 = "Hello World";
let s2 = "From JavaScript";
let s3 = s1 + " " + s2;

for (let i = 0; i < s3.length; i++) {
    if (i % 2 === 0) {
        document.write("<span style='color:red'>" + s3[i] + "</span>");
    } else {
        document.write("<span>" + s3[i] + "</span>");
    }
};