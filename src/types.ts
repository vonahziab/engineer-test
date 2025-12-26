import { IDb_Record } from "./db";

export interface CityData {
	uuid: string;
  name: string;
}

export interface DivisionData {
	uuid: string;
	name: string;
	cityUuid: string;
}

export interface PositionData {
	uuid: string;
	name: string;
}

export interface EmployeeData {
  firstName: string;
  lastName: string;
  cityUuid: string;
  cityName: string;
  divisionUuid: string;
  divisionName: string;
  positionUuid: string;
  positionName: string;
}

export interface DbEmployeeRecord extends IDb_Record {
  data: EmployeeData;
}



const citySource = [
  { uuid: "3ba648aa-4498-43da-b29f-b83f37a25429", name: "Алматы" },
  { uuid: "32d82d73-3eac-4e5a-9921-fcd2e1447c76", name: "Астана" },
];

const divisionSource = [
  {
    uuid: "97cf9556-2882-4c4a-b7b5-37cf53347447",
    name: "Департамент информационных технологий",
    cityUuid: "3ba648aa-4498-43da-b29f-b83f37a25429",
  },
  {
    uuid: "3e80754a-3681-4e5c-8d6d-b84d09a7a3c4",
    name: "Дирекция",
    cityUuid: "3ba648aa-4498-43da-b29f-b83f37a25429",
  },
];

const positionSource = [
  {
    uuid: "3e80754a-3681-4e5c-8d6d-b84d09a7a3c4",
    name: "Руководитель службы поддержки",
  },
  { uuid: "cc811dfb-7f73-4c18-969f-c8408fd92263", name: "Разработчик" },
];

const employeeSource = [
  {
    uuid: "65f5c1d4-fb87-4da2-b0bd-a22343605396",
    firstName: "Name 1",
    lastName: "Name 2",
    divisionUuid: "3e80754a-3681-4e5c-8d6d-b84d09a7a3c4",
    cityUuid: "3ba648aa-4498-43da-b29f-b83f37a25429",
    positionUuid: "cc811dfb-7f73-4c18-969f-c8408fd92263",
  },
  {
    uuid: "59e23b74-8645-46d6-9751-5fe594dd89e6",
    firstName: "Name 1",
    lastName: "Name 2",
    divisionUuid: "3e80754a-3681-4e5c-8d6d-b84d09a7a3c4",
    cityUuid: "3ba648aa-4498-43da-b29f-b83f37a25429",
    positionUuid: "cc811dfb-7f73-4c18-969f-c8408fd92263",
  },
];