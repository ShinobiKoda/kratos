import { Listing } from "../types/Listings";

export async function fetchListings(): Promise<Listing[]> {
  try {
    const res = await fetch("/data/Listings.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Listings");
    }

    const data = await res.json();
    return data;
  } catch (err: unknown) {
    console.error("Failed to fetch Listings:", err);
    return [];
  }
}
