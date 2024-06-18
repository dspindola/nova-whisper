'use server';
import { treaty } from "@elysiajs/eden";
import type entryApi from "../api/entry.api";

export const index = async () => {
  const api = treaty<ReturnType<typeof entryApi>>('0089c056-5e69-474f-b57b-dbd689497743-00-37psyktachd46.spock.replit.dev:8080');
  return api.index.get().catch((error) => ({ data: 'error' }));
};
