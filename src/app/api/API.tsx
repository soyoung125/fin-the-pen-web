import axios, { AxiosResponse } from "axios";
import { GetScheduleQuery, Schedule } from "@type/schedule.tsx";
import { ServerState } from "@type/common.tsx";
import { url } from "./url.ts";
import { getSessionStorage } from "../utils/storage.ts";
import { LOCAL_STORAGE_KEY_SERVER } from "./keys.ts";

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
      `${url[server]}/find/contains/name`,
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
    const response = await axios.post<any>(`${url[server]}/codef/accountCreate`, {
      data,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetAccountList = async (organization: string) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response = await axios.post<any>(`${url[server]}/codef/accountList`, {
      organization,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}

export const fetchGetCardList = async (organization: string) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response = await axios.get<any>(`${url[server]}/codef/card/account/card-list`, {
      params: { organization },
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}
