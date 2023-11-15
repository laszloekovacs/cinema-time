
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
CAST(EXTRACT(EPOCH FROM("s"."end" - "s"."start")) AS INTEGER) AS "hours"
FROM "Shift" AS "s"
JOIN "Employee" AS "e" ON "s"."employee_id" = "e"."id";


-- EmployeeHoursThisMonth
CREATE OR REPLACE VIEW "EmployeeHoursThisMonth" AS
SELECT 
"employee_id",
"employee_name",
SUM("hours") AS "hours"
FROM "EmployeeShiftView"
WHERE "date" >= DATE_TRUNC('month', CURRENT_DATE)
GROUP BY "employee_id", "employee_name"
ORDER BY "hours" DESC;