import { createDb } from "../db";
import { DbEmployeeRecord } from "../types";
import { IHRApp } from "./app.interafce";

export const createHRApp = (): IHRApp => {
  const db = createDb();

  return {
    employeeWithCityList: async () => {
      const res = await db.query({ type: "employee", where: {} });
      const employeeList = res.items as DbEmployeeRecord[]

      return employeeList.map(({ data }) => ({
				firstName: data.firstName,
				city: data.cityName,
			}))
    },
		
    employeeWithPositionList: async () => {
			const res = await db.query({ type: "employee", where: {} });
      const employeeList = res.items as DbEmployeeRecord[]

      return employeeList.map(({ data }) => ({
				firstName: data.firstName,
				position: data.positionName,
				division: data.divisionName,
			}))
		},
		
    update: async () => {
      // этот метод имплементировать не нужно
    },
  };
};