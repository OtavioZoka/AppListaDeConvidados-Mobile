import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type IProps = {
  name: string;
  onRemove: ()=>void;
};

export const Participant = ({ name, onRemove }: IProps) => {
  return (
    <View style={styles.container} >
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
