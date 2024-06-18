import { treaty } from "@elysiajs/eden";
import type entry from "../../api/entry.api";

export const server = treaty<typeof entry>(import.meta.env.VITE_APP_API_DOMAIN);