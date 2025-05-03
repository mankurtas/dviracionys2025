import React from "react";
import { Phone, MessageCircleHeart, Smile } from "lucide-react";

function Contacts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-neutral text-neutral-content p-8 rounded-lg shadow-md max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">📞 Kontaktai</h1>

        <div className="space-y-4 text-lg">
          <p className="flex items-center gap-2">
            <Phone className="text-blue-600" size={20} />
            Jei turite klausimų – skambinkite telefonu
          </p>

          <p className="flex items-center gap-2">
            <MessageCircleHeart className="text-purple-600" size={20} />
            Rašykite per Messenger, Viber arba SMS
          </p>

          <p className="flex items-center gap-2 mt-6 text-center justify-center font-medium">
            <Smile className="text-green-600" size={20} />
            Iki pasimatymo!
          </p>
          <p className="flex items-center gap-2 mt-6 text-center justify-center font-medium">
             <strong>Povilas</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
