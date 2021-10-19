export async function getAddresses(ip) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_KVHcUbKun0orCPei94N6hADoNbNbK&ipAddress=${ip}`
  );
  return await response.json();
}
