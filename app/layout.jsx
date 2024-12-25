import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition.";
import Head from "next/head";

const JetBrainsMono = JetBrains_Mono({
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-JetbrainsMono",
});

export const metadata = {
  title: "EL MFH Portfolio ",
  description:
    "Salut je suis EL MEHDI EL FHAILI, je suis technicien spécialisé en infrastructures digitales option systèmes et réseaux. Âgé de 20 ans, j'ai obtenu ma formation à l'Institut Spécialisé de Technologie Appliquée El Kelaa des Sraghna. Passionné par les technologies modernes, je me consacre à la gestion des systèmes et réseaux, ainsi qu'à la mise en œuvre et maintenance d'infrastructures digitales.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Linux.png" />
      </Head>
      <body className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <footer className="bg- text-cente">
          <div className="p-4 text-center text-neutral-200">
            © 2024 Copyright:by
            <a
              className="text-accent "
              href="hhttps://www.linkedin.com/in/mohammed-assal-94b54126b/"
            >
              {"  "} Mohammed Assal
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
