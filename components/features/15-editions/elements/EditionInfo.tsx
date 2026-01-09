import { EditionTypes } from "@/types/EditionTypes";
import { Calendar, MapPin, Plus, Users } from "lucide-react";

const EditionInfo = ({ edition }: { edition: EditionTypes }) => {
  const infoItems = [
    { icon: Calendar, label: "Date", value: edition.date },
    { icon: Users, label: "Participants", value: `${edition.attendees}` },
    { icon: MapPin, label: "Localisation", value: edition.location },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {infoItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-(--accent-11)/20 rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="p-3 rounded-lg">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="text-lg font-semibold text-white">
                {item.value}{" "}
                {item.label === "Participants" ? (
                  <Plus className="inline w-4 h-4" />
                ) : (
                  ""
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EditionInfo;
