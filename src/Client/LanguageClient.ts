import type { LanguageDto } from "../Interfaces/LanguageDTO";

export async function getLanguages(): Promise<LanguageDto[]> {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/language?skip=0&limit=50`
  );
  if (res.ok) {
    return await res.json();
  } else {
    throw new Error("request failed");
  }
}
