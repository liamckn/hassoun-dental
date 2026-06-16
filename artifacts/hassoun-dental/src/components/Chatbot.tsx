import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { useCreateAnthropicConversation } from "@workspace/api-client-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
}

const SUGGESTIONS = ["Prendre RDV", "Horaires", "Implants", "Urgence", "Prix"];

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const createConversation = useCreateAnthropicConversation();

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    if (window.location.hash === "#chatbot") {
      setTimeout(() => handleOpen(), 600);
    }
  }, []);

  const initConversation = useCallback(async () => {
    if (started) return;
    setStarted(true);
    setMessages([
      {
        role: "assistant",
        content: "Bonjour ! Je suis l'assistante virtuelle du cabinet du Dr. Hassoun. Je suis disponible 24h/24 pour répondre à vos questions. Comment puis-je vous aider ?",
      },
    ]);
    try {
      createConversation.mutate(
        { data: { title: "Chat patient" } },
        {
          onSuccess: (conv) => setConversationId(conv.id),
        }
      );
    } catch {
      // Continue without persisting — chatbot still works locally
    }
  }, [started, createConversation]);

  const handleOpen = () => {
    setOpen(true);
    setNotif(false);
    if (!started) initConversation();
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg = text.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    // Add streaming placeholder
    setMessages((prev) => [...prev, { role: "assistant", content: "", streaming: true }]);

    try {
      const convId = conversationId ?? 0;
      const endpoint = convId > 0
        ? `${BASE_URL}/api/anthropic/conversations/${convId}/messages`
        : null;

      if (!endpoint) {
        // Fallback: simple local response
        setTimeout(() => {
          setMessages((prev) =>
            prev.map((m, i) =>
              i === prev.length - 1
                ? { ...m, content: "Pour prendre rendez-vous, appelez le 04 91 49 56 79 ou réservez en ligne sur Doctolib.", streaming: false }
                : m
            )
          );
          setLoading(false);
        }, 800);
        return;
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: userMsg }),
      });

      if (!res.ok) throw new Error("Network error");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const json = JSON.parse(line.slice(6));
            if (json.content) {
              setMessages((prev) =>
                prev.map((m, i) =>
                  i === prev.length - 1 ? { ...m, content: m.content + json.content } : m
                )
              );
            }
            if (json.done || json.error) {
              setMessages((prev) =>
                prev.map((m, i) =>
                  i === prev.length - 1
                    ? { ...m, streaming: false, content: json.error ? "Désolé, une erreur est survenue. Appelez le 04 91 49 56 79." : m.content }
                    : m
                )
              );
            }
          } catch {
            // skip malformed line
          }
        }
      }
    } catch {
      setMessages((prev) =>
        prev.map((m, i) =>
          i === prev.length - 1
            ? { ...m, content: "Désolée, une erreur est survenue. Vous pouvez nous appeler au 04 91 49 56 79.", streaming: false }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestion = (s: string) => sendMessage(s);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" data-testid="chatbot-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-background border border-border rounded-2xl shadow-2xl w-[340px] md:w-[380px] overflow-hidden flex flex-col"
            style={{ maxHeight: "520px" }}
            data-testid="chatbot-window"
          >
            {/* Header */}
            <div className="bg-foreground px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20H14C17.3137 20 20 17.3137 20 14V11C20 8.79086 18.2091 7 16 7C14.7461 7 13.626 7.5762 12.8988 8.48421L12 9.59868L11.1012 8.48421C10.374 7.5762 9.2539 7 8 7C5.79086 7 4 8.79086 4 11V14C4 17.3137 6.68629 20 10 20Z" />
                  <path d="M12 9.6V17" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Assistante IA — Dr. Hassoun</p>
                <p className="text-white/60 text-xs">Disponible 24h/24 · 7j/7</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 bg-white/15 hover:bg-white/25 rounded-lg flex items-center justify-center transition-colors"
                data-testid="button-chatbot-close"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background min-h-0" style={{ maxHeight: "280px" }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  data-testid={`chatbot-message-${i}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M10 20H14C17.3137 20 20 17.3137 20 14V11C20 8.79086 18.2091 7 16 7C14.7461 7 13.626 7.5762 12.8988 8.48421L12 9.59868L11.1012 8.48421C10.374 7.5762 9.2539 7 8 7C5.79086 7 4 8.79086 4 11V14C4 17.3137 6.68629 20 10 20Z" />
                        <path d="M12 9.6V17" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-muted text-foreground border border-border rounded-bl-sm"
                    }`}
                  >
                    {msg.streaming && !msg.content ? (
                      <span className="flex gap-1 items-center h-4">
                        {[0, 1, 2].map((j) => (
                          <span
                            key={j}
                            className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: `${j * 0.15}s` }}
                          />
                        ))}
                      </span>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-border bg-background">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSuggestion(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border bg-muted hover:bg-primary hover:text-white hover:border-primary transition-colors font-medium text-foreground"
                    data-testid={`chatbot-suggestion-${s}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-border bg-background flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Votre question..."
                disabled={loading}
                className="flex-1 bg-muted text-foreground text-sm rounded-xl px-4 py-2.5 outline-none border border-border focus:border-primary transition-colors placeholder:text-muted-foreground disabled:opacity-50"
                data-testid="input-chatbot"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="w-10 h-10 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
                data-testid="button-chatbot-send"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <div className="relative">
        {!open && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30 pointer-events-none" />
        )}
        <motion.button
          onClick={handleOpen}
          whileTap={{ scale: 0.93 }}
          className="w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-xl flex items-center justify-center relative transition-colors"
          data-testid="button-chatbot-toggle"
        >
          <MessageCircle className="h-6 w-6" />
          {notif && (
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
