export async function GET(request: Request) {
  const res = await fetch("http://localhost:3000/users");
  const data = (await res.json()).data;
  return new Response(JSON.stringify(data, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
