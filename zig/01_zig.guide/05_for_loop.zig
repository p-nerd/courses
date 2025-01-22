const std = @import("std");

const expect = std.testing.expect;
const print = std.debug.print;

test "basic range-based for loop" {
    for (0..5) |i| {
        print("{d}\n", .{i});
    }
    print("\n", .{});
}

test "iterating over an array" {
    const string = [_]u8{ 'a', 'b', 'c' };

    for (string) |character| {
        print("{c}\n", .{character});
    }
    print("\n", .{});
}

test "getting both index and value" {
    const string = [_]u8{ 'a', 'b', 'c' };

    for (string, 0..) |character, index| {
        print("{c}: {d}\n", .{ character, index });
    }
    print("\n", .{});
}

test "iterating with a pointer to modify values" {
    var arr = [_]i32{ 1, 2, 3 };

    for (&arr) |*item| {
        item.* *= 2;
        print("{any}\n", .{item.*});
    }
    print("\n", .{});
}
