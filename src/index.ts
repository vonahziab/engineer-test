import { createHRApp } from "./app";

const app = createHRApp();

app.employeeWithCityList().then(console.log);
app.employeeWithPositionList().then(console.log);