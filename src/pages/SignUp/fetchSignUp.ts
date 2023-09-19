import { ServerState, SignUp } from "@type/common.tsx";
import { getSessionStorage } from "@utils/storage.ts";
import { LOCAL_STORAGE_KEY_SERVER } from "@api/keys.ts";
import axios from "axios";
import { url } from "@api/url.ts";

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
