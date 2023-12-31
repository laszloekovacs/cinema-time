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
CAST((EXTRACT(EPOCH FROM("s"."end" - "s"."start")) / 60) AS INTEGER) AS "minutes"
FROM "Shift" AS "s"
JOIN "Employee" AS "e" ON "s"."employee_id" = "e"."id";


-- EmployeeHoursThisMonth
CREATE OR REPLACE VIEW "EmployeeHoursThisMonth" AS
SELECT 
"employee_id",
"employee_name",
SUM("minutes") AS "minutes"
FROM "EmployeeShiftView"
WHERE "date" >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY "employee_id", "employee_name"
ORDER BY "minutes" DESC;