import React, { useState, useRef, useEffect } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { Card, CardInner } from "./ui/Card";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I’m MOE — your millwork estimating assistant. Ask me anything." }
  ]);
  const [value, setValue] = useState("");
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = () => {
    if (!value.trim()) return;
    setMessages(m => [...m, { role: "user", content: value.trim() }, { role: "assistant", content: "Processing your question… (demo)" }]);
    setValue("");
  };

  const onKeyDown = (e) => {
    if ((e.key === "Enter" || e.keyCode === 13) && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="container-page py-6 md:py-10">
      <div className="mb-6 text-center">
        <h1 className="heading-hero">MOE Chat</h1>
        <p className="muted mt-2">Real-time millwork Q&amp;A with file-aware context (demo)</p>
      </div>

      <Card>
        <CardInner>
          <div className="h-[55vh] md:h-[60vh] overflow-y-auto pr-1">
            <ul className="space-y-4">
              {messages.map((m, i) => (
                <li key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className={
                    "max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow " +
                    (m.role === "user" ? "bg-brand-600 text-white rounded-tr-sm" : "bg-white border border-slate-100 rounded-tl-sm")
                  }>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.content}</p>
                  </div>
                </li>
              ))}
              <div ref={endRef} />
            </ul>
          </div>

          <div className="mt-4 md:mt-6 flex items-center gap-2">
            <Input
              placeholder="Ask MOE about takeoffs, hardware, finishes…"
              value={value}
              onChange={e => setValue(e.target.value)}
              onKeyDown={onKeyDown}
            />
            <Button onClick={send} className="h-[44px] px-5">Send</Button>
          </div>
        </CardInner>
      </Card>
    </div>
  );
}