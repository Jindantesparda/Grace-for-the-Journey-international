/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import StoriesEvents from "./components/StoriesEvents";
import Donations from "./components/Donations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <StoriesEvents />
        <Donations />
      </main>
      <Footer />
    </div>
  );
}

