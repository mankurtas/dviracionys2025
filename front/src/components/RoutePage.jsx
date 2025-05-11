import { Map, Clock, Ruler } from "lucide-react";

function RoutePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🚴 Maršrutas</h1>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Info Section */}
        <div className="bg-neutral-800 text-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Informacija apie žygį</h2>
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Ruler size={20} className="text-accent" />
              <span><strong>Trasos ilgis:</strong> ~60 km</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={20} className="text-accent" />
              <span><strong>Viso žygio trukmė:</strong> ~7 val (mynimas, valgymas, pramogavimas)</span>
            </li>
            <li className="flex items-center gap-2">
              <Map size={20} className="text-accent" />
              <span><strong>Tipas:</strong> Apskritiminis maršrutas</span>
            </li>
          <div className="badge badge-dash badge-info">Judėjimo kryptis - prieš laikrodžio rodyklę</div>

          </ul>

          {/* Optional Steps */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Maršruto eiga:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-300">
              <li>
                  Startas sodyboje
              </li>
              <li>Pietūs Kačerginėje</li>
              <li>Edukacinė programa Kaune</li>
              <li>Sustojimas Lampėdžiuose - maudynės</li>
              <li>Finišas sodyboje</li>
            </ol>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            // src="/dviracionys2025/map.png" for git apge
            src={`${import.meta.env.BASE_URL}map.png`}
            alt="Google Maps screenshot"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default RoutePage;
