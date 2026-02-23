import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";
import { Button, Popover } from "@radix-ui/themes";
import EventBaseListFr from "@/data/fr/1-EventBase.json";
import DateStringText from "@/utils/DateStringText";
import Link from "next/link";

const HeroDatePlace = () => {
  return (
    <MNBlurWrapper initialPosition="bottom">
      <div className="w-fit flex items-center px-2 h-8 gap-x-4 rounded-full bg-(--accent-10)/10">
        <HeroDate />
        <HeroPlace />
      </div>
    </MNBlurWrapper>
  );
};

export default HeroDatePlace;

const HeroDate = () => {
  return (
    <div className="flex items-center gap-x-1">
      <i className="ri-calendar-line size-fit text-lg" />
      <span>
        {EventBaseListFr.EventDateString}
      </span>
    </div>
  );
};
const HeroPlace = () => {
  return (
    <div className="flex items-center gap-x-1 relative">
      <i className="ri-map-pin-line size-fit text-lg" />
      <Popover.Root>
        <Popover.Trigger className="animate-pulse cursor-pointer">
          <span className="hover:text-(--accent-11)">
            {EventBaseListFr.EventCity}
          </span>
        </Popover.Trigger>
        <Popover.Content className="bg-(--color-background)!">
          <div className="flex items-center gap-x-1 mb-2">
            <i className="ri-map-pin-range-line size-fit text-lg" />
            <span className="">
              {EventBaseListFr.EventLocation}
            </span>
          </div>
          <Link target="_blank" href={EventBaseListFr.EventLocationMap}>
            <Button radius="full" size={"1"} className="w-full!">
              <span className="">Visiter</span>
            </Button>
          </Link>
        </Popover.Content>
      </Popover.Root>
      <div className="size-fit text-xs absolute right-0 rotate-z-90 translate-x-2/3">
        <i className="ri-arrow-down-s-line animate-bounce inline-block" />
      </div>
    </div>
  );
};
