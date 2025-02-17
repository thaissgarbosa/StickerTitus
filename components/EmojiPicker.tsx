import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, onClose, children }: Props) {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#FFF" size={12} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}
 
const styles = StyleSheet.create({
    modalContent:{
        height: "25%",
        width: "100%",
        backgroundColor: "#25292E",
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
    titleContainer:{
        height: "16%",
        backgroundColor: "#464C55",
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        color: "#FFF",
        fontSize: 16,
    },
});