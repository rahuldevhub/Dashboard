import React from "react";
import SummaryCard from "../../Pages/Home/SummaryCard";
import { generateRandomTotal } from "../Reusable/Function";

const SummaryCards = () => {
  return (
    <>
      <SummaryCard
        summaryTitle="Total SAles"
        summaryPercentage={generateRandomTotal(100000).percentageCalculator}
        summaryDescriptionTitle="Total sales in 4 weeks"
        summaryTotal={`$${generateRandomTotal(100000).formattedRandomTotal}`}
        summaryStartTime="Last Week"
        summaryStartTotal={`$${
          generateRandomTotal(10000).formattedRandomTotal
        }`}
        summaryEndTime="Last Month"
        summaryEndTotal={`$${generateRandomTotal(100000).formattedRandomTotal}`}
      />
      <SummaryCard
        summaryTitle="Average Footfall"
        summaryPercentage={generateRandomTotal(10000).percentageCalculator}
        summaryDescriptionTitle="Average footfall in 4 weeks"
        summaryTotal={generateRandomTotal(10000).formattedRandomTotal}
        summaryStartTime="Last Week"
        summaryStartTotal={generateRandomTotal(1000).formattedRandomTotal}
        summaryEndTime="Last Month"
        summaryEndTotal={generateRandomTotal(10000).formattedRandomTotal}
      />
      
      <SummaryCard
        summaryTitle="New Users"
        summaryPercentage={generateRandomTotal(1000).percentageCalculator}
        summaryDescriptionTitle="New users in 4 weeks"
        summaryTotal={generateRandomTotal(1000).formattedRandomTotal}
        summaryStartTime="Last Week"
        summaryStartTotal={generateRandomTotal(100).formattedRandomTotal}
        summaryEndTime="Last Month"
        summaryEndTotal={generateRandomTotal(1000).formattedRandomTotal}
      />
    </>
  );
};

export default SummaryCards;
