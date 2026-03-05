import Section from "@/components/layout/Section";
import RegistrationForm from "../13-registration/RegistrationForm";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";

const DynamicPack = ({ plan , type }: { type: string ,plan: string }) => {
  console.log(plan ,"pack from dynamicPack")
  return (
    <Section className="overflow-hidden">
      <MNBlurWrapper initialPosition="right">
        <RegistrationForm plan={plan} type={type} />
      </MNBlurWrapper>
    </Section>
  );
};

export default DynamicPack;
