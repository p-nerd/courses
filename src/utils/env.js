import "dotenv/config"

export const JWT_EXPIRES_IN_MINUTE = parseInt(process.env.JWT_EXPIRES_IN_MINUTE) || 60;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "Week secret key";
