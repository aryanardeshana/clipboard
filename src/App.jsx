import Header from "./components/Header";
import ClipboardCard from "./components/ClipboardCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-[#050b1a] dark:via-[#0b1220] dark:to-[#0f172a] transition-colors">
      <Header />

      <main className="flex justify-center pt-2 px-4">
        <ClipboardCard />
      </main>
    </div>
  );
}

export default App;
