# cinema time tracking tool

simple shift reporting tool for keeping tabs on who was working when.

## env vaiables

the app only uses DATABASE_URL from the environment.

## Usage

- create an employee at the employee page. give it a name and an contact phone number / email
- create a shift at the shift page. you need to select an employee. input hours and movies played (usually 2 per shift)
- at the home page, you can keep track of who was working and how many hours this month

## tech notes

the app uses Prisma with Postgres, it also has custom views in the schema. Next.js is used for routing and some server side rendering, data fetching and Chakra UI for styling. a bit of luxon and forkmik here and there for forms and date formating.

## TODO's / ideas

- add paging and filtering of shifts
- delete / rename employees, edit employee contact details
- edit reported shifts
- seeding and clearing the database
- handle empty tables
- better way of using env variables
- check if movie titles are empty
- cron job for populating the database
