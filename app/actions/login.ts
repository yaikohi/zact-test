"use server";

import { z } from "zod";
import { zact } from "zact/server";

const loginCreds = z.object({
  username: z.string().min(6),
  password: z.string().min(6),
});

export const loginAction = zact(loginCreds)(async (input) => {
  console.log(loginCreds.parse(input));
});
