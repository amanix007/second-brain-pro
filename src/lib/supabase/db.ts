import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as  schema from '../../../migrations/schema';
import { migrate } from "drizzle-orm/postgres-js/migrator"
dotenv.config({
  path: ".env"
});

if (!process.env.DATABASE_URL_SUPABASE) {
  console.log("no database url DATABASE_URL_SUPABASE");
}
const client = postgres(process.env.DATABASE_URL_SUPABASE as string);
const db = drizzle(client, { schema });

const migrateBD = async () => {
  try {

    console.log("Migrating client");
    await migrate(db, {
      migrationsFolder: "migrations"
    })

  } catch (error) {
    console.log('error:', error)

  }

}
migrateBD();

export default db;