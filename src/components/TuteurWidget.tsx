"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

export function TuteurWidget() {
  const [ouvert, setOuvert] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Salut ! 👋 Je suis Sauveur, ton tuteur. Pose-moi une question sur un cours ou un exercice : je te donne d'abord un indice, puis je t'explique si tu veux. Sur quoi bloques-tu ?",
    },
  ]);
  const [saisie, setSaisie] = useState("");
  const [charge, setCharge] = useState(false);
  const finRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, ouvert]);

  async function envoyer() {
    const texte = saisie.trim();
    if (!texte || charge) return;
    const nouveaux = [...messages, { role: "user" as const, content: texte }];
    setMessages(nouveaux);
    setSaisie("");
    setCharge(true);
    try {
      const r = await fetch("/api/tuteur", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nouveaux.slice(-10), contexte: `page ${pathname}` }),
      });
      const data = await r.json();
      setMessages([...nouveaux, { role: "assistant", content: data.reponse ?? "Erreur, réessaie." }]);
    } catch {
      setMessages([...nouveaux, { role: "assistant", content: "Oups, une erreur est survenue. Réessaie !" }]);
    } finally {
      setCharge(false);
    }
  }

  return (
    <>
      {!ouvert && (
        <button
          onClick={() => setOuvert(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3.5 font-bold text-white shadow-lg hover:bg-brand-700"
        >
          <span className="text-xl">💬</span> Aide / Tuteur IA
        </button>
      )}
      {ouvert && (
        <div className="fixed bottom-5 right-5 z-40 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2 font-bold">
              <span>🤖</span> Sauveur — tuteur IA
            </div>
            <button onClick={() => setOuvert(false)} className="text-white/80 hover:text-white">
              ✕
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm ${
                  m.role === "user"
                    ? "ml-auto bg-brand-600 text-white"
                    : "mr-auto border border-slate-200 bg-white text-slate-700"
                }`}
              >
                {m.content}
              </div>
            ))}
            {charge && <div className="mr-auto rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-400">Sauveur réfléchit…</div>}
            <div ref={finRef} />
          </div>
          <div className="flex gap-2 border-t border-slate-200 p-2">
            <input
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && envoyer()}
              placeholder="Pose ta question…"
              className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
            />
            <button onClick={envoyer} disabled={charge} className="btn-primary px-3 py-2 disabled:opacity-50">
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
