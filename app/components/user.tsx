"use client";
import { useZact } from "zact/client";
import { loginAction } from "../actions/login";

type UserT = {
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  password: string;
  username: string;
};
export const User = ({ user }: { user: UserT }) => {
  const { mutate, data, isLoading } = useZact(loginAction);

  return (
    <div className="flex flex-col gap-8 bg-green-100 rounded-xl ">
      <div className="">
        <div className="flex justify-between gap-8 p-2 bg-green-300 place-items-end rounded-t-xl">
          <h2 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h2>
          <h3 className="text-xs italic font-light uppercase tracking-tightest">
            Client component
          </h3>
        </div>
        <ul className="p-2 m-2">
          <h3 className="mb-1 font-black tracking-wide uppercase">Creds</h3>
          <li>{user.password}</li>
          <li>{user.username}</li>
        </ul>
        <ul className="p-2 m-2">
          <h3 className="mb-1 font-black tracking-wide uppercase">
            Some data idk
          </h3>
          <li>{user.updatedAt}</li>
        </ul>
      </div>
      <button
        className="w-full px-3 py-2 rounded-xl bg-violet-400"
        onClick={() => {
          mutate({ username: user.username, password: user.password });
        }}
      >
        <h3 className="text-xl font-black tracking-wider uppercase">
          Login as this user
        </h3>
      </button>
    </div>
  );
};
