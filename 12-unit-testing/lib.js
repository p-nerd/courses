export const abs = num => {
    if (num > 0) return num;
    if (num < 0) return -num;
    return 0;
};

export const greet = name => {
    return "Welcome " + name;
}