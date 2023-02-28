import { useState } from 'react';
import { FlatList, Alert, TextInput, Keyboard } from 'react-native'

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Filter } from "@components/Filter";

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState(['João', 'Vinycius', 'Crystiano', 'Mateus']);

  return(
    <Container>
      <Header showBackButton/>

      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input 
          placeholder="Nome da pessoa" 
          autoCorrect={false}
        />

        <ButtonIcon  
          icon="add"
        />
      </Form>

      <HeaderList>
        <FlatList 
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter 
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
    </Container>
  )
}