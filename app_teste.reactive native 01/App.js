import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

// Componente da página inicial
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem-vindo ao app!!</Text>
      <Pressable
        onPress={() => navigation.navigate('Curriculo')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginTop: 10,
        }}>
        <Text>Curriculo</Text>
      </Pressable>
    </View>
  );
}

// Componente da página de currículo
function Curriculo() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Formação</Text>
      <Text>Graduação em Design de Interiores pela Universidade WYDEN/FBV (2019.1)</Text>
      <Text>Graduando em Análise e Desenvolvimento de Sistemas (ADS) pela Faculdade SENAC PE (3º Período) - Previsão de conclusão em (2024.2)</Text>

      <Text>Habilidades Pessoais</Text>
      <Text>Flexibilidade; Iniciativa; Trabalho em equipe; Compreensão interpessoal; Empatia; Pontualidade; Responsabilidade; Capacidade para a resolução de problemas; Comunicativa; Planejamento de tarefas.</Text>

      <Text>Conhecimentos Extracurriculares</Text>
      <Text>Curso de AutoCad – 2019 - Universidade WYDEN/FBV</Text>
      <Text>Curso de Photoshop - 2019 - Universidade WYDEN/FBV</Text>
      <Text>Curso de inglês Mairo Vergara – 2018 – EAD</Text>
      <Text>Curso SCRUM FOUNDATION PROFESSIONAL – SFPC - 2022</Text>
      <Text>Curso Gustavo Guanabara HTML-CSS - 2023</Text>
      <Text>Curso Gustavo Guanabara Banco de Dados - 2023</Text>

      <Text>Idiomas</Text>
      <Text>Inglês – Intermediário</Text>
      <Text>Espanhol - Básico</Text>
    </View>
  );
}

// Criação do navegador
const Stack = createStackNavigator();

// Componente principal
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Curriculo" component={Curriculo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
