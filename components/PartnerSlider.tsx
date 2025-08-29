// components/PartnerSlider.tsx
import { getPartners } from "@/lib/actions";
import PartnerSliderClient from "./PartnerSliderClient";

export default async function PartnerSlider() {
  const partners = await getPartners();
  if (!partners || partners.length === 0) return null;
  return <PartnerSliderClient partners={partners} />;
}