
-- EmployeeShiftView
CREATE OR REPLACE VIEW "EmployeeShiftView" AS 
SELECT 
"s"."id", 
"s"."start", 
"s"."end",
"s"."date", 
"s"."movies",
"e"."name" AS "employee_name",
CAST(EXTRACT(EPOCH FROM("s"."end" - "s"."start")) AS TEXT) AS "hours"
FROM "Shift" AS "s"
JOIN "Employee" AS "e" ON "s"."employee_id" = "e"."id";