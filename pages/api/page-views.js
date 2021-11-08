/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
const propertyId = "292583850"; // Rights And Responsibilities At Work Property

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
const analyticsDataClient = new BetaAnalyticsDataClient();

// Runs a simple report.
async function runReport() {
  const [response] = await analyticsDataClient.runReport({
    property: `properties/${propertyId}`,
    dateRanges: [
      {
        startDate: "2021-11-01",
        endDate: "today",
      },
    ],
    dimensions: [],
    metrics: [
      {
        name: "screenPageViews",
      },
    ],
  });

  return response;
}

export default async (req, res) => {
  try {
    const pageViewReport = await runReport();
    res.status(200).json(pageViewReport);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
