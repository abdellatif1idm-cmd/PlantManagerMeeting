import ClientSpeakerCard from "./ClientSpeakerCard";
import EventSpeakersListFr from "@/data/fr/8-EventSpeakers.json";
export default function SpeakersGrid() {
  return (
    <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4">
        {EventSpeakersListFr.map((speaker, index) => (
          <ClientSpeakerCard key={speaker.id} speaker={speaker} delay={index / 30} />
        ))}
      </div>
    </>
  );
}
