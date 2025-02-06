import { drizzle } from "drizzle-orm/node-postgres";
import { varchar,integer, pgTable } from "drizzle-orm/pg-core";

const db = drizzle(process.env.DATABASE_URL!)

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
})