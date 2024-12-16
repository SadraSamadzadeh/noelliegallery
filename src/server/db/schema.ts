// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { create } from "domain";
import { relations, sql } from "drizzle-orm";
import {v4 as uuidv4} from 'uuid';

import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  primaryKey,
  uuid,
  pgEnum
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `noelliegallery_${name}`);
export const roleEnum = pgEnum("role", ["Moderator", "Viewer"]);
export const images = createTable(
  "image",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
    // i have to think if we need to assign the user id to images as well as the albums
    userId: varchar("userId", { length: 256 }).notNull(), 
  },
  (example) => ({
    nameIndex: index("images_idx").on(example.name),
  })
);

export const albums = createTable(
  "album",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
    ownerId: varchar("userId", { length: 256 }).notNull(),
  },
  (example) => ({
    nameIndex: index("albums_idx").on(example.name),
  })
);

export const albumImages = createTable(
  "album_images",
  {
    albumId: integer("album_id")
      .notNull()
      .references(() => albums.id),
    imageId: integer("image_id")
      .notNull()
      .references(() => images.id),
    addedAt: timestamp("added_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (example) => ({
    compositePrimaryKey: primaryKey(example.albumId, example.imageId),
  })
);

export const users = createTable(
  "users",
  {
    id: uuid("id")
    .notNull()
    .primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull(),
    password: varchar("password", { length: 256 }).notNull(),
    createdAt: timestamp("createdAt", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  }
)
export const collaborators = createTable(
  "collaborators",
  {
   user_id: uuid("user_id")
   .notNull()
   .references(() => users.id),
   album_id: integer("album_id")
   .notNull()
   .references(() => albums.id),
   role: roleEnum("role").notNull().default("Viewer"),
  },
  (example) => ({
    pk: primaryKey(example.user_id, example.album_id),
  })
)

