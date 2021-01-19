export function decode(file: string | URL) {
  const decoder = new TextDecoder("utf-8");
  const b = decoder.decode(Deno.readFileSync(file));

  return b;
}