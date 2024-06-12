import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import styles from "./styles";
import StyleTextInput from "../../components/Text/index"

import filiaisRepository from "../../models/Listafiliais";
import Filiais from "../../models/Filiais";

export default function Form({ route }) {
  let{ school, edit } = route.params;

  const [nome, setNome] = useState("");
  const [fundacao, setFundacao] = useState("");
  const [corPrimaria, setCorPrimaria] = useState("");
  const [corSecundaria, setCorSecundaria] = useState("");
  const [qntdFuncionarios, setQntddFuncionarios] = useState("");
  const [qntdAlunos, setQntddAlunos] = useState("");
  const [qntdTurmas, setQntddTurmas] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeDoResponsavel, setNomeDoResponsavel] = useState("");
  const [cargoDoResponsavel, setCargoDoResponsavel] = useState("");
  const [isUpdate, setIsUpdate] = useState(edit);
  
  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setNome(school.nome);
      setFundacao(school.fundacao);
      setCorPrimaria(school.corPrimaria);
      setCorSecundaria(school.corSecundaria);
      setQntddFuncionarios(school.qntdFuncionarios);
      setQntddAlunos(school.qntdAlunos);
      setQntddTurmas(school.qntdTurmas);
      setBairro(school.bairro);
      setCidade(school.cidade);
      setCep(school.cep);
      setTelefone(school.telefone);
      setEmail(school.email);
      setNomeDoResponsavel(school.nomeDoResponsavel);
      setCargoDoResponsavel(school.cargoDoResponsavel);
      setIsUpdate(true);
    } else {
      clearInputs();
    }
  }, [filial, edit]);

  const handleSchoolAction = () => {
    if (isUpdate) {
      filiaisRepository.Update(school.id, nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntdAlunos, qntdTurmas, bairro, cidade,
        cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0);
      clearInputs();
      if (nome == "" || fundacao == "" || corPrimaria == "" || corSecundaria == "", qntdFuncionarios == "" ||
       qntdAlunos == "" || qntdTurmas == "" || bairro == "" || cidade == "" || cep == "" || telefone == "" ||
       email == "" || nomeDoResponsavel == "" || cargoDoResponsavel == "") {
        clearInputs();
      }else {
        const newSchool = new Filiais(nome, fundacao, corPrimaria, corSecundaria, qntdFuncionarios, qntdAlunos, qntdTurmas, bairro, cidade,
          cep, telefone, email, nomeDoResponsavel, cargoDoResponsavel || 0);
        filiaisRepository.add(newSchool);
        clearInputs();
      }
    }
    navigation.navigate("Schools");
  }

  const clearInputs = () => {

    setIsUpdate(false);
    edit = false;
    setNome("");
      setFundacao("");
      setCorPrimaria("");
      setCorSecundaria("");
      setQntddFuncionarios("");
      setQntddAlunos("");
      setQntddTurmas("");
      setBairro("");
      setCidade("");
      setCep("");
      setTelefone("");
      setEmail("");
      setNomeDoResponsavel("");
      setCargoDoResponsavel("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isUpdate ? "Editar Escola" : "Crie sua Escola"}</Text>
      <ScrollView>
      <TextInput
        placeholder="nome da escola"
        style={styles.schoolInput}
        onChangeText={setNome}
        value={nome}
      />
      <TextInput
        placeholder="ano de Fundação da Escola"
        style={styles.schoolInput}
        onChangeText={setFundacao}
        value={fundacao}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="cor Primária representante da Escola"
        style={styles.schoolInput}
        onChangeText={setCorPrimaria}
        value={corPrimaria}
      />
      <TextInput
        placeholder="cor Secundária representante da Escola"
        style={styles.schoolInput}
        onChangeText={setCorSecundaria}
        value={corSecundaria}
      />
      <TextInput
        placeholder="quantidade de funcionários"
        style={styles.schoolInput}
        onChangeText={setQntddFuncionarios}
        value={qntdFuncionarios}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="quantidade de Alunos"
        style={styles.schoolInput}
        onChangeText={setQntddAlunos}
        value={qntdAlunos}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="quantidade de turmas"
        style={styles.schoolInput}
        onChangeText={setQntddTurmas}
        value={qntdTurmas}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="bairro que a instuição é localizada"
        style={styles.schoolInput}
        onChangeText={setBairro}
        value={bairro}
      />
      <TextInput
        placeholder="cidade onde a instituição é localizada"
        style={styles.schoolInput}
        onChangeText={setCidade}
        value={cidade}
      />
      <TextInput
        placeholder="CEP da instituição"
        style={styles.schoolInput}
        onChangeText={setCep}
        value={cep}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="telefone da instituição"
        style={styles.schoolInput}
        onChangeText={setTelefone}
        value={telefone}
        keyboardType="name-phone-pad"
        maxLength={11}
      />
      <TextInput
        placeholder="email da instituição"
        style={styles.schoolInput}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        maxLength={100} 
      />
      <TextInput
        placeholder="nome do responsável da instituição"
        style={styles.schoolInput}
        onChangeText={setNomeDoResponsavel}
        value={nomeDoResponsavel}
        maxLength={100} 
      />
      <TextInput
        placeholder="cargo do responsável pela instituição"
        style={styles.schoolInput}
        onChangeText={setCargoDoResponsavel}
        value={cargoDoResponsavel}
        maxLength={100} 
      />

      <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={handleSchoolAction}>
        <Text style={styles.text}>{isUpdate ? "Salvar Alterações" : "Fundar Escola"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.buttonCancel} onPress={clearInputs}>
          <Text style={styles.text}>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
      </View>
      </ScrollView>
    </View>
  );
}