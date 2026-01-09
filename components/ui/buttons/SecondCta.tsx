import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default function SecondCta() {
  return (
    <div className="size-fit">
      <Link href={`/participate/networking`} className="w-full">
        <Button
          size={"3"}
          color="orange"
          radius="full"
          variant="outline"
          className="cursor-pointer! bg-(--orange-2)/20!"
        >
          <span className="text-sm lg:text-xl px-2">
            Networker
          </span>
        </Button>
      </Link>
    </div>
  );
}
