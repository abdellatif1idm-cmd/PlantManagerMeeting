import Editions from "@/components/features/15-editions/Editions";
import Main from "@/components/layout/Main";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { Suspense } from "react";

const EditionsPage = () => {
  return (
    <Suspense fallback={null}>
      <Main>
        <div className="mt-4 container px-4 mx-auto">
          <Link href={"/book"} className="block">
          <Button variant="soft" className="w-full! cursor-pointer!">
            <span className="underline">Consulter les éditions précédentes</span>
          </Button>
          </Link>
        </div>
        <Editions />
      </Main>
    </Suspense>
  );
};

export default EditionsPage;
