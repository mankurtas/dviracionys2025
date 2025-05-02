function Schedule() {
  const events = [
    {
      date: "2025 08 15",
      title: "Pentktadienis",
      plan: [
        {text: "Nuo 12:00 Susitikimas sodyboje - Paštuva", url: "https://atostogoskaime.lt/apgyvendinimas/pastuva/"},
        "18:00 Vakaro pradžia, pasiruošimas",
        "19:15 Vakarienė",
        "21:00 Pramogos, žaidimai, pašnekesiai",
      ],
    },
    {
      date: "2025 08 16",
      title: "Šeštadienis",
      plan: [
        "Pusryčiai", "~09:00 Dviračių startas", "~12:30 Pietūs", "14:00 Edukacija", "19:30 Vakarienė", "20:30 Laisvas laikas"
      ],
    },
    {
      date: "2025 08 17",
      title: "Sekmadienis",
      plan: [
        "Pusryčiai",
        "Atsiveikinimai",
        "Kelionė namo",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Tvarkaraštis</h2>

      {/* Loop through the events array */}
      <div className="grid gap-6 md:grid-cols-3">
        {events.map(({ date, title, plan }) => (
          <div
            key={date}
            className="bg-neutral-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-lg mb-4">{date}</p>
            {/* Plan as an unordered list */}
            <ul className="list-disc pl-6">
            {plan.map((item, index) => (
                <li key={index} className="text-sm">
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {item.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
