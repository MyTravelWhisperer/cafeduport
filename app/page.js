import Image from "next/image";
import HomePage from "./components/HomePage/HomePage";
import { Newsreader } from "next/font/google";

const inter = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main className={inter.className}>
      <HomePage />
    </main>
  );
}
