import type entry from "../../../api/entry.api";
import type { treaty } from "@elysiajs/eden"

export const GET = async (ssr: ReturnType<typeof treaty<typeof entry>>) => {
  const response = await ssr.api.index.get()
  return response
}