// http://127.0.0.1:3000/api/heroes/2.json
import type { APIRoute } from "astro";
import data from "../../../../content/data/api.json";

export const get: APIRoute = ({ params, request }) => {
  const { route, id } = params;
  const item = data.filter((item) => item.id === id && item.route === route)[0];

  if (!item) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }

  return new Response(
    JSON.stringify({ ...item, path: new URL(request.url).pathname }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

export function getStaticPaths() {
  return [
    { params: { route: "heroes", id: "0" } },
    { params: { route: "heroes", id: "1" } },
    { params: { route: "heroes", id: "2" } },
  ];
}
