import React, { useState } from "react";
import Button from "./ui/Button";
import { Card, CardInner } from "./ui/Card";

const ACCEPT = [".cab", ".cabx", ".mzb", ".xml"];

export default function FileUpload({ isPro=false }) {
  const [files, setFiles] = useState([]);

  const onPick = (e) => {
    const picked = Array.from(e.target.files || []);
    setFiles(picked);
  };

  return (
    <div className="container-page py-6 md:py-10">
      <div className="mb-6 text-center">
        <h1 className="heading-hero">Upload Millwork Files</h1>
        <p className="muted mt-2">Supported: .cab, .cabx, .mzb, .xml</p>
      </div>

      <Card>
        <CardInner>
          {!isPro ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 md:p-5">
              <p className="font-medium text-amber-900">Upgrade to Pro</p>
              <p className="text-amber-800 text-sm mt-1">
                File analysis is available on the Pro plan. Upgrade to unlock bulk uploads, detailed breakdowns,
                and exportable reports.
              </p>
              <Button className="mt-3">Upgrade Now</Button>
            </div>
          ) : null}

          <div className="mt-6">
            <label
              htmlFor="file"
              className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 bg-white hover:bg-slate-50 p-8 cursor-pointer transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 text-slate-400">
                <path fill="currentColor" d="M12 16a1 1 0 0 1-1-1V9.41l-1.3 1.3a1 1 0 0 1-1.4-1.42l3-3a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1-1.4 1.42L13 9.4V15a1 1 0 0 1-1 1Zm6 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3Z"/>
              </svg>
              <div className="text-center">
                <p className="font-medium">Drag &amp; drop your files or click to browse</p>
                <p className="muted text-xs mt-1">Up to 25MB per file • {ACCEPT.join(", ")}</p>
              </div>
              <input id="file" type="file" className="hidden" accept={ACCEPT.join(",")} multiple onChange={onPick} />
            </label>

            {files.length > 0 && (
              <div className="mt-6">
                <p className="text-sm font-medium mb-2">Selected files</p>
                <ul className="grid gap-2 md:grid-cols-2">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                      <div className="flex items-center gap-3">
                        <span className="chip">{f.name.split('.').pop()?.toUpperCase()} file</span>
                        <span className="text-sm">{f.name}</span>
                      </div>
                      <span className="text-xs text-slate-500">{(f.size/1024).toFixed(1)} KB</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-4">Analyze (Demo)</Button>
              </div>
            )}
          </div>
        </CardInner>
      </Card>
    </div>
  );
}