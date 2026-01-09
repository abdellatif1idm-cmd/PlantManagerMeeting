const RegistrationEmail = ({
  eventName = "",
  eventDate = "",
  eventLocation = "",
  fullName = "",
  primaryColor = "#0E2544",
  accentColor = "#00BCE3",
  contactEmail = "contact@industries.com",
  imageUrl = "",
  year = new Date().getFullYear(),
}) => {
  return `<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 10px;">
          <div style="max-width: 600px; width: 100%; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  
            <!-- Header -->
            <div style="background: linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%); padding: 25px 20px; text-align: center; color: #ffffff;">
              <h1 style="font-size: clamp(18px, 5vw, 24px); font-weight: 700; margin: 0; line-height: 1.3;">
                ${eventName}
              </h1>
            </div>
  
            <!-- Content -->
            <div style="padding: 25px 20px; color: #333333; line-height: 1.7;">
              <p style="font-size: 16px; color: ${primaryColor}; font-weight: 600;">
                Bonjour ${fullName},
              </p>
  
              <p style="font-size: 15px; color: #555555;">
                Nous vous confirmons la bonne réception de votre inscription à l’événement <strong>${eventName}</strong>.
              </p>
  
              <p style="font-size: 15px; color: #555555;">
                Votre demande a bien été enregistrée. Des informations complémentaires vous seront communiquées prochainement.
              </p>
  
              <!-- Event Info -->
              <div style="background-color: #f9f5ff; border-left: 4px solid ${accentColor}; padding: 15px; margin: 20px 0; border-radius: 4px; font-weight: 500;">
                <strong>Date :</strong> <span style="color:${accentColor};">${eventDate}</span><br />
                <strong>Lieu :</strong> ${eventLocation}
              </div>
  
              <p style="font-size: 15px; color: #555555;">
                Nous restons à votre disposition pour toute information complémentaire.
              </p>
  
              <p style="margin-top: 20px; font-size: 14px; color: #555555;">
                Cordialement,<br />
                <strong style="color: ${primaryColor};">L’équipe organisatrice</strong>
              </p>
            </div>

            <div style="width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:10px;">
            <img style="max-width:100%;" src="${imageUrl}" alt="Banner" ></img>
            </div>
  
            <!-- Footer -->
            <div style="background-color: ${primaryColor}; color: #ffffff; padding: 20px 15px; text-align: center; font-size: 13px;">
              <p style="margin-bottom: 5px; opacity: 0.9;">${eventName}</p>
              <p style="margin-bottom: 5px; opacity: 0.9;">${contactEmail}</p>
              <p style="margin-top: 10px; font-size: 11px; opacity: 0.7;">© ${year} Tous droits réservés</p>
            </div>
  
          </div>
        </div>`;
};

export default RegistrationEmail;
