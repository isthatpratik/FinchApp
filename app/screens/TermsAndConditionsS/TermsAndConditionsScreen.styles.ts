import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "100%",
    height: 120, // Total height for the header
    justifyContent: "center", // Center the content vertically
    alignItems: "center",
    borderBottomWidth: 3,
    borderColor: "#0F0F0F",
  },
  yellowRectangle: {
    height: "90%", // Yellow rectangle that takes most of the header height
    backgroundColor: "#FFEE00", // Yellow color
    width: "100%", // Full width of the screen
  },
  gradientRectangle: {
    height: "10%", // The height of the gradient part
    width: "100%", // Full width of the screen
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    position: "absolute",
    top: "50%",
  },
  content: {
    flex: 1,
    padding: 32,
    paddingBottom: 100,
  },

  listItem: {
    flexDirection: "row", 
    marginBottom: 12, 
    flexWrap: "wrap", 
  },
  bullet: {
    fontSize: 14, 
    marginRight: 10, 
    color: "#000", 
  },
  text: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20, 
    fontFamily: "PoppinsMedium",
    flexShrink: 1, 
    width: "90%",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 32,
    backgroundColor: "#FFF",
    width: "95%",
    position: "absolute", // Position footer at the bottom
    bottom: -8, // Align it at the bottom of the screen
  },
  declineButton: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    borderRadius: 2,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
    borderRadius: 2,
    height: 48,
  },
  acceptText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  declineText: {
    color: "#0F0F0F",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default styles;
