import Hero from './components/Hero';
import Note from './components/Note';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import TheCall from './components/TheCall';
import Milestones from './components/Milestones';
import TimeCounter from './components/TimeCounter';
import Quotes from './components/Quotes';
import Closing from './components/Closing';
import Footer from './components/Footer';
import FloatingHearts from './components/FloatingHearts';
import LoveQuiz from './components/LoveQuiz';

export default function App() {
  return (
    <main className="bg-ivory text-charcoal font-sans selection:bg-rose/30 selection:text-charcoal relative">
      <FloatingHearts />
      <Hero />
      <Note />
      <Timeline />
      <Gallery />
      <TheCall />
      <Milestones />
      <LoveQuiz />
      <TimeCounter />
      <Quotes />
      <Closing />
      <Footer />
    </main>
  );
}
