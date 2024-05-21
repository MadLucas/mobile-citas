
import React, { useState } from 'react'
import { Modal, SafeAreaView, Text, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({ modalVisible, setModalVisible, setPacientes, pacientes, paciente: pacienteObj }) => {
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState(new Date())
    const [sintomas, setSintomas] = useState('')

    console.log(pacienteObj)

    const today = new Date()

    const handleCita = () => {
        // Validar

        if ([paciente, propietario, email, fecha, sintomas].includes('')) {
            Alert.alert(
                'Error',
                'todos los campos son obligatorios'
            )
        }
        const nuevoPaciente = {
            id: Date.now(),
            paciente,
            propietario,
            email,
            telefono, 
            fecha,
            sintomas
        }

        setPacientes([...pacientes, nuevoPaciente])
        setModalVisible(!modalVisible)

        setPaciente('')
        setPropietario('')
        setFecha('')
        setEmail('')
        setTelefono('')
        setFecha(new Date())
        setSintomas('')
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >

            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text
                        style={styles.titulo}
                    >Nueva {''}
                        <Text style={styles.tituloBold}>Cita</Text>
                    </Text>
                    <Pressable
                        style={styles.btnCancelar}
                        onLongPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.btnCancelarTexto}>
                            X Cancelar
                        </Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Nombre Paciente
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Firulais'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Nombre Propietario
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Email propietario
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='ejemplo@gmail.com'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Telefono propietario
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='+569 '
                            placeholderTextColor={'#666'}
                            keyboardType='phone-pad'
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={12}
                        />
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Fecha de Agendamiento
                        </Text>
                        <View style={styles.fechaContenedor}>
                            <DatePicker
                                date={fecha}
                                onDateChange={setFecha}
                                locale='es-ESP'
                                dividerColor='black'
                                minimumDate={today}
                            />
                        </View>
                    </View>
                    <View style={styles.campo}>
                        <Text style={styles.label}>
                            Sintomas
                        </Text>
                        <TextInput
                            style={[styles.input, styles.sintomasInput]}
                            placeholderTextColor={'#666'}
                            value={sintomas}
                            onChangeText={setSintomas}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>
                    <Pressable
                        style={styles.btnAgendarCita}
                        onPress={handleCita}
                    >
                        <Text style={styles.btnAgendarCitaTexto}>
                            Agendar Cita
                        </Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
        flex: 1,
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFF',
    },
    tituloBold: {
        fontWeight: '900'

    },
    campo: {
        marginTop: 10,
        marginHorizontal: 30,

    },
    label: {
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,

    },
    sintomasInput: {
        height: 100,
    },
    fechaContenedor: {
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    btnCancelar: {
        marginVertical: 30,
        marginTop: 20,
        backgroundColor: 'red',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10
    },
    btnCancelarTexto: {
        color: "#FFF",
        fontSize: 20,
        textAlign: "center",
        fontWeight: '900',
        textTransform: 'uppercase'

    },
    btnAgendarCita: {
        marginVertical: 30,
        marginTop: 20,
        backgroundColor: '#F59E0B',
        marginHorizontal: 30,
        padding: 20,
        borderRadius: 10

    },
    btnAgendarCitaTexto: {
        color: "#FFF",
        fontSize: 20,
        textAlign: "center",
        fontWeight: '900',
        textTransform: 'uppercase'

    }

})

export default Formulario
