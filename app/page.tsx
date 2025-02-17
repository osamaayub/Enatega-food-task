"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/apollo/index";
import {HeroSection} from "@/components/heroSection";
import { Header } from "@/components/header";
import { LocationProvider } from "@/context/LocationContext";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <ApolloProvider client={client}>
        <LocationProvider>
          <Header />
          <HeroSection />
          <Footer />
        </LocationProvider>
      </ApolloProvider>
    </div>
  );
}
