export default function EventTable({ events }) {
  const badgeColors = {
    education: "bg-blue-100 text-blue-700",
    environment: "bg-green-100 text-green-700",
    kindness: "bg-pink-100 text-pink-700",
    community: "bg-yellow-100 text-yellow-700",
    other: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {events.map((event) => (
        <div
          key={event._id}
          className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
        >
          {event.image?.url && (
            <img
              src={event.image.url}
              alt={event.name}
              className="h-40 w-full object-cover"
            />
          )}

          <div className="p-5">
            <span
              className={`text-xs px-3 py-1 rounded-full font-semibold ${
                badgeColors[event.eventType]
              }`}
            >
              {event.eventType}
            </span>

            <h3 className="text-xl font-bold text-accent mt-3">{event.name}</h3>

            <p className="text-gray-600 text-sm mt-2">{event.description}</p>

            <p className="text-sm text-primary mt-4">
              📅 {new Date(event.date).toDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
