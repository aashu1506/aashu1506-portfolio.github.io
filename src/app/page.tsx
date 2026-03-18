import ScrollyCanvas from '@/components/ScrollyCanvas';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full font-sans antialiased text-white selection:bg-white/30">
      <ScrollyCanvas />
      <Projects />
    </main>
  );
}
