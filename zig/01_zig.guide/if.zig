const std = @import("std");

const expect = std.testing.expect;
const print = std.debug.print;

test "if statement" {
    const a = true;
    var x: i32 = 0;

    if (a) {
        x += 1;
    } else {
        x += 2;
    }

    try expect(x == 1);
}

test "if statement expression" {
    const a = true;
    var x: i32 = 0;

    x += if (a) 1 else 2;

    try expect(x == 1);
}
