import Image from "next/image";
import Link from "next/link";
import EventBaseListFr from "@/data/fr/1-EventBase.json";

export default function Logo() {
  return (
    <div
      className="h-full rounded-full relative"
      style={{ aspectRatio: EventBaseListFr.EventLogoRatio }}
    >
      <Link href={"/"}>
        <Image
          src={
            "https://res.cloudinary.com/dzcarbymi/image/upload/v1766057183/IMD_Plan_u4j1qt.png"
          }
          alt=""
          fill
          className="object-contain"
        ></Image>
      </Link>
    </div>
  );
}
