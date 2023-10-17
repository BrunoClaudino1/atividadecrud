import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ListarProdutos } from "./src/Componentes/ListarProdutos"
import { ManterProdutos } from "./src/Componentes/ManterProdutos"
import { Login } from "./src/Componentes/Login"
import { Cadastrar } from "./src/Componentes/CadastrarLogin"
import { Home } from "./src/Componentes/Home"

export function Rotas() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='ListarProdutos' component={ListarProdutos} options={{ title: 'Cadastro de Produtos' }} />
                <Stack.Screen name='ManterProdutos' component={ManterProdutos} options={{ title: 'Cadastrar/Atualizar Produtos' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}