import React from "react";
import moment from "moment";
// import testImage from "./images/bg-certificate-v1.jpg";
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

  container: {
    position: "relative",
    width: "100vw",
  },

  content: {
    display: "flex",
    width: "100vw",
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
    marginBottom: "30px",
  },

  backgroundImage: {
    width: "100vw",
    height: "100vh",
    position: "absolute",
  },
  primaryLogo: {
    width: "111px",
    height: "98px",
    position: "absolute",
    top: "30px",
    right: "30px",
  },

  sponsorContainerTop: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  iloLogo: {
    width: "110px",
    height: "40px",
    marginRight: "20px",
  },
  arLogo: {
    width: "80px",
    height: "30px",
    marginRight: "20px",
  },
  iaLogo: {
    width: "50px",
    height: "40px",
    marginRight: "20px",
  },
  unicefLogo: {
    width: "70px",
    height: "45px",
    marginRight: "20px",
  },
  fenasolLogo: {
    width: "50px",
    height: "50px",
  },

  sponsorContainerBottom: {
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  aliLogo: {
    width: "80px",
    height: "50px",
    marginRight: "20px",
  },
  wiscLogo: {
    width: "135px",
    height: "35px",
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
          <View styles={styles.container}>
            <Image
              src="./images/bg-certificate-v1.jpg"
              style={styles.backgroundImage}
            />
            <Image
              src="./images/sponsors/ilo-logo-1.png"
              style={styles.primaryLogo}
            />

            <View style={styles.content}>
              <Text style={styles.title}>CERTIFICATE </Text>
              <Text style={styles.subtitle}>OF PARTICIPATION</Text>
              <Text style={styles.acknowledge}>ACKNOWLEDGING THAT</Text>
              <Text style={styles.divider}>{""}</Text>
              <Text style={styles.studentName}>{name}</Text>
              <Text style={styles.divider2}></Text>
              <Text style={styles.participated}>
                HAS PARTICIPATED IN THE TRAINING ON
              </Text>
              <Text style={styles.rights}>
                Rights & Responsibilities at Work
              </Text>
              <Text style={styles.date}>{dateCreated}</Text>
              <View style={styles.sponsorContainerTop}>
                <Image
                  src="./images/sponsors/ilo-logo.png"
                  style={styles.iloLogo}
                />
                <Image src="./images/sponsors/logo.png" style={styles.arLogo} />
                <Image
                  src="./images/sponsors/italian-agency-logo.png"
                  style={styles.iaLogo}
                />
                <Image
                  src="./images/sponsors/unicef-logo.png"
                  style={styles.unicefLogo}
                />
                <Image
                  src="./images/sponsors/fenasol-logo.jpeg"
                  style={styles.fenasolLogo}
                />
              </View>
              <View style={styles.sponsorContainerBottom}>
                <Image
                  src="./images/sponsors/ali-logo.png"
                  style={styles.aliLogo}
                />
                <Image
                  src="./images/sponsors/wisc-international-logo.png"
                  style={styles.wiscLogo}
                />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
