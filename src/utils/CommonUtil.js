export function log(message) {
  console.log(message);
}

export async function digestMessage(message) {
  const msgBuffer = new TextEncoder('utf-8').encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}
