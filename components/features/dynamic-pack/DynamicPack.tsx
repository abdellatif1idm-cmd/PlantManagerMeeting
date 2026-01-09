import Section from "@/components/layout/Section";
import RegistrationForm from "../13-registration/RegistrationForm";
import MNBlurWrapper from "@/components/ui/motions/MNBlurWrapper";

const DynamicPack = ({ pack }: { pack: string }) => {
  return (
    <Section className="overflow-hidden">
      <MNBlurWrapper initialPosition="right">
        <RegistrationForm type={pack} />
      </MNBlurWrapper>
    </Section>
  );
};

export default DynamicPack;
