/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
 */
const propertyId = "292583850"; // Rights And Responsibilities At Work Property

// Imports the Google Analytics Data API client library.
const { BetaAnalyticsDataClient } = require("@google-analytics/data");

// Using a default constructor instructs the client to use the credentials
// specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.

const analyticsDataClient = new BetaAnalyticsDataClient({
  projectId: process.env.GOOGLE_PROJECT_ID,
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
});

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
      {
        name: "active1DayUsers",
      },
      {
        name: "active7DayUsers",
      },
      {
        name: "active28DayUsers",
      },
      {
        name: "activeUsers",
      },
    ],
  });

  let modifiedResponse = {};

  response.metricHeaders.forEach((header, idx) => {
    modifiedResponse = {
      ...modifiedResponse,
      [header.name]: response.rows[0].metricValues[idx].value,
    };
  });

  return modifiedResponse;
}

export default async (req, res) => {
  try {
    const pageViewReport = await runReport();
    res.status(200).json(pageViewReport);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
