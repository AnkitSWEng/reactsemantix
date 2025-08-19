import Header from "./components/Header";
import Hero from "./components/Hero";
import Articles from "./components/Articles";
import DynamicList from "./components/DynamicList";
import ToggleSection from "./components/ToggleSection";
import AnimationSection from "./components/AnimationSection";
import Media from "./components/Media";
import ContactForm from "./components/ContactForm";
import CollapsibleInfo from "./components/CollapsibleInfo";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col lg:flex-row gap-6 container mx-auto p-6">
        <div className="flex-1 space-y-8">
          <Hero />
          <Articles />
          <DynamicList />
          <ToggleSection />
          <AnimationSection />
          <Media />
          <ContactForm />
          <CollapsibleInfo />
        </div>
        <aside className="w-full lg:w-1/3">
          <Sidebar />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
