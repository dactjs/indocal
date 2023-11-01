export function getShortId(id: string): string {
  const tail = id.slice(-4);

  return `#-${tail}`;
}
