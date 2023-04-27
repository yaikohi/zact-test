import dta from "../../../public/userdata.json";
export async function GET(_: Request) {
  return new Response(JSON.stringify(dta, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
