import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { t } = useTranslation();

  return (
    <Typewriter
      options={{
        strings: [
          t("type.professionalTrainer"),
          t("type.ipfProfessionalSportsman"),
          // t("type.ipfWorldMedalist"),
          // t("type.multipleNationalChampion"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
        delay: 60,
      }}
    />
  );
}

export default Type;
