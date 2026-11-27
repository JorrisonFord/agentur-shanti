import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { Schedule } from "./pages/Schedule";
import { Yoga } from "./pages/Yoga";
import { Studio } from "./pages/Studio";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stundenplan" element={<Schedule />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/preise" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Legal type="impressum" />} />
        <Route path="/datenschutz" element={<Legal type="datenschutz" />} />
        <Route path="*" element={<main className="section-shell"><h1>Seite nicht gefunden</h1></main>} />
      </Routes>
    </Layout>
  );
}
