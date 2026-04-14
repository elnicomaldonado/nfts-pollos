import type { Metadata } from "next";
import CreaTuPolloExperience from "@/components/CreaTuPolloExperience";

export const metadata: Metadata = {
  title: "Crea tu pollo — Kikirikrew",
  description:
    "Mezcla ánimo, tema y vibra, descubre un pollo de la manada y descarga tu tarjeta con @kikirikrew. Sin wallet.",
};

export default function CreaTuPolloPage() {
  return <CreaTuPolloExperience />;
}
