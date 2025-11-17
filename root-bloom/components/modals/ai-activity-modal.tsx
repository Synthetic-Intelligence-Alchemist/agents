'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { LessonSummary } from "@/data/curriculum";

const templates = [
  {
    id: "montessori",
    title: "Montessori Activity Plan",
    description: "Create a sensorial, practical life, or cosmic education extension with gentle prompts."
  },
  {
    id: "waldorf",
    title: "Waldorf Story Narrative",
    description: "Spin a seasonal story, verse, or puppet show invitation rooted in rhythm and artistry."
  },
  {
    id: "reggio",
    title: "Reggio Emilia Provocation",
    description: "Design an open-ended provocation encouraging collaboration and documentation."
  }
];

interface AIActivityModalProps {
  lesson: LessonSummary;
}

export function AIActivityModal({ lesson }: AIActivityModalProps) {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <button className="btn-primary inline-flex items-center gap-2" onClick={() => setOpen(true)}>
        <Sparkles className="h-4 w-4" />
        Open AI Activity Garden
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-moss-900/30 px-4"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="card max-w-2xl space-y-6 p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-moss-900">AI Activity Garden</h2>
                  <p className="text-sm text-moss-600">
                    Select a template to route a safe, token-efficient Manus AI generation for {lesson.title}.
                  </p>
                </div>
                <button className="text-sm text-moss-600" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`card flex h-full flex-col gap-2 p-4 text-left transition hover:border-bloom-400 ${
                      selectedTemplate === template.id ? "border-bloom-400 bg-bloom-50/80" : ""
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-moss-900">{template.title}</h3>
                    <p className="text-sm text-moss-600">{template.description}</p>
                  </button>
                ))}
              </div>

              <motion.div
                key={selectedTemplate ?? "placeholder"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-3xl bg-moss-50/90 p-6 text-sm text-moss-700"
              >
                {selectedTemplate ? (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-moss-900">Generation Preview</h4>
                    <p>
                      When implemented, this selection will call Manus AI SDK to route towards the designated provider
                      (Gemini, Claude, or DALL·E) with cached prompts to remain under 2.2K tokens per user each month.
                    </p>
                    <p>
                      Store the resulting artifact in Supabase along with lesson ID <code>{lesson.id}</code> and child
                      profile metadata.
                    </p>
                    <button className="btn-primary">Generate (coming soon)</button>
                  </div>
                ) : (
                  <p>Select a template to preview integration details.</p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
