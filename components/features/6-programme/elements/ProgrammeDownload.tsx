import PublicEnv from "@/data/PublicEnv.json";

export default function ProgrammeDownload({
  downloadable = false,
}: {
  downloadable?: boolean;
}) {
  return (
    <>
      {downloadable && (
        <div className="w-full flex items-center justify-end mb-2">
          <a
            href={`https://drive.google.com/uc?export=download&id=${PublicEnv.PROGRAMME_FILE_ID}`}
            download="Programme.pdf"
            className="w-fit text-xs shadow p-2 bg-linear-to-br from-(--accent-10) to-(--accent-6)  text-white rounded font-medium flex items-center justify-center gap-x-2 cursor-pointer"
          >
            <i className="size-3 md:size-4 ri-download-line" />{" "}
            <span className="">Télécharger le programme</span>
          </a>
        </div>
      )}
    </>
  );
}
