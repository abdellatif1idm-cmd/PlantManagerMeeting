import { EditionTypes } from "@/types/EditionTypes";

const EditionTopic = ({ edition }: { edition: EditionTypes }) => {
  return (
    <div className="bg-(--accent-11)/20 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-white mb-3">
        {edition.topic}
      </h2>
      <p className=" text-white leading-relaxed">
        {edition.description}
      </p>
    </div>
  );
};

export default EditionTopic;
