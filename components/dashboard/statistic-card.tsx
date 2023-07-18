import React from "react";

import { AccessCard1 } from "./access-card1";
import { AccessCard2 } from "./access-card2";

export const StatisticCard = () => {
  return (
    <div className=" flex gap-8">
      <AccessCard1 />
      <AccessCard2 />
    </div>
  );
};
