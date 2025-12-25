import { JSX } from "react";

export const formatNote = (text: string): JSX.Element[] => {
  return text.split("\n").map((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("- ")) {
      return <li key={index}>{trimmed.slice(2)}</li>;
    }

    if (trimmed.startsWith("* ")) {
      return <li key={index}>{trimmed.slice(2)}</li>;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      return <li key={index}>{trimmed.replace(/^\d+\.\s/, "")}</li>;
    }

    return <p key={index}>{line}</p>;
  });
};
