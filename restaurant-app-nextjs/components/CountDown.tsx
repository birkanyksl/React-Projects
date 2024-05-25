"use client";

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-05-26");

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Countdown date={endingDate} className="font-bold text-bg-gold text-5xl" />
  );
};

export default CountDown;
