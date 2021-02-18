import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import Modal from 'react-native-modal';
import api from '../../services/api';


export default function FeedModal() {
    const [form, setForm] = useState([register]);
    const { register, handleSubmit, setValue, } = useForm({ defaultValues: { title: '', description: '' } });
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        register({ title: 'title' })
        register({ description: 'description' })
    }, [register]);

    const onSubmit = data => {
        api.post('/posts/1/create', { title: 'title', description: 'description' })
            .then(JSON.stringify(data))
            .then(setForm(data));
        console.log(data);
    }

    const toogleModal = () => {
        setModalVisible(!isModalVisible);
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={toogleModal} title="Nova Publicação" style={styles.ButtonOpen}>
                <Text style={{ color: 'white', fontFamily: 'Montserrat_400Regular', textAlign: 'center', marginTop: 6.6 }}>Novo Post</Text>
            </TouchableOpacity>
            <Modal animationIn="fadeIn"
                hideModalContentWhileAnimating={true}
                animationOut="fadeOutDown"
                isVisible={isModalVisible}
                style={{ margin: 10 }}
                onBackdropPress={() => setModalVisible(false)}>

                <View style={styles.Card}>
                    <View style={styles.pubCard}>
                        <Text style={styles.intro}>Criar publicação</Text>
                        <TextInput
                            id="title"
                            name="title"
                            ref={register("title")}
                            onChangeText={text => setValue("title", text, { shouldValidate: true })}
                            multiline={true}
                            style={styles.titleInput}
                            placeholder="Titulo">
                        </TextInput>
                    </View>

                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.upload} title="Selecionar Foto" >
                            <Text style={{ color: 'white', fontFamily: 'Montserrat_400Regular', textAlign: 'center' }}>Selecionar Foto</Text>
                        </TouchableOpacity>
                    </View>

                    <KeyboardAvoidingView style={styles.descView}>
                        <TextInput
                            id="description"
                            name="description"
                            ref={register("description")}
                            onChangeText={text => setValue("description", text)}
                            multiline={true}
                            style={styles.descInput}
                            placeholder="Nos descreva com detalhes sobre o caso do seu Pet"></TextInput>
                    </KeyboardAvoidingView>
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={toogleModal} style={styles.ButtonClose}><Text style={{ color: 'white', fontFamily: 'Montserrat_400Regular' }}>Fechar</Text></TouchableOpacity>
                        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.ButtonClose}><Text style={{ color: 'white', fontFamily: 'Montserrat_400Regular' }}> Criar</Text></TouchableOpacity>
                    </View>
                </View>


            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5
    },
    intro: {
        textAlign: 'center',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 20,
        marginBottom: 10
    },
    ButtonOpen: {
        margin: 0,
        padding: 0,
        height: 40,
        backgroundColor: '#9db9e2',
        borderRadius: 20,
        color: '#FFF',
        width: 200,
        alignSelf: 'flex-start'
    },
    ButtonClose: {
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#9ca9e2',
        width: '100%',
        height: 40,
        padding: 30,
        textAlign: 'center',
        justifyContent: 'center',
        elevation: 10


    },
    upload: {
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#9ca9e2',
        width: '100%',
        height: 40,
        padding: 10,
        textAlign: 'center',
        elevation: 10
    },
    Card: {
        height: 500,
        backgroundColor: '#FFF',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        flex: 1,
        borderRadius: 20,

    },
    pubCard: {
        height: 100,
        top: 0,
        justifyContent: 'flex-end'

    },

    btnView: {
        height: 10,
        width: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: '20%',
        textAlign: 'center'


    },
    titleInput: {
        width: '100%',
        color: 'black',
        height: '100%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        elevation: 10,
        fontSize: 15,
        textAlign: 'center',
        flexWrap: 'wrap',
        padding: 10

    },
    descInput: {
        width: '100%',
        color: 'black',
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 20,
        elevation: 10,
        fontSize: 15,
        textAlign: 'center',
        padding: 5

    },
    descView: {
        marginTop: 40,
        height: 50,
        elevation: 10,
        flex: 0.4
    },

    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        bottom: -80,
        width: 120
    }



})