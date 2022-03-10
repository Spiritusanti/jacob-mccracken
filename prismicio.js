import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from "@prismicio/next";

export const repositoryName = "fanfyvw4m94xjr54";

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  if (doc.type === "ProjectPage") {
    return `/projects/${doc.uid}`;
  }
  return "/";
}

// This factory function allows smooth preview setup
export function createClient(config) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    context: config.context,
    req: config.req,
  });

  return client;
}
