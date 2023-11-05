import axios, { AxiosResponse } from "axios";
import { GetScheduleQuery, Schedule } from "@type/schedule.tsx";
import { DOMAIN } from "./url.ts";

export const fetchCreateSchedule = async (schedule: Schedule) => {
  try {
    const response = await axios.post(`${DOMAIN}/createSchedule`, schedule);
    return response.data;
  } catch (err) {
    alert(err);
  }
};

export const fetchDeleteSchedule = async (id: string) => {
  try {
    console.log({ id });
    const response = await axios.post(`${DOMAIN}/deleteSchedule`, { id });
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
      `${DOMAIN}/getMonthSchedules`,
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
    const response: AxiosResponse<any[]> = await axios.post<any[]>(
      `${DOMAIN}/codef/occasionalAccount`,
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
    const response = await axios.post<Schedule[]>(
      `${DOMAIN}/find/contains/name`,
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
    const response = await axios.post<any>(`${DOMAIN}/codef/accountCreate`, {
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
    const response = await axios.post<any>(`${DOMAIN}/codef/accountList`, {
      organization,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetCardList = async (organization: string) => {
  try {
    const response = await axios.post<any>(
      `${DOMAIN}/codef/card/account/card-list`,
      {
        organization,
      }
    );
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
