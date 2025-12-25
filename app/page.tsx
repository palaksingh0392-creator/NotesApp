"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { getNotes, saveNotes } from "@/utils/storage";

import { setTheme } from "@/utils/theme";
import { formatNote } from "@/utils/formatNote";
import { Note } from "@/types/note";
export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const deleteNote = (id: number): void => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
    saveNotes(updated);
  };

  return (
    <div className="overlay">
      <div className={styles.container}>
        <button className="btns" onClick={() => setTheme("margritas")}>
          margritas
        </button>
        <button className="btns" onClick={() => setTheme("ElysiumFlowers")}>
          ElysiumFlowers
        </button>
        <button className="btns" onClick={() => setTheme("rainbow")}>
          rainbow
        </button>
        <button className="btns" onClick={() => setTheme("blooms")}>
          blooms
        </button>
        <button className="btns" onClick={() => setTheme("whale")}>
          whale
        </button>

        <h1 className={styles.title}>Notes</h1>
        <Link href="/add" className={styles.addLink}>
          + Add Note
        </Link>

        {notes.map((note) => (
          <div key={note.id} className={styles.noteCard}>
            <div className={styles.noteTitle}>{note.title}</div>

            <div className={styles.noteContent}>
              <ul>{formatNote(note.content)}</ul>
            </div>
            <Link href={`/edit/${note.id}`} className={styles.editBtn}>
              Edit
            </Link>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        ))}
        {notes.length === 0 && <p>No notes yet</p>}
      </div>
    </div>
  );
}
