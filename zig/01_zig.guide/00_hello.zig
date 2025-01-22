const std = @import("std");

const expect = std.testing.expect;

pub fn main() !void {
    try std.io.getStdOut().writer().print("Hello {s}!\n", .{"World"});
    std.debug.print("Hello {s}!\n", .{"World"});
}
