import { NextResponse } from "next/server";
import rawSponsorsData from "../../../data/konfhub-archive/entity-1-sponsors.json";
import rawPartnersData from "../../../data/konfhub-archive/entity-2-partners.json";
import rawExhibitorsData from "../../../data/konfhub-archive/entity-3-exhibitors.json";

export const dynamic = "force-static";

const EVENT_URL = "world-ai-show-malaysia26";

// Archive note: this used to live-fetch KonfHub entity types 1 (sponsors)
// and 2 (partners) - notably missing entity 3 (exhibitors), which
// SponsorsGrid.tsx fetches directly on its own. Serves the frozen
// 2026-09-28 snapshot instead, now including exhibitors too so the
// Header's "has exhibitors" nav-visibility check (which reads from this
// same route) is accurate. See src/data/konfhub-archive/ and
// konfhub-snapshot/ at the repo root.
export async function GET() {
  const sponsorsData: any = rawSponsorsData;
  const partnersData: any = rawPartnersData;
  const exhibitorsData: any = rawExhibitorsData;

  const sponsorsByCategory: Record<string, any[]> = {};
  const partnersByCategory: Record<string, any[]> = {};

  const cleanCategoryName = (catName: string) => {
    const trimmed = catName.trim();
    const prefix = "World AI Show";
    if (trimmed.startsWith(prefix)) {
      return trimmed.substring(prefix.length).replace(/^\s*\|\|\s*/, "").trim();
    }
    return trimmed;
  };

  const formatEntities = (categorized: any[], defaultName: string, target: Record<string, any[]>) => {
    if (!Array.isArray(categorized)) return;
    for (const cat of categorized) {
      const rawName = cat.category_name || defaultName;
      const cleanName = cleanCategoryName(rawName);
      const entities = Array.isArray(cat.entity) ? cat.entity : [];
      if (entities.length > 0) {
        if (!target[cleanName]) target[cleanName] = [];
        target[cleanName].push(
          ...entities.map((e: any) => ({
            id: e.id,
            name: e.entity_name || "",
            logo: e.image_url || "",
            website: e.website_url || "#",
            description: e.description || "",
            location: e.location || "",
            booth: e.booth_number || "",
          }))
        );
      }
    }
  };

  formatEntities(sponsorsData?.categorized, "Sponsors", sponsorsByCategory);
  formatEntities(partnersData?.categorized, "Partners", partnersByCategory);
  formatEntities(exhibitorsData?.categorized, "Exhibitors", sponsorsByCategory);

  return NextResponse.json({
    eventId: EVENT_URL,
    sponsors: sponsorsByCategory,
    partners: partnersByCategory,
    rawSponsors: sponsorsData?.categorized ?? [],
    rawPartners: partnersData?.categorized ?? [],
    fetchedAt: "2026-09-28T00:00:00.000Z",
    source: "konfhub-archive-snapshot",
  });
}
