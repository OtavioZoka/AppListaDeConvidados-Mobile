import {
 FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Container, styles } from "./styles";
import { Participant } from "../../components/Participant";
import {
  useParticipants
} from "../../hook/useParticipants"

export default function Home() {
 const { handleInputChange,
 handleParticipantAdd,
 handleParticipantRemove,
 inputValue,
 participants} = useParticipants();

  return (
    <Container>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          onChangeText={handleInputChange}
          placeholderTextColor="#6b6b6b"
          value={inputValue}
        />
        <TouchableOpacity style={styles.button} onPress={()=>handleParticipantAdd(inputValue)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant)=>(
           <Participant key={participant} name={participant} onRemove={()=>{handleParticipantRemove(participant)}}/>
        ))}
       </ScrollView> */}

      <FlatList 
        data={participants} 
        keyExtractor={item => item} 
        renderItem={({item})=>(
          <Participant
          key={item}
          name={item}
          onRemove={()=>handleParticipantRemove(item)}
          />
        )} />
    </Container>
  );
}
