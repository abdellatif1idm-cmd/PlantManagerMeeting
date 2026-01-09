import DynamicPack from "@/components/features/dynamic-pack/DynamicPack";
import Main from "@/components/layout/Main";

const DynamicPackPage = ({ pack }: { pack: string }) => {
  return (
    <Main>
      <DynamicPack pack={pack} />
    </Main>
  );
};

export default DynamicPackPage;
