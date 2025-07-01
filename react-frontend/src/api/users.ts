import api from "@/lib/axios";
import type { UserCreate, UserOut } from "@/types/user";

export const createUser = async (user: UserCreate): Promise<UserOut> => {
  const response = await api.post("/users/", user);
  return response.data;
};

export const fetchUsers = async (): Promise<UserOut[]> => {
  const response = await api.get("/users/");
  return response.data;
};
