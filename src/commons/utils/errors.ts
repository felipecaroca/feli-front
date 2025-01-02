import { AxiosError } from "axios";

export const handleError =(err:  AxiosError<{
  message: string;
}>, goLogin: () => void) => {
  if(err?.response?.data?.message === 'UNAUTHORIZED') goLogin()
}