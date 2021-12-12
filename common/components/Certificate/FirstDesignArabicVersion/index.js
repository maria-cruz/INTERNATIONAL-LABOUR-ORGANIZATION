import React from "react";
import moment from "moment";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

Font.register({
  family: "Noto Naskh Arabic",
  fonts: [
    {
      src: "./fonts/NotoNaskhArabic.ttf",
    },
    {
      src: "./fonts/NotoNaskhArabicBold.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Tajawal Medium",
  fonts: [
    {
      src: "./fonts/TajawalMedium.ttf",
    },
  ],
});

const firstStyleArabicVersion = StyleSheet.create({
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
  },

  studentName: {
    fontSize: "32px",
    textTransform: "uppercase",
    color: "#007a50",
    position: "absolute",
    top: "265px",
    fontFamily: "Tajawal Medium",
  },

  backgroundImage: {
    width: "102vw",
    height: "100vh",
    position: "absolute",
  },
  date: {
    fontSize: "10.5px",
    textTransform: "uppercase",
    position: "absolute",
    top: "370px",
    left: "345px",
    fontWeight: "bold",
  },
});

const FirstDesignArabicVersion = ({ userData }) => {
  const nameTitle = userData?.gender === "male" ? "Mr" : "Ms";
  const givenName = userData?.given_name ?? "";
  const familyName = userData?.family_name ?? "";

  const name = `${nameTitle}. ${givenName} ${familyName}`?.trim?.();
  const dateCreated = moment(userData?.created_at).format("MMM-DD-YYYY");

  return (
    <>
      <Page
        size="A4"
        orientation="landscape"
        style={firstStyleArabicVersion.page}
      >
        <View style={firstStyleArabicVersion.container}>
          <Image
            src="./images/ILOCertificateVer1Arabic.jpg"
            style={firstStyleArabicVersion.backgroundImage}
          />

          <View style={firstStyleArabicVersion.content}>
            <Text style={firstStyleArabicVersion.studentName}>{name}</Text>
            <Text style={firstStyleArabicVersion.date}>{dateCreated}</Text>
          </View>
        </View>
      </Page>
      <Page
        size="A4"
        orientation="landscape"
        style={firstStyleArabicVersion.page}
      >
        <View style={firstStyleArabicVersion.container}>
          <Image
            src="./images/ILOCertificateVer1-2Arabic.jpg"
            style={firstStyleArabicVersion.backgroundImage}
          />
        </View>
      </Page>
    </>
  );
};

export default FirstDesignArabicVersion;
