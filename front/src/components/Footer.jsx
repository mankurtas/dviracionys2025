import { Bike } from "lucide-react"; // Importing a bike icon from lucide-react

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content py-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Funny Bicycle Icon */}
        <div className="mb-4 md:mb-0">
          <Bike size={40} className="text-accent animate-bounce" />
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold">Vėjas plaukus kutena,</p>
          <p className="text-sm text-neutral-300">Kai spaudžiu aš pedalą</p>
        </div>

        {/* Copyright Info */}
        <div className="mt-4 md:mt-0">
          <p className="text-xs text-neutral-500">© 2025 Dviračiai. Povilas. Žygiai</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
