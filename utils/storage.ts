import { Note } from "@/types/note";

export const getNotes = (): Note[] => {
  if (typeof window === "undefined") return [];

  const data = window.localStorage.getItem("notes");
  return data ? (JSON.parse(data) as Note[]) : [];
};

export const saveNotes = (notes: Note[]): void => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem("notes", JSON.stringify(notes));
};
