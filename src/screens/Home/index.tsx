import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export default function Home() {
  const participants = [
    "Rodrigo",
    "Vini",
    "Diego",
    "Biro",
    "jose",
    "miguel",
    "andre",
    "diego",
  ];

  function handleParticipantAdd() {}
  function handleParticipantRemove() {
    console.log("testeremove");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento </Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022. </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEnptyText}>
            Niguém chegou no evento ainda ? Adicione participantes a sua lista
            de presença
          </Text>
        )}
      />
    </View>
  );
}
