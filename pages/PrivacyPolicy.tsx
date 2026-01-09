import React from "react";
import EventBase from "@/data/fr/1-EventBase.json";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full min-h-dvh bg-linear-to-b from-text to-accent-dark">
      <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8  text-white flex flex-col items-center">
        <h1 className="text-white text-lg md:text-4xl font-semibold section-title flex items-center justify-center text-center w-fit">
          Conditions Générales d’Utilisation
        </h1>
        <div className="max-w-none space-y-8 mt-2">
          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl">
              1. Objet
            </h3>
            <p>
              Les présentes conditions générales d’utilisation (ci-après « CGU
              ») définissent les modalités et conditions selon lesquelles les
              utilisateurs accèdent et utilisent le site officiel de l’événement
              {EventBase.EventName} (ci-après « le Site »).
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              2. Acceptation des conditions
            </h3>
            <p>
              En accédant et en naviguant sur le Site, l’utilisateur reconnaît
              avoir pris connaissance des présentes CGU et s’engage à les
              respecter sans réserve.
            </p>
            <p>
              Si l’utilisateur n’accepte pas ces conditions, il doit s’abstenir
              d’utiliser le Site. L’organisateur se réserve le droit de modifier
              à tout moment les présentes CGU. Les nouvelles dispositions
              entreront en vigueur dès leur mise en ligne. L’utilisateur est
              invité à consulter régulièrement cette page.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              3. Accès au Site
            </h3>
            <p>
              Le Site est accessible gratuitement à tout utilisateur disposant
              d’une connexion internet. Les frais liés à l’accès et à
              l’équipement (ordinateur, tablette, smartphone, abonnement
              internet) restent à la charge de l’utilisateur.
            </p>
            <p>
              Le Site est en principe accessible 24h/24 et 7j/7, mais
              l’organisateur se réserve le droit de suspendre, limiter ou
              interrompre l’accès, sans préavis, pour maintenance ou cas de
              force majeure. L’organisateur ne saurait être tenu responsable en
              cas d’indisponibilité temporaire du Site ou de ses services.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              4. Contenu du Site
            </h3>
            <p>
              Le contenu publié sur le Site (textes, images, vidéos, logos,
              documents téléchargeables, etc.) est fourni à titre purement
              informatif. L’organisateur veille à l’exactitude et à la mise à
              jour des informations, mais ne garantit pas leur exhaustivité ni
              l’absence d’erreurs. L’utilisateur demeure responsable de l’usage
              qu’il fait des informations disponibles sur le Site.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              5. Propriété intellectuelle
            </h3>
            <p>
              L’ensemble des éléments du Site (structure, design, textes, logos,
              marques, photos, vidéos, etc.) est protégé par les législations
              marocaines et internationales relatives à la propriété
              intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, adaptation,
              publication, transmission ou diffusion, totale ou partielle, est
              strictement interdite sans autorisation écrite préalable de
              l’organisateur. Tout usage non autorisé peut constituer une
              contrefaçon engageant la responsabilité civile et pénale de son
              auteur.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              6. Données personnelles et confidentialité
            </h3>
            <h4 className="mb-2 font-semibold">Conformité légale</h4>
            <p>
              Ces traitements sont réalisés en conformité avec la loi marocaine
              n°09-08 relative à la protection des personnes physiques à l’égard
              du traitement des données à caractère personnel, et sous le
              contrôle de la Commission Nationale de Contrôle de la Protection
              des Données à Caractère Personnel (CNDP).
            </p>

            <h4 className="mb-2 font-semibold">Droits des utilisateurs</h4>
            <p>
              L’utilisateur dispose d’un droit d’accès, de rectification, de
              suppression et d’opposition aux données le concernant. Ces droits
              peuvent être exercés en adressant une demande à l’adresse email
              officielle de l’événement, accompagnée d’un justificatif
              d’identité.
            </p>

            <h4 className="mb-2 font-semibold">
              Conservation et sécurité des données
            </h4>
            <p>
              Les données personnelles sont conservées uniquement pour la durée
              nécessaire à leur finalité (organisation de l’événement,
              communication, etc.), puis supprimées ou archivées de manière
              sécurisée. L’organisateur met en œuvre les mesures techniques et
              organisationnelles nécessaires pour garantir la sécurité et la
              confidentialité des données.
            </p>

            <h4 className="mb-2 font-semibold">Non-divulgation</h4>
            <p>
              Les données collectées ne sont ni vendues ni transmises à des
              tiers non autorisés, sauf obligation légale ou consentement
              préalable de l’utilisateur.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              7. Liens hypertextes
            </h3>
            <p>
              Le Site peut contenir des liens vers des sites tiers.
              L’organisateur décline toute responsabilité quant au contenu, aux
              services ou aux politiques de confidentialité de ces sites
              externes. L’accès à ces sites relève de la seule responsabilité de
              l’utilisateur.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              8. Responsabilité de l’utilisateur
            </h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>
                utiliser le Site conformément aux lois et règlements en vigueur
                ;
              </li>
              <li>ne pas porter atteinte aux droits de tiers ;</li>
              <li>
                ne pas introduire volontairement de virus, codes malveillants ou
                contenus illicites.
              </li>
            </ul>
            <p>
              L’utilisateur est seul responsable des informations qu’il transmet
              via le Site et de l’usage qu’il en fait.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              9. Limitation de responsabilité de l’organisateur
            </h3>
            <ul className="space-y-1 list-disc list-inside">
              <li>des interruptions, pannes ou dysfonctionnements du Site ;</li>
              <li>des intrusions illégales (piratage, virus, etc.) ;</li>
              <li>
                des dommages directs ou indirects subis par l’utilisateur ou des
                tiers du fait de l’utilisation du Site.
              </li>
            </ul>
            <p>
              En tout état de cause, la responsabilité de l’organisateur est
              limitée aux dommages directs et prouvés.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              10. Modification des CGU
            </h3>
            <p>
              L’organisateur peut modifier les présentes CGU à tout moment.
              Toute modification est opposable à l’utilisateur dès sa mise en
              ligne. L’utilisation continue du Site après modification vaut
              acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h3 className="pb-2 mb-4 text-2xl font-semibold border-b-2 border-muted md:text-3xl ">
              11. Droit applicable et juridiction compétente
            </h3>
            <p>
              Les présentes CGU sont régies par le droit marocain. Tout litige
              relatif à leur interprétation ou exécution relève de la compétence
              exclusive des juridictions marocaines.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
