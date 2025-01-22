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
