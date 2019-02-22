var x = +prompt("введите длину по Х");
var y = +prompt("введите длину по Y");


function table(x, y) {
    for (var a=1; a <= x; a++) {
        for (var b=1; b <= y; b++) {
            console.log(a + "*" + b + "=" + (a*b));
        };
    };
}
table(x, y)



