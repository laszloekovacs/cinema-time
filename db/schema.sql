--CREATE DATABASE "cinema-time";

-- settings kv table
CREATE TABLE "Settings" (
  "key" VARCHAR(128) PRIMARY KEY,
  "value" TEXT
);  

-- employees
CREATE TABLE "Employees" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(128) NOT NULL,
  "contact" TEXT
);

-- shifts
CREATE TABLE "Shifts" (
  "id" SERIAL PRIMARY KEY,
  "employee_id" INTEGER REFERENCES "employees"("id") ON DELETE CASCADE,
  "date" DATE NOT NULL,
  "start" TIME NOT NULL,
  "end" TIME NOT NULL,
  "movies" TEXT[] NOT NULL CHECK (array_length("movies", 1) > 0),
  CONSTRAINT "start_before_end" CHECK ("start" < "end")
);

-- shifts with resolved names
CREATE OR REPLACE VIEW "ShiftsView" AS
SELECT "s"."id", "e"."name" AS "employee", "s"."employee_id", "s"."date", "s"."start", "s"."end", "s"."movies"
FROM "shifts" AS "s"
JOIN "employees" "e" ON "s"."employee_id" = "e"."id";