import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable onPress={onPress} >
      <MaterialIcons name={icon} size={24} color="#FFF" />
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#FFF",
    marginTop: 12,
  },
});
