export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=z2cx7irv8YXNEgCJnpuAdBhAJctQClcd`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images?.downsized_medium.url,
  }));
  return gifs;
};
