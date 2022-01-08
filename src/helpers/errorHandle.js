export default function handleError(error){
    if (!error?.response?.data)  return ["Erro ao realizar operação", error]; 
    const response = error.response.data
    switch(response.message){

        // Erro no banco de dados
        case 'Error accessing database.': return [`Status ${response.status} - Erro ao acessar o banco de dados`, response.data];
        
        // Erro no Login           
        case 'Login error': 
            switch(response.data){
                case 'User does not exist. Check credentials.': return ['Usuário não existe. Cheque as credenciais.'];
                case 'Invalid password.': return ['Senha inválida'];
                default: return [`${response.data} - Erro ao efetuar login`];
            }
        // Default
        default: return [`Status ${response.status} - Erro ao reliazar operação`]     
    }
}