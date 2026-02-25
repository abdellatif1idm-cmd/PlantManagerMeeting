"use client";
import { motion } from "motion/react";
import { Button } from "@radix-ui/themes";

const PMActions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mt-4"
    >
      <Button 
        size="3" 
        className="w-full sm:w-auto px-8! bg-(--accent-9) hover:bg-(--accent-10)! cursor-pointer font-medium"
        radius="full"
      >
        <i className="ri-calendar-check-line mr-2" />
        Participer
      </Button>
      
      <Button 
        size="3" 
        variant="outline" 
        className="w-full sm:w-auto px-8! border-2 border-white text-white hover:bg-white hover:text-white! cursor-pointer font-medium"
        radius="full"
      >
        <i className="ri-hand-heart-line mr-2" />
        Devenir sponsor
      </Button>
      
      <Button 
        size="3" 
        variant="soft" 
        className="w-full sm:w-auto px-8! bg-white/10 hover:bg-white/20! text-white cursor-pointer font-medium"
        radius="full"
      >
        <i className="ri-download-line mr-2" />
        Télécharger la brochure
      </Button>
    </motion.div>
  );
};

export default PMActions;