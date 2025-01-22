const std = @import("std");

const expect = std.testing.expect;
const print = std.debug.print;

test "while" {
    var i: u8 = 2;

    while (i < 100) {
        print("{any}\n", .{i});
        i *= 2;
    }
    print("{any}\n\n", .{i});

    try expect(i == 128);
}

test "while with continue expression" {
    var sum: u8 = 0;
    var i: u8 = 1;

    while (i <= 10) : (i += 1) {
        print("{any}\n", .{sum});
        sum += i;
    }
    print("{any}\n\n", .{sum});

    try expect(sum == 55);
}

test "while with continue" {
    var sum: u8 = 0;
    var i: u8 = 0;

    while (i <= 3) : (i += 1) {
        print("{any}\n", .{sum});
        if (i == 2) continue;
        sum += i;
    }
    print("{any}\n\n", .{sum});

    try expect(sum == 4);
}

test "while with break" {
    var sum: u8 = 0;
    var i: u8 = 0;

    while (i <= 3) : (i += 1) {
        print("{any}\n", .{sum});
        if (i == 2) break;
        sum += i;
    }
    print("{any}\n\n", .{sum});

    try expect(sum == 1);
}
