import { EditionTypes } from "@/types/EditionTypes";

const EditionVideo = ({ edition }: { edition: EditionTypes }) => {
  return (
    <div className="relative group">
      <div className="w-full aspect-video relative shadow-lg rounded-xl overflow-hidden border border-(--accent-6)">
        <iframe
          src={edition.videoUrl}
          className="size-full"
          style={{ border: "none" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Edition ${edition.id} Video`}
        ></iframe>
        <EditionTag number={edition.id} />
      </div>
    </div>
  );
};

const EditionTag = ({ number }: { number: number }) => {
  return (
    <div className="w-16 h-24 absolute right-4 top-0 bg-linear-to-tr from-(--accent-5) to-(--accent-10) text-white rounded-b-xl flex flex-col items-center justify-center shadow-lg">
      <span className="text-xs font-semibold uppercase tracking-wider opacity-80">
        Ed.
      </span>
      <span className="text-3xl font-bold">{number}</span>
    </div>
  );
};

export default EditionVideo;
