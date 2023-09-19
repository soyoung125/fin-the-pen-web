import axios, { AxiosResponse } from "axios";
import { GetScheduleQuery, Schedule } from "@type/schedule.tsx";
import { ServerState, SignInterface, SignUp, User } from "@type/common.tsx";
import { url } from "./url.ts";
import { getSessionStorage, setSessionStorage } from "../utils/storage.ts";
import { LOCAL_STORAGE_KEY_SERVER } from "./keys.ts";

/**
 * 반드시 서버로 요청할 때 객체 형식이어야 JSON 으로 변환되어 서버에 잘 들어감!
 * 아직 타입이 미정인 코드들이 있어서 일단 any 처리
 */

export const fetchSignUp = async (user: SignUp) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
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

// @mock
export const fetchMockLogin = async () => {
  const server = "guest";
  setSessionStorage<ServerState>(LOCAL_STORAGE_KEY_SERVER, server);
  const response = await axios.post<User>(`${url[server]}/mock/login`);
  return response.data;
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

export const fetchGetAccountList = async (organization: string) => {
  try {
    const server = getSessionStorage<ServerState>(
      LOCAL_STORAGE_KEY_SERVER,
      "real"
    );
    const response = await axios.get<any>(`/${url[server]}/codef/company-account-list`, {
      params: { organization },
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
    const response = await axios.get<any>(`/${url[server]}/codef/card/account/card-list`, {
      params: { organization },
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
}
