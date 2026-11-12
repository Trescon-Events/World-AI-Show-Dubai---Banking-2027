import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World AI Show | BFSI | Dubai 2027",
  description: "Redirecting to World AI Show | BFSI | Dubai 2027 homepage.",
  robots: { index: false, follow: false },
};

export default function HomePreviewRedirect() {
  return (
    <main className="min-h-screen grid place-items-center bg-[#08121E] text-[#F7F9FC] p-6 text-center">
      <meta httpEquiv="refresh" content="0;url=/banking/" />
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/banking/");',
        }}
      />
      <div className="space-y-4">
        <p className="text-[16px] text-[#F7F9FC]/80">
          Redirecting to the promoted World AI Show | BFSI | Dubai 2027 homepage…
        </p>
        <a
          href="/banking/"
          className="bb-btn-primary inline-flex items-center justify-center px-6 py-3 font-bold text-[14px]"
        >
          Go to Homepage →
        </a>
      </div>
    </main>
  );
}
