import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Tajawal Medium",
  fonts: [
    {
      src: "./fonts/TajawalMedium.ttf",
    },
  ],
});

const firstStyleEnglishVersion = StyleSheet.create({
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
    fontFamily: "Helvetiva Neue",
  },

  studentName: {
    fontSize: "32px",
    textTransform: "uppercase",
    color: "#007a50",
    position: "absolute",
    top: "265px",
    fontFamily: "Tajawal Medium",
  },

  date: {
    fontSize: "10.5px",
    textTransform: "uppercase",
    position: "absolute",
    top: "380px",
    fontWeight: "bold",
  },

  backgroundImage: {
    width: "102vw",
    height: "100vh",
    position: "absolute",
  },
});

export default firstStyleEnglishVersion;
