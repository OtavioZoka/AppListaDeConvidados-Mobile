import { useState } from "react";
import { Alert } from "react-native";
export const useParticipants = ()=>{
    const [inputValue, setInputValue] = useState<string>('');
    const [participants, setparticipants] = useState<Array<string>>([]);

   
    const handleInputChange = (text:string) => {
      setInputValue(text);
    };
  
    const handleParticipantAdd = (name:string) => {
      if(participants.includes(name)){
        return Alert.alert('Participante ja existe!',"O participante em questão ja foi cadastrado no evento.")
      }
      setparticipants(participants=>[...participants,name])
      setInputValue('');
    };

    const handleParticipantRemove = (name: string) => {
      Alert.alert('Excluir',`Deseja remover ${name}?`,
      [
        {
          text:'sim',
          onPress:()=>{   setparticipants(participants => participants.filter(participante=>participante!== name));
            Alert.alert('',`Usuário ${name} removido com sucesso!`)
        }},
        {
          text:'não',
          style:'cancel'
        }   
    ])
   
    };

    return  {
        handleInputChange,
        handleParticipantAdd,
        handleParticipantRemove,
        inputValue,
        participants
    }
}