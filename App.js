import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Picker
} from 'react-native';
import { TextInput } from 'react-native-paper';

const App = () => {
	const [number, setNumber] = useState("");
	const [secondNumber, setSecondNumber] = useState("");
	const [clicked, setClicked] = useState(false);
	const [operator, setOperator] = useState('+');
	const [answer, setAnswer] = useState("");
	const [operand, setOperand] = useState("1");

	return (
		<View style={styles.main}>
			{
				clicked ? (
					<View style={{ alignItems:"center" }}>
						<View style={{flexDirection:'row', width:"100%"}}>
							<View style={styles.marginNumber}>
								<Text style={styles.heading}>
									{number}
								</Text>
							</View>
							<View style={styles.marginNumber}>
								<Text style={styles.heading}>
									{secondNumber}
								</Text>
							</View>
							<View style={styles.marginNumber}>
								<Text style={styles.heading}>
									{operator}
								</Text>
							</View>
						</View>
						<View>
							<Text style={styles.heading}>=</Text>
						</View>
						<View >
							<Text style={styles.heading}>{answer}</Text>
						</View>
						<View style={{flexDirection:'row'}}>
							<View style={{marginRight:"5%"}}>
								<Picker
									selectedValue={operator}
									style={{ height: 50, width: 150 }}
									onValueChange={(itemValue) => setOperator(itemValue)}
								>
									<Picker.Item label="+" value="+" />
									<Picker.Item label="-" value="-" />
									<Picker.Item label="*" value="*" />
									<Picker.Item label="/" value="/" />
								</Picker>
							</View>
							<View style={{width:"40%", marginLeft:"5%"}}>
								<TextInput 
									keyboardType='numeric' 
									label="Operand"
									value={operand} 
									style={styles.text} 
									onChangeText={(operand) => {
										setOperand(operand);
										if(operand != ""){
											setSecondNumber(parseInt(number)+parseInt(operand))
										}
									}}
								/>
							</View>
						</View>
						<View style={styles.text} >
							<Button title="Add Operation" onPress={() => {
								switch(operator) {
									case '+':
										setAnswer(parseInt(number)+parseInt(secondNumber))
										break;
									case '-':
										setAnswer(parseInt(number)-parseInt(secondNumber))
										break;
									case '*' :
										setAnswer(parseInt(number)*parseInt(secondNumber))
										break;
									case '/':
										setAnswer(parseInt(number)/parseInt(secondNumber))
										break;
								}
							}} />
						</View>
					</View>
				) : (
					<View>
						<View style={styles.text}>
							<Text style={{textAlign:"center",padding:"5%",fontSize:50}}>
								Expression Evaluator
							</Text>
						</View>
						<View style={{padding:"5%"}}>
							<TextInput 
								keyboardType='numeric'
								label="Please Enter a number"
								value={number}
								onChangeText={number => {
									setNumber(number);
									setSecondNumber(parseInt(number)+1)
								}}
							/>
						</View>

						<View style={{padding:"5%"}}>
							<Button title="Add Number" onPress={() => setClicked(true)}/>
							</View>
					</View>
				)
			}
		</View>
	);
};

const styles = StyleSheet.create({
	main:{
		width: "100%",
		height:"100%",
		justifyContent:"center"
	},
	text:{
		width:"100%",
		marginBottom: '5%',
	},
	heading:{
		fontSize: 50
	},
	marginNumber:{
		margin:"10%",
		backgroundColor:'lightblue',
		padding:"5%"
	}
});

export default App;
