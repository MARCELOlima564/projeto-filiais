import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import filiaisRepository from "../../models/Listafiliais";

export default function Profile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editSchool = () => {
    navigation.navigate("Form", { school: data, edit: true });
  }

  const deleteSchool = () => {
    filiaisRepository.delete(data.id);
    navigation.navigate("Schools");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.nome}</Text>

      {data ? (
        <Text style={styles.textButton}>Informações da escola</Text>
      ) : (
        <Text>Selecione uma escola para exibir seus detalhes</Text>
      )}

      <View style={styles.school}>
        <Text style={styles.subtitleDetalhes}>Detalhes</Text>
        <Text style={styles.text}>{data.nome}</Text>
        <Text style={styles.text}>{data.fundacao}</Text>
        <Text style={styles.text}>{data.corPrimaria}</Text>
        <Text style={styles.text}>{data.corSecundaria}</Text>
        <Text style={styles.text}>{data.qntdFuncionarios}</Text>
        <Text style={styles.text}>{data.qntdAlunos}</Text>
        <Text style={styles.text}>{data.qntdTurmas}</Text>
        <Text style={styles.text}>{data.bairro}</Text>
        <Text style={styles.text}>{data.cidade}</Text>
        <Text style={styles.text}>{data.cep}</Text>
        <Text style={styles.text}>{data.telefone}</Text>
        <Text style={styles.text}>{data.nomeDoResponsavel}</Text>
        <Text style={styles.text}>{data.cargoDoResponsavel}</Text>

        <View style={styles.schoolActions}>
          <TouchableOpacity style={styles.editButton} onPress={editSchool}>
            <Text style={styles.textButton}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deleteSchool}>
            <Text style={styles.textButton}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
