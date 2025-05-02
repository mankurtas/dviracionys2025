import {NavLink} from "react-router-dom"
import { Home, CalendarDays, Map, Utensils, Contact, BellRing, Ban, Bike } from "lucide-react"; 

function BanBikeIcon() {
    return (
      <div className="relative w-[30px] h-[30px]">
        <Bike className="absolute inset-0 text-gray-300" size={30} />
        <Ban className="absolute inset-0 text-red-600 opacity-80" size={30}/>
      </div>
    );
  }

function Navigation() {
  const navItems = [
    { to: "/", label: "Pradžia", icon: <Home size={30} /> },
    { to: "/schedule", label: "Tvarkaraštis", icon: <CalendarDays size={30} /> },
    { to: "/route", label: "Maršrutas", icon: <Map size={30} /> },
    { to: "/food", label: "Maistas", icon: <Utensils size={30} /> },
    // { to: "/lazy", label: "Nemintukai", icon: <BanBikeIcon  /> },
    { to: "/reminder", label: "Atmintinė", icon: <BellRing size={30} /> },

    { to: "/contacts", label: "Kontaktai", icon: <Contact size={30} /> },


  ];

  return (

    <>
     {/* Mobile Nav - Bottom */}
     <nav className="fixed bottom-0 left-0 right-0 bg-neutral text-neutral-content shadow-md z-50 md:hidden">
        <div className="flex justify-around px-2 py-2">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center text-xs ${
                  isActive ? "text-accent" : "text-neutral-content"
                }`
              }
            >
              <div className="mb-1">{icon}</div>
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Desktop Nav - Top */}
      <nav className="hidden md:flex justify-center bg-neutral text-neutral-content py-4 shadow-sm">
        <div className="flex gap-10">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center text-sm ${
                  isActive ? "text-accent" : "text-neutral-content"
                }`
              }
            >
              <div className="mb-1">{icon}</div>
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navigation;