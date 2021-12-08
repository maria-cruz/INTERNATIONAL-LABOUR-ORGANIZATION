import React from "react";
import moment from "moment";
import firstStyleEnglishVersion from "./firstStyleEnglishVersion";
import FirstDesignArabicVersion from "./FirstDesignArabicVersion";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const MyDocument = ({ userData }) => {
  const nameTitle = userData?.gender === "male" ? "Mr" : "Ms";
  const givenName = userData?.given_name ?? "";
  const familyName = userData?.family_name ?? "";

  const name = `${nameTitle}. ${givenName} ${familyName}`?.trim?.();
  const dateCreated = moment(userData?.created_at).format("MMM-DD-YYYY");

  return (
    <PDFViewer style={{ width: "100vw", minHeight: "100vh" }}>
      <Document>
        <Page
          size="A4"
          orientation="landscape"
          style={firstStyleEnglishVersion.page}
        >
          <View style={firstStyleEnglishVersion.container}>
            <Image
              src="./images/ILOCertificateVer1English.jpg"
              style={firstStyleEnglishVersion.backgroundImage}
            />

            <View style={firstStyleEnglishVersion.content}>
              <Text style={firstStyleEnglishVersion.studentName}>{name}</Text>
              <Text style={firstStyleEnglishVersion.date}>{dateCreated}</Text>
            </View>
          </View>
        </Page>
        <Page
          size="A4"
          orientation="landscape"
          style={firstStyleEnglishVersion.page}
        >
          <View style={firstStyleEnglishVersion.container}>
            <Image
              src="./images/ILOCertificateVer1-2English.jpg"
              style={firstStyleEnglishVersion.backgroundImage}
            />
          </View>
        </Page>

        <FirstDesignArabicVersion userData={userData} />
      </Document>
    </PDFViewer>
  );
};

export default MyDocument;
