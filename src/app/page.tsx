import styles from "./page.module.css";
import HeroSection from "@/components/home/HeroSection";
import BlueRoseCountdown from "@/components/home/BlueRoseCountdown";
import VideoSection from "@/components/home/VideoSection";
import CalendarSection from "@/components/home/CalendarSection";
import TicketingSection from "@/components/home/TicketingSection";
import NewsPreview from "@/components/home/NewsPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Cavallery",
  description:
    "Cavallery adalah komunitas resmi penggemar Erine (Catherina Vallencia) JKT48. Jadwal, berita, games, dan proyek eksklusif.",
};

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <BlueRoseCountdown />
      <VideoSection />
      <CalendarSection />
      <TicketingSection />
      <NewsPreview />
    </div>
  );
}

