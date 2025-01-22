const std = @import("std");

const print = std.debug.print;

test "basic if-else" {
    const number = 42;

    if (number > 50) {
        print("{d} is greater then 50\n", .{number});
    } else {
        print("{d} is less then or equal to 50\n", .{number});
    }
}

test "if-else with else if" {
    const number = 42;

    if (number < 0) {
        print("{d} is negative\n", .{number});
    } else if (number == 0) {
        print("{d} is zero\n", .{number});
    } else {
        print("{d} is positive\n", .{number});
    }
}
