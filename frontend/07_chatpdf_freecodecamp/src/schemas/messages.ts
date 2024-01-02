import { pgTable, serial, text, timestamp, integer, pgEnum } from "drizzle-orm/pg-core";
import chats from "./chats";

export const message_type = pgEnum("message_type_enum", ["system", "user"]);

const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    content: text("content").notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    chat_id: integer("chat_id")
        .references(() => chats.id)
        .notNull(),
    type: message_type("type").notNull(),
});

export default messages;
