import { createClient } from "contentful";

export const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
export const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export const fetchEntries = async (contentType, slug) => {
  const res = await client.getEntries({
    content_type: contentType,
    "fields.slug": slug,
  });
  const items = await res.items;
  return items;
};

export const fetchSingleEntry = async (entryId) => {
  const entry = await client.getEntry(entryId);
  return entry;
};
