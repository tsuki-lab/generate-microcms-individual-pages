import { createClient } from "microcms-js-sdk";

const microcms = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICROCMS_API_KEY || '',
});

export const fetchIndividualPages = async () => {
  return await microcms
    .getList({
      endpoint: "individual-pages",
      queries: {
        fields: "title,pathname",
        limit: 100,
      },
    })
    .then((res) => {
      return res.contents.map((content) => {
        return {
          title: content.title,
          pathname: content.pathname,
        };
      });
    });
};

export const fetchIndividualPageContent = async (pathnames: string[]) => {
  return await microcms
    .getList({
      endpoint: "individual-pages",
      queries: {
        filters: `pathname[equals]/${pathnames.join("/")}`,
        limit: 1,
        fields: "content",
      },
    })
    .then((res) => {
      if (res.contents[0]) {
        return res.contents[0].content;
      } else {
        return null;
      }
    });
};
