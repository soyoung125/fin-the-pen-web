import axios, { AxiosResponse } from "axios";
import { GetScheduleQuery, Schedule } from "../../types/schedule.tsx";
import { SignInterface, SignUp, User } from "../../types/common.tsx";
import { url } from "./url.ts";
import { getLocalStorage, getSessionStorage } from "../utils/storage.ts";
import { LOCAL_STORAGE_KEY_SERVER } from "./keys.ts";

/**
 * 반드시 서버로 요청할 때 객체 형식이어야 JSON 으로 변환되어 서버에 잘 들어감!
 * 아직 타입이 미정인 코드들이 있어서 일단 any 처리
 */

export const fetchSignUp = async (user: SignUp) => {
  try {
    const server = getSessionStorage(LOCAL_STORAGE_KEY_SERVER, "real");
    const response = await axios.post<boolean>(
      `${url[server]}/fin-the-pen-web/sign-up`,
      user
    );
    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchLogin = async (sign: SignInterface) => {
  try {
    const server = getSessionStorage(LOCAL_STORAGE_KEY_SERVER, "real");
    const response = await axios.post<User | "">(
      `${url[server]}/fin-the-pen-web/sign-in`,
      sign
    );
    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchCreateSchedule = async (schedule: Schedule) => {
  try {
    const response = await axios.post("/createSchedule", schedule);
    // alert(JSON.stringify(response));
    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchDeleteSchedule = async (id: string) => {
  try {
    console.log({ id });
    const response = await axios.post("/deleteSchedule", { id });
    // alert(JSON.stringify(response));
    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchMonthSchedules = async (
  schedule: GetScheduleQuery
): Promise<Schedule[] | undefined> => {
  try {
    const response: AxiosResponse<Schedule[]> = await axios.post<Schedule[]>(
      "/getMonthSchedules",
      schedule
    );
    const schedules: Schedule[] = response.data;
    return schedules;
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 *
 *
 typescript axios example

 import axios, { AxiosResponse } from 'axios';

 interface User {
  id: number;
  name: string;
  email: string;
}

 axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
 .then((response: AxiosResponse<User[]>) => {
    const users = response.data;
    console.log(users);
  })
 .catch((error) => {
    console.error(error);
  });

 *
 */
