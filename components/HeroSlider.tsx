// components/HeroSlider.tsx
import { getHeroSlides } from "@/lib/actions";
import HeroSliderClient from "./HeroSliderClient";

export default async function HeroSlider() {
  const slides = await getHeroSlides();
  if (!slides || slides.length === 0) return null;
  return <HeroSliderClient slides={slides} />;
}