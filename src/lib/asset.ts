// next/image does not add `basePath` to string `src` values, so public-folder
// paths are prefixed here. A no-op when the site is served from the domain root.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
