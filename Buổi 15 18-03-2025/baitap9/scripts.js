let a= prompt("nhập a: ")
let b= prompt("nhập b: ")
let c= prompt("nhập c: ")
let delta = b * b - 4 * a * c;
if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.writeln("Phương trình có hai nghiệm phân biệt:");
    document.writeln("x1 = " + x1);
    document.writeln("x2 = " + x2);
} else if (delta == 0) {
    x = -b / (2 * a);
    document.writeln("Phương trình có nghiệm kép: x = " + x);
} else {
    document.writeln("Phương trình không có nghiệm thực.");
}