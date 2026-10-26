export const metadata = {
  title: "Session Tracker | World AI Show | AI in Banking and Financial Services | Dubai 2027",
  description: "Session Attendance Tracker for World AI Show | AI in Banking and Financial Services | Dubai 2027.",
};

export default function SessionTrackerPage() {
  return (
    <main className="fixed inset-0 w-full h-full bg-[#06111f] overflow-hidden">
      <iframe
        src="/banking/session-tracker-app/index.html"
        className="absolute inset-0 w-full h-full border-none"
        title="Session Tracker"
        allow="camera; microphone"
      />
    </main>
  );
}
