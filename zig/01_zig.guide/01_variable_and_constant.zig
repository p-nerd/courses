const print = @import("std").debug.print;

test "constants (immutable, known at compile-time)" {
    const PI = 3.14159;
    const MESSAGE = "Hello";
    const ARRAY = [_]i32{ 1, 2, 3 };

    print("{any}\n{s}\n{any}\n\n", .{ PI, MESSAGE, ARRAY });
}

test "variable (mutable)" {
    var count: i32 = 0;
    var name: []const u8 = "John";
    var numbers = [_]i32{ 1, 2, 3 };

    count = 1;
    name = "Doe";
    numbers = [_]i32{ 4, 5, 6 };

    print("{any}\n{s}\n{any}\n\n", .{ count, name, numbers });
}

test "variable declaration without initialization" {
    var uninitiated: i32 = undefined;

    uninitiated = undefined;

    print("{any}\n\n", .{uninitiated});
}

test "comptime variables (evaluated at compile time)" {
    comptime var compile_time_var = 100;

    compile_time_var = 200;

    print("{any}\n\n", .{compile_time_var});
}

test "type inference" {
    const inferred_int = 42;
    var inferred_string = "text";

    inferred_string = "test";

    print("{d}\n{s}\n\n", .{ inferred_int, inferred_string });
}

test "variables in blocks are scoped" {
    {
        var block_var: i32 = 10;
        block_var = 2;
        print("{d}\n\n", .{block_var});
    }
}
