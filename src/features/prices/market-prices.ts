export type MarketPrice = {
  id: string;
  name: { en: string; rw: string };
  aliases: { en: string[]; rw: string[] };
  priceRwf: number;
  unit: { en: string; rw: string };
  market: { en: string; rw: string };
  updatedAt: string;
  source: string;
};

// Replace this local snapshot with an API-backed loader when a live prices service is available.
export const MARKET_PRICES: MarketPrice[] = [
  { id: "maize", name: { en: "Maize", rw: "Ibigori" }, aliases: { en: ["corn"], rw: [] }, priceRwf: 556, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
  { id: "beans", name: { en: "Dry beans", rw: "Ibishyimbo byumye" }, aliases: { en: ["beans"], rw: ["ibishyimbo"] }, priceRwf: 922, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
  { id: "irish-potatoes", name: { en: "Irish potatoes", rw: "Ibirayi" }, aliases: { en: ["potatoes"], rw: [] }, priceRwf: 600, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
  { id: "rice-local", name: { en: "Local rice", rw: "Umuceri waho" }, aliases: { en: ["rice"], rw: ["umuceri"] }, priceRwf: 1200, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
  { id: "bananas", name: { en: "Bananas", rw: "Ibitoki" }, aliases: { en: ["banana"], rw: [] }, priceRwf: 400, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
  { id: "tomatoes", name: { en: "Tomatoes", rw: "Inyanya" }, aliases: { en: ["tomato"], rw: [] }, priceRwf: 1200, unit: { en: "kg", rw: "kg" }, market: { en: "Gatuna market", rw: "Isoko rya Gatuna" }, updatedAt: "2026-01-11", source: "Northern Corridor Business Information Portal" },
  { id: "coffee-cherries", name: { en: "Coffee cherries (minimum)", rw: "Ikawa mbisi (igiciro ntarengwa)" }, aliases: { en: ["coffee", "cherries"], rw: ["ikawa"] }, priceRwf: 750, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national farmgate minimum", rw: "U Rwanda · igiciro ntarengwa ku muhinzi" }, updatedAt: "2026-01-13", source: "NAEB 2026 season price" },
  { id: "cassava", name: { en: "Cassava", rw: "Imyumbati" }, aliases: { en: [], rw: [] }, priceRwf: 400, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
  { id: "sorghum", name: { en: "Sorghum", rw: "Amasaka" }, aliases: { en: [], rw: [] }, priceRwf: 800, unit: { en: "kg", rw: "kg" }, market: { en: "Rwanda · national median", rw: "U Rwanda · impuzandengo y’igihugu" }, updatedAt: "2026-08-31", source: "WFP VAM via HDX" },
];

export async function loadMarketPrices(): Promise<MarketPrice[]> {
  return MARKET_PRICES;
}
