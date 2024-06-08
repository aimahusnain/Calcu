

import React from "react";
import { Target } from "lucide-react";
import { motion } from "framer-motion";

interface HeartRateCardProps {
  title: string;
  description: string;
  type: "Purple" | "Blue" | "Pink";
}

const HeartRateCard: React.FC<HeartRateCardProps> = ({
  title,
  description,
  type,
}) => {
  const definetype =
    type === "Purple"
      ? "#bbcbff"
      : type === "Blue"
      ? "#bae9fe"
      : "#f4c5ff";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5 }} // Move the card up by 5px when hovered
      style={{ backgroundColor: definetype }}
      className="rounded-2xl p-6 w-[17rem] shadow-lg"
    >
      <div className="p-3 bg-white w-fit rounded-2xl mb-5">
        <Target className="text-blue-500" />
      </div>
      <h1 className="font-bold text-xl mb-1">{title}</h1>
      <p>{description}</p>
    </motion.div>
  );
};

export default HeartRateCard;
