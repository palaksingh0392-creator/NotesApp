"use client";

import { useEffect, useState, FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./page.module.css";
import { getNotes, saveNotes } from "@/utils/storage";
import { Note } from "@/types/note";

export default function EditNote() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // Load existing note
  useEffect(() => {
    const notes = getNotes();
    const noteToEdit = notes.find((n) => n.id === id);

    if (!noteToEdit) {
      router.push("/");
      return;
    }

    setTitle(noteToEdit.title);
    setContent(noteToEdit.content);
  }, [id, router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const notes = getNotes();
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title, content } : note
    );

    saveNotes(updatedNotes);
    router.push("/");
  };

  return (
    <div className="overlay">
      <div className={styles.container}>
        <h1 className={styles.title}>Edit Note</h1>

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

          <button type="submit" className={styles.saveBtn}>
            Update Note
          </button>
        </form>
      </div>
    </div>
  );
}
