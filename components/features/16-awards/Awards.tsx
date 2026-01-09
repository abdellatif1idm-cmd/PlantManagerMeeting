"use client";
import Image from "next/image";
import { motion } from "motion/react";
import AwardsGallery from "./elements/AwardsGallery";
import EventSocialLinksListFr from "@/data/fr/EventSocialLinks.json"
import Link from "next/link";
import { Button } from "@radix-ui/themes";

const Awards = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto min-h-dvh flex flex-col items-center justify-center gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-16 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="relative"
        >
          <div className="relative h-24 w-48 sm:h-32 sm:w-64 md:h-40 md:w-80 lg:h-56 lg:w-md xl:h-64 xl:w-125">
            <Image
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, (max-width: 1280px) 450px, 500px"
              src="https://res.cloudinary.com/dzcarbymi/image/upload/v1766071304/logo-award-ts_leht4r.png"
              fill
              alt="IMD Awards Logo"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-white/10 blur-2xl -z-10 scale-110"></div>
        </motion.div>

        {/* Title Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center space-y-3 sm:space-y-4"
        >
          <motion.h1
            variants={fadeInVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight"
          >
            IMD Awards
          </motion.h1>
          <motion.div
            variants={fadeInVariants}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-linear-to-r from-transparent to-white/60"></div>
            <div className="w-2 h-2 rounded-full bg-white/80"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-linear-to-l from-transparent to-white/60"></div>
          </motion.div>
          <motion.p
            variants={fadeInVariants}
            className="text-sm sm:text-base md:text-lg text-white/70 font-light tracking-wide"
          >
            Célébrer l’Excellence Industrielle
          </motion.p>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full max-w-5xl space-y-6 sm:space-y-8"
        >
          {/* First Card */}
          <motion.div variants={fadeInVariants} className="group">
            <div className="relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-white/30 hover:shadow-3xl">
              {/* Card accent line */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-linear-to-b from-white/40 via-white/60 to-white/40 rounded-r-full"></div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose font-light text-white/95 text-justify pl-4 sm:pl-6">
                Les{" "}
                <span className="font-semibold text-white border-b border-white/30">
                  IMD Awards
                </span>{" "}
                récompensent l’excellence dans le monde industriel, en célébrant
                les entreprises et individus qui établissent de nouveaux
                standards en matière d’
                <span className="font-medium text-white/95">innovation</span>,
                de <span className="font-medium text-white/95">leadership</span>{" "}
                et d’<span className="font-medium text-white/95">impact</span>.
                Cette cérémonie annuelle est l’un des moments forts de
                l’événement, rassemblant le meilleur du secteur.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <Link href={EventSocialLinksListFr.Awards} target="_blank">
          <Button>Poursuivre</Button>
        </Link>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="w-full max-w-2xl"
        >
          <div className="h-px bg-linear-to-r from-transparent via-white/40 to-transparent"></div>
        </motion.div>
        <AwardsGallery />
      </div>
    </main>
  );
};

export default Awards;
