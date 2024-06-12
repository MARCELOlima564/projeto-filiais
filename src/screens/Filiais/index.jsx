import { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";
import filiaisRepository from "../../models/Listafiliais";

export default function Filial() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allSchools, setAllSchools] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const schools = filiaisRepository.getAll();
      setAllSchools(schools);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Escolas</Text>
      <View style={styles.titlePage}>
      <Text style={styles.title}>cadastradas</Text>
      </View>

      {allSchools.length > 0 ? (
        <View>
          {allSchools.map((school) => (
            <View key={school.id} style={styles.schoolItem}>
              <View>
                <Text style={styles.schoolName}>{school.nome}</Text>
              </View>

              <View style={styles.schoolActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() => navigation.navigate("Profile", { data: school })}
                >
                  <Text style={styles.textButton}>Detalhes</Text>
                </TouchableOpacity>
              </View>
              </View>
          ))}
        </View>
      ) : (
        <Text>Não há escolas cadastradas</Text>
      )}
    </View>
  );
}