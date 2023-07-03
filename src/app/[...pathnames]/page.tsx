import { fetchIndividualPageContent } from "@/lib/microcms";
import { notFound } from "next/navigation";

export default async function PathName({
  params,
}: {
  params: { pathnames: string[] };
}) {
  const content = await fetchIndividualPageContent(params.pathnames);

  if (!content) {
    return notFound();
  }

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export const revalidate = 60;
