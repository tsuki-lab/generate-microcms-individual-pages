import { fetchIndividualPages } from "@/lib/microcms";
import Link from "next/link";

export default async function Home() {
  const individualPages = await fetchIndividualPages();

  return (
    <main>
      <h1>microCMSで下層ページを作成するサンプル</h1>

      <p>
        GitHub：<a href="https://github.com/tsuki-lab/generate-microcms-individual-pages" target="_blank">tsuki-lab/generate-microcms-individual-pages</a>
      </p>

      <h2>microCMSで作成された下層ページ</h2>
      <ul>
        {individualPages.map((page) => (
          <li key={page.pathname}>
            <Link href={page.pathname}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const revalidate = 60;