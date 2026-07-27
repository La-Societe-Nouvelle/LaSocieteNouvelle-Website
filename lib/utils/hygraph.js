const HYGRAPH_URL = process.env.NEXT_PUBLIC_HYGRAPH_URL;

async function hygraphFetch(query, variables = {}, { revalidate, tags } = {}) {
  const response = await fetch(HYGRAPH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags },
  });

  const { data, errors } = await response.json();

  if (errors) {
    throw new Error(errors.map((e) => e.message).join(", "));
  }

  return data;
}

export default hygraphFetch;
