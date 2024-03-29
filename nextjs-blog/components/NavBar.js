import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
    </nav>
  );
}
