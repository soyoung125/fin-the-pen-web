import axios, { AxiosResponse } from "axios";
import {
  MonthScheduleQuery,
  RequestSchedule,
  Schedule,
} from "@app/types/schedule.ts";
import { DOMAIN } from "./url.ts";

import { getSign } from "@components/ScheduleDrawer/hooks/useScheduleForm.ts";

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
