const std = @import("std");

pub fn main() !void {
    const a = [5]u8{ 'h', 'e', 'l', 'l', 'o' };
    const b = [_]u8{ 'w', 'o', 'r', 'l', 'd' };

    std.debug.print("a: {s}\n", .{a});
    std.debug.print("b: {s}\n", .{b});

    std.debug.print("len: {s}\n", .{b.len});
}
