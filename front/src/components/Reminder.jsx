
function Reminder() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">📋 Atmintinė</h1>

      {/* Cyclist Reminder */}
      <div className="bg-blue-100 text-blue-900 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">🚴 Dviratininkui pravartu turėti:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🥪 Užkandžių</li>
          <li>💧 Vandens</li>
          <li>🧴 Maudymosi reikmenis</li>
          <li>⛑️ Šalmą</li>
          <li>🧰 Įrankius ir padangos klijavimo reikmenis</li>
        </ul>
      </div>

      {/* General Reminder */}
      <div className="bg-green-100 text-green-900 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">👥 Visiems:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🥪 Užkandžių (dviem dienom)</li>
          <li>🥤 Gėrimų (visam savaitgaliui)</li>
          <li>🩱 Maudymosi reikmenų (kam reikia)</li>
          <li>🏸 Lauko žaidimų (raketės, kamuolys ir pan.)</li>
        </ul>
      </div>
    </div>
  );
}

export default Reminder;
