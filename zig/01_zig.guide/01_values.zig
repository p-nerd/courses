const std = @import("std");

const expect = std.testing.expect;
const print = std.debug.print;

test "constants (immutable, known at compile-time)" {
    const PI = 3.14159;
    const MESSAGE = "Hello";
    const ARRAY = [_]i32{ 1, 2, 3 };

    print("{any}\n{s}\n{any}\n", .{ PI, MESSAGE, ARRAY });
}
