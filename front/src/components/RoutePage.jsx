import { Map, Clock, Ruler } from "lucide-react";

function RoutePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🚴 Maršrutas</h1>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Info Section */}
        <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Informacija apie kelionę</h2>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Ruler size={20} className="text-accent" />
              <span><strong>Ilgis:</strong> ~60 km</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={20} className="text-accent" />
              <span><strong>Trukmė:</strong> ~7 val.</span>
            </li>
            <li className="flex items-center gap-2">
              <Map size={20} className="text-accent" />
              <span><strong>Tipas:</strong> Apskritiminis maršrutas</span>
            </li>
          </ul>

          {/* Optional Steps */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Maršruto eiga:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-300">
              <li>
                  Startas Paštuva, prieš laikrodžio rodyklę
              </li>
              <li>Pietūs netoli Kačerginės</li>
              <li>Kauno prieiguose edukacija</li>
              <li>Lampėdžiai maudynės</li>
              <li>Finišas</li>
            </ol>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="/dviracionys2025/src/assets/map.png"
            alt="Google Maps screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default RoutePage;
