import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Erine In Etherland",
  description: "Erine in Etherland project and videos.",
};

export default function EtherlandLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
