import { Bike } from "lucide-react"; // Importing the bicycle icon from Lucide

function Logo() {
  return (
    <div className="flex items-center space-x-2 pl-6 pt-4">
      {/* Bicycle icon */}
      <Bike size={32} className="text-accent" />

      {/* Text "Dviracionys" */}
      <span className="text-3xl font-bold text-white">Dviracionys</span>
    </div>
  );
}

export default Logo;