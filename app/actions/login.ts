"use server";

import { z } from "zod";
import { zact } from "zact/server";

const loginCreds = z.object({
  username: z.string().min(6),
  password: z.string().min(6),
});

/**
 * For now only console logs to the server.
 *
 * The idea is that you would actually make a request
 * to the server and generate a cookie or something similar.
 */
export const loginAction = zact(loginCreds)(async (input) => {
  console.log(loginCreds.parse(input));
});
