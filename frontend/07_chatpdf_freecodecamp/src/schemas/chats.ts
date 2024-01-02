import { varchar, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

const chats = pgTable("chats", {
    id: serial("id").primaryKey(),
    pdf_name: text("pdf_name").notNull(),
    pdf_url: text("pdf_url").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    user_id: varchar("user_id", { length: 256 }).notNull(),
    file_key: text("file_key").notNull(),
});

export default chats;
