"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { getNotes, saveNotes } from "@/utils/storage";
import { Note } from "@/types/note";

export default function AddNote() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const notes: Note[] = getNotes();
    notes.push({ id: Date.now(), title, content });

    saveNotes(notes);
    router.push("/");
  };

  return (
    <div className="overlay">
      <div className={styles.container}>
        <h1 className={styles.title}>Add Note</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />

          <textarea
            className={styles.textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
          />

          <button className={styles.saveBtn} type="submit">
            Save Note
          </button>
        </form>
      </div>
    </div>
  );
}
