--CREATE DATABASE "cinema-time";

-- settings kv table
CREATE TABLE "settings" (
  "key" VARCHAR(128) PRIMARY KEY,
  "value" TEXT
);  

-- employees
CREATE TABLE "employees" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(128) NOT NULL,
  "contact" TEXT,
);

-- shifts
CREATE TABLE "shifts" (
  "id" SERIAL PRIMARY KEY,
  "employee_id" INTEGER REFERENCES "employees"("id") ON DELETE CASCADE,
  "date" DATE NOT NULL,
  "start" TIME NOT NULL,
  "end" TIME NOT NULL,
  "movies" TEXT[] NOT NULL CHECK (array_length("movies", 1) > 0),
  CONSTRAINT "start_before_end" CHECK (start < end)
);

-- shifts with resolved names
CREATE OR REPLACE VIEW "shifts_view" AS
SELECT "s"."id", "e"."name" AS "employee", "s"."employee_id", "s"."date", "s"."start", "s"."end", "s"."movies"
FROM "shifts" AS "s"
JOIN "employees" "e" ON "s"."employee_id" = "e"."id";