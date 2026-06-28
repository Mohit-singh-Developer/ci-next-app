import {client} from "@repo/db/client";

export const dynamic = "force-dynamic";

export default async function Home(){
  let user = null;

  try {
    user = await client.user.findFirst();
  } catch (error) {
    console.error("Home page database error:", error);
    return (
      <main>
        <div>Database is unavailable right now.</div>
      </main>
    );
  }

  return (
    <main>
      <div>{user?.username ?? "No user found"}</div>
      <div>{user?.password ?? "No password found"}</div>
    </main>
  );
}