import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h1>{JSON.stringify(videos)}</h1>;
}
