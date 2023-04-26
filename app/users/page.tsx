import { User } from "../components/user";

async function getUsers() {
  const res = await fetch("http://localhost:4000/api/users");
  const data = await res.json();

  return data;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main className="flex max-w-3xl gap-2 mx-auto">
      <div>
        <h1 className="text-5xl font-black tracking-widest uppercase">
          hello!
        </h1>
        <p className="uppercase">This is a server component. </p>
      </div>
      <div className="flex flex-col max-w-md gap-8">
        {users.map(
          (user: {
            firstName: string;
            lastName: string;
            createdAt: string;
            updatedAt: string;
            password: string;
            username: string;
          }) => {
            return <User user={user} key={crypto.randomUUID()} />;
          }
        )}
      </div>

      {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
    </main>
  );
}
