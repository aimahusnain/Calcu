'use client'

import HeartRateCard from "@/components/HeartRateCard";
import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-5">
      <motion.h3
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-4xl font-sans"
      >
        Overview
      </motion.h3>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="my-7 flex gap-4"
      >
        <motion.div variants={item}>
          <HeartRateCard type="Purple" title="Target" description="80 BPM" />
        </motion.div>
        <motion.div variants={item}>
          <HeartRateCard type="Blue" title="Blood Pressure" description="80 BPM" />
        </motion.div>
        <motion.div variants={item}>
          <HeartRateCard type="Pink" title="Glucose Level" description="80 BPM" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
