// http://127.0.0.1:3000/api/heroes/2.json
import type { APIRoute } from "astro";
import data from "../../../../content/data/api.json";

export const get: APIRoute = ({ params, request }) => {
  const { route, id } = params;
  return {
    body: JSON.stringify({
      ...data.filter((item) => item.id === id && item.route === route)[0],
      path: new URL(request.url).pathname,
    }),
  };
};

export function getStaticPaths() {
  return [
    { params: { route: "heroes", id: "0" } },
    { params: { route: "heroes", id: "1" } },
    { params: { route: "heroes", id: "2" } },
  ];
}
