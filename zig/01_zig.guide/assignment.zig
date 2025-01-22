const constant: i32 = 5;
var variable: u32 = 5000;

const inferred_constant = @as(i32, 5);
var inferred_variable = @as(u32, 5000);

const a: i32 = undefined;
var b: u32 = undefined;
