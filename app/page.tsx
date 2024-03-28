export const dynamic = 'force-dynamic'
import { Button } from "@/components/ui/button";
import { db } from "@/database/db.mjs";
import { users } from "@/database/schema/user";

export default async function Home() {

  const usersData = await db.select().from(users);
  return (
    <main>
      {usersData.map((user, i) =>(
        <pre key={i}>
          <code>{JSON.stringify(user)}</code>
        </pre>
      ))}
      <Button>Hello World</Button>
    </main>
  );
}
