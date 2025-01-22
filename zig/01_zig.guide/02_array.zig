const std = @import("std");

const print = std.debug.print;

test "fixed-size array" {
    const numbers = [5]i32{ 1, 2, 3, 4, 5 };

    print("{any}\n\n", .{numbers});
}

test "array with inferred size" {
    const inferred = [_]i32{ 1, 2, 3 };

    print("{any}\n\n", .{inferred});
}

test "multi-dimensional array" {
    const matrix = [2][3]i32{ [_]i32{ 1, 2, 3 }, [_]i32{ 4, 5, 6 } };

    print("{any}\n\n", .{matrix});
}

test "array operations" {
    const numbers = [5]i32{ 1, 2, 3, 4, 5 };

    var mutable = [5]i32{ 6, 7, 8, 9, 10 };

    const first = numbers[0];

    mutable[0] = first;

    const len = numbers.len;

    // numbers[3] = 100; // error: can't change constant

    print("numbers: {any}\nmutable: {any}\nfirst: {any}\nlen: {any}\n\n", .{ numbers, mutable, first, len });
}

test "slicing" {
    const numbers = [5]i32{ 1, 2, 3, 4, 5 };

    const slice = numbers[1..3];

    print("{any}\n\n", .{slice});
}

test "array concatenation" {
    const a = [_]i32{ 1, 2 };
    const b = [_]i32{ 3, 4 };

    const c = a ++ b;

    print("{any}\n\n", .{c});
}

test "repeat operation" {
    const zeros = [_]i32{0} ** 5;

    print("{any}\n\n", .{zeros});
}
