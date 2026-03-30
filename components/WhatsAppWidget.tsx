"use client";
import Script from "next/script";

export default function WhatsAppWidget() {
  return (
    <div className="whatsapp-safe-container relative overflow-hidden pointer-events-none">
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <div
        className="elfsight-app-e054793e-906a-4c1e-bc3b-513162fa0c24 pointer-events-auto"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
