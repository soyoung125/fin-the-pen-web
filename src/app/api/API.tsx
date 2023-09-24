import axios, { AxiosResponse } from "axios";
import { GetScheduleQuery, Schedule } from "@type/schedule.tsx";
import { ServerState } from "@type/common.tsx";
import { url } from "./url.ts";
import { getSessionStorage, setSessionStorage } from "../utils/storage.ts";
import { LOCAL_STORAGE_KEY_SERVER } from "./keys.ts";
import { SignIn, User } from "@type/auth.tsx";

export const fetchLogin = async (sign: SignIn) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
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
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    console.log(url[server]);
    const response = await axios.post(
      `${url[server]}/createSchedule`,
      schedule
    );
    // alert(JSON.stringify(response));
    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchDeleteSchedule = async (id: string) => {
  try {
    console.log({ id });
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response = await axios.post(`${url[server]}/deleteSchedule`, { id });
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
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response: AxiosResponse<Schedule[]> = await axios.post<Schedule[]>(
      `${url[server]}/getMonthSchedules`,
      schedule
    );
    const schedules: Schedule[] = response.data;
    return schedules;
  } catch (err) {
    console.log(err);
  }
};

export const fetchGetTransavrionList = async (data: any) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response: AxiosResponse<any[]> = await axios.post<any[]>(
      `${url[server]}/codef/occasionalAccount`,
      data
    );
    const result = response.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const fetchFindSchedules = async (name: string) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response = await axios.post<Schedule[]>(
      `/${url[server]}/find/contains/name`,
      { name }
    );
    const result = response.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCreateAccount = async (data: any) => {
  try {
    console.log(data);
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response = await axios.post<any>(`/real/codef/accountCreate`, {
      data,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
