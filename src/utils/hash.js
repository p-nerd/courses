import bcrypt from "bcrypt";

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    console.log(salt);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hash) => {
    const isValidPassword = await bcrypt.compare(password, hash);
    return isValidPassword;
};
