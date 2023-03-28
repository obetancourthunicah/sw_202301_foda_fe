export const getHomeData = async () => {
  const url = 'http://localhost:3001';
  const response = await fetch(url, {method: 'GET'});
  const jsonResponse = await response.json();
  return jsonResponse;
}
