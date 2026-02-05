import Editions from "@/components/features/15-editions/Editions";
import Main from "@/components/layout/Main";
import { Suspense } from "react";


const EditionsPage = () => {
  return (
    <Suspense fallback={null}>
      <Main>
        <Editions />
      </Main>
    </Suspense>
  );
};

export default EditionsPage;
