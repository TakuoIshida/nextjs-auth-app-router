'use client';

export default function ErrorPage({ error }: { error: Error }) {
  return <h2>{error.message}</h2>;
}
