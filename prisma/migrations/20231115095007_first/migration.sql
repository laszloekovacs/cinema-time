-- CreateTable
CREATE TABLE "Settings" (
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shift" (
    "id" SERIAL NOT NULL,
    "start" TIME NOT NULL,
    "end" TIME NOT NULL,
    "date" DATE NOT NULL,
    "movies" TEXT[],
    "employee_id" INTEGER NOT NULL,

    CONSTRAINT "Shift_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shift" ADD CONSTRAINT "Shift_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;


-- EmployeeShiftView
CREATE OR REPLACE VIEW "EmployeeShiftView" AS 
SELECT 
"s"."id", 
"s"."start", 
"s"."end",
"s"."date", 
"s"."movies",
"e"."name" AS "employee_name",
"e"."id" AS "employee_id",
CAST(EXTRACT(EPOCH FROM("s"."end" - "s"."start")) AS TEXT) AS "hours"
FROM "Shift" AS "s"
JOIN "Employee" AS "e" ON "s"."employee_id" = "e"."id";