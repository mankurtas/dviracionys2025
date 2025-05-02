import React from "react";

function Food() {
  const days = [
    {
      day: "Penktadienis",
      meals: [
        "🌯 Vakarienė bendra kepsim šašlykus.",
      ],
    },
    {
      day: "Šeštadienis",
      meals: [
        "🥐 Pusryčiai: reikia pasirūpinti patiems.",
        "🍲 Pietūs: Karčeginėje, nemintukai jungiasi arba rūpinasi patys",
        "🌭 Vakarienė bendra - darysim hot dogus.",
      ],
    },
    {
      day: "Sekmadienis",
      meals: [
        "🥐 Pusryčiai: reikia pasirūpinti patiems.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">🍽️ Maistas</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {days.map(({ day, meals }) => (
          <div
            key={day}
            className="bg-neutral-800 text-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4">{day}</h2>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
              {meals.map((meal, index) => (
                <li key={index}>{meal}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-warning text-warning-content p-4 mt-10 rounded-lg shadow-md text-sm md:text-base">
        <p><strong>Bendrai visomis dienoms:</strong> reikia pasirūpinti gėrimais sau ir užkandžiais sau ir draugui.</p>
        <p>🌭 Mėsa, dešrelės, duona ir daržovėmis bus pasirūpinta ir <strong>bus įskaičiuota į renginio kainą.</strong></p>
      </div>
    </div>
  );
}

export default Food;
