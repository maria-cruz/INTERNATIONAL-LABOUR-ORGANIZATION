import React from "react";
import moment from "moment";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
  Image,
} from "@react-pdf/renderer";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100vw",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    flexGrow: 1,
    fontFamily: "Open Sans",
  },

  title: {
    fontSize: "44px",
    fontFamily: "Open Sans",
    fontWeight: "800",
    letterSpacing: "10px",
    marginBottom: "0px",
  },
  subtitle: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "8px",
    marginBottom: "18px",
  },
  acknowledge: {
    fontSize: "10.5px",
    letterSpacing: "2.5px",
  },

  divider: {
    marginTop: "10px",
    marginBottom: "20px",
    borderBottom: "1px solid #007a50",
    width: "120px",
  },

  studentName: {
    fontSize: "30px",
    textTransform: "uppercase",
    color: "#007a50",
    fontWeight: 600,
  },

  divider2: {
    marginTop: "10px",
    marginBottom: "10px",
    borderBottom: "1px solid #007a50",
    width: "420px",
  },

  participated: {
    fontSize: "10.5px",
    letterSpacing: "2.5px",
    marginBottom: "20px",
  },

  rights: {
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "4px",
    marginBottom: "10px",
  },

  date: {
    fontSize: "10.5px",
    marginBottom: "18px",
    textTransform: "uppercase",
  },
});

// Create Document Component

const MyDocument = ({ userData }) => {
  console.log(userData);

  const nameTitle = userData?.gender === "male" ? "Mr" : "Ms";
  const givenName = userData?.given_name ?? "";
  const familyName = userData?.family_name ?? "";

  const name = `${nameTitle}. ${givenName} ${familyName}`?.trim?.();
  const dateCreated = moment(userData?.created_at).format("MMM-DD-YYYY");

  return (
    <PDFViewer style={{ width: "100vw", minHeight: "100vh" }}>
      <Document>
        <Page size="A4" orientation="landscape" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>CERTIFICATE </Text>
            <Text style={styles.subtitle}>OF PARTICIPATION</Text>
            <Text style={styles.acknowledge}>ACKNOWLEDGING THAT</Text>
            <Text style={styles.divider}>{""}</Text>
            <Text style={styles.studentName}>{name}</Text>
            <Text style={styles.divider2}></Text>
            <Text style={styles.participated}>
              HAS PARTICIPATED IN THE TRAINING ON
            </Text>
            <Text style={styles.rights}>Rights & Responsibilities at Work</Text>
            <Text style={styles.date}>{dateCreated}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
