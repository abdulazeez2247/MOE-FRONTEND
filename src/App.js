import React, { useState } from "react";
import ChatInterface from "./components/ChatInterface";
import FileUpload from "./components/FileUpload";
import PricingPlans from "./components/PricingPlans";
import Button from "./components/ui/Button";

export default function App() {
  const [tab, setTab] = useState("home"); // 'home' | 'chat' | 'upload' | 'pricing'

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="container-page h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand-600 text-white grid place-items-center font-bold">M</div>
            <div>
              <p className="font-semibold leading-tight">MOE</p>
              <p className="text-xs text-slate-500 -mt-0.5">Millwork Optimized Estimating</p>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <Button variant={tab === "home" ? "primary" : "outline"} onClick={() => setTab("home")}>Home</Button>
            <Button variant={tab === "chat" ? "primary" : "outline"} onClick={() => setTab("chat")}>Chat</Button>
            <Button variant={tab === "upload" ? "primary" : "outline"} onClick={() => setTab("upload")}>Upload</Button>
            <Button variant={tab === "pricing" ? "primary" : "outline"} onClick={() => setTab("pricing")}>Pricing</Button>
          </nav>
        </div>
      </header>

      {tab === "home" && (
        <main className="container-page py-12 md:py-16">
          <section className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="heading-hero">Estimate smarter. Build faster.</h1>
              <p className="muted mt-3">
                MOE is an intelligent assistant for the millwork industry. Ask questions, upload shop files, and
                get fast, structured answers — from takeoffs to hardware and finishes.
              </p>
              <div className="mt-5 flex gap-2">
                <Button onClick={() => setTab("chat")}>Start chatting</Button>
                <Button variant="outline" onClick={() => setTab("pricing")}>See pricing</Button>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="chip">Free: 5 queries/day</span>
                <span className="chip">Pro: uploads + exports</span>
              </div>
            </div>
            <div className="card p-4 md:p-6">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Preview</p>
                <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm">User: “What’s the hardware schedule for cabinets in Area C?”</p>
                  <div className="mt-3 rounded-xl bg-white px-4 py-3 border border-slate-200">
                    <p className="text-sm">
                      MOE: “Area C uses Blum 110° hinges, Richelieu pulls 1555, soft-close sliders on all drawers.
                      Download CSV for takeoff.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {tab === "chat" && <ChatInterface />}
      {tab === "upload" && <FileUpload isPro={false} />}
      {tab === "pricing" && <PricingPlans />}

      <footer className="mt-12 border-t bg-white/60">
        <div className="container-page h-14 flex items-center justify-between text-sm text-slate-500">
          <span>© {new Date().getFullYear()} MOE</span>
          <a className="hover:text-slate-700" href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}