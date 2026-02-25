import React, { JSX } from "react";
import MNSectionTitle from "../ui/motions/MNSectionTitle";
// import BackgroundThreads from "../ui/motions/BackgroundThreads";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
  withTexture?:
    | {
        enabled: boolean;
        className?: string;
      }
    | boolean;
}

const Section = ({
  children,
  title,
  withTexture = false,
  ...props
}: SectionProps): JSX.Element => {
  const textureEnabled =
    typeof withTexture === "boolean" ? withTexture : withTexture.enabled;

  const textureClassName =
    typeof withTexture === "object" ? withTexture.className : "rotate-25";

  return (
    <section className="w-full relative" {...props}>
      <div className="container mx-auto py-12 px-4 lg:px-6 flex flex-col justify-center items-center gap-y-4 relative z-10">
        {title && <MNSectionTitle title={title} />}
        {children}
      </div>

      {/* {textureEnabled && <BackgroundThreads className={textureClassName} />} */}
    </section>
  );
};

export default React.memo(Section);
