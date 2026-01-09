import React from "react";

const DateStringText = ({ date }: { date: string }) => {
  return (
    <div>
      {new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })}
    </div>
  );
};

export default DateStringText;
