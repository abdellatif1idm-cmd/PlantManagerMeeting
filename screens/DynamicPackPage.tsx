import DynamicPack from "@/components/features/dynamic-pack/DynamicPack";
import Main from "@/components/layout/Main";

const DynamicPackPage = ({ type ,plan }: { type: string , plan:string }) => {
  return (
    <Main>
      <DynamicPack type={type}  plan={plan}/>
    </Main>
  );
};

export default DynamicPackPage;
