import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "2cgw9ych",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-06-02",
});
