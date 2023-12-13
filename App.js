import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import teamsData from './contract.json';

export default function App() {
  const teams = Object.entries(teamsData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Teams Soccer</Text>
      <View style={styles.row}>
        {teams.slice(0, 2).map(([teamName, players], index) => (
          <View key={teamName} style={[styles.teamContainer, {backgroundColor: index === 0 ? '#3A9900' : '#007D99'}]}>
            <Text style={styles.teamTitle}>{teamName}</Text>
            {players.map((player) => (
              <Text key={player.name} style={styles.player}>{player.name} - Score: {player.score}</Text>
            ))}
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {teams.slice(2).map(([teamName, players], index) => (
          <View key={teamName} style={[styles.teamContainer, {backgroundColor: index === 2 ? '#3A9900' : '#005A6D'}]}>
            <Text style={styles.teamTitle}>{teamName}</Text>
            {players.map((player) => (
              <Text key={player.name} style={styles.player}>{player.name} - Score: {player.score}</Text>
            ))}
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // flexWrap: 'wrap',
  },
  teamContainer: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    width: '30%', // This makes the boxes responsive
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  player: {
    color: '#fff',
    textAlign: 'center',
  },
});