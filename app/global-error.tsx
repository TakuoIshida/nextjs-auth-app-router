'use client';

export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <h2>{error.message}</h2>
        {/* <button onClick={() => reset()}>再レンダリングする</button> */}
      </body>
    </html>
  );
}
