import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-4xl font-black tracking-widest uppercase">hello!</h1>
      <Link className="px-3 py-2 rounded-xl bg-violet-400 " href="/users">
        click violet colored element to see result
      </Link>
    </main>
  );
}
