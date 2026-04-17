import db from '../config/db.js';

const getUsuarios = async (req, res) => {
	try {
		const [resultado] = await db.query("SELECT usuario_id nome, email, cpf, senha, tipo_usuario FROM usuario ");

		if(resultado.length === 0) {
			return res.status(404).json({ message: "Nenhum usuario encontrado" });
		}
		return res.status(200).json({ message: "Usuarios encontrados", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao buscar usuarios", error: error.message });
	}
};

const editarUsuarios = async (req, res) => {
	try {
		const [resultado] = await db.query("UPDATE usuario SET nome = ?, email = ? WHERE usuario_id = ?", [req.body.nome, req.body.email, req.params.usuario_id]);

		if (resultado.affectedRows === 0) {  
			return res.status(404).json({ message: "Usuario não encontrado" });  
		}
		return res.status(200).json({ message: "Usuario editado com sucesso", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao editar usuario", error: error.message });
	}
};

const deletarUsuario = async (req, res) => {
	try {
		const [resultado] = await db.query("DELETE FROM usuario WHERE usuario_id = ?", [req.params.usuario_id]);

		if (resultado.affectedRows === 0) {  
			return res.status(404).json({ message: "Usuario não encontrado" });  
		};
		return res.status(200).json({ message: "Usuario deletado com sucesso", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao deletar usuario", error: error.message });
	};
};

const adicionarUsuario = async (req, res) => {
    try {
		const {nome, email, cpf, senha, tipo_usuario} = req.body;

		if(nome.length < 5 || nome === ""){
			return res.status(400).json({message: "O nome deve ser completo. Deve ter 5 caracteres, não pode estar vazio!"});
		}
		if(cpf.length < 5 ) return res.status(400).json({message: "Cpf obrigatório!"})
            
		const type_user = ["medico", "adm"]

		if(!type_user.includes(tipo_usuario)){
			return res.status(400).json({message: "Tipo de usuário não permitido, escolha entre 'medico' ou 'adm'."});
		};
		
		const [resultado] = await db.query("INSERT INTO usuario (nome, email, cpf, senha, tipo_usuario) VALUES (?, ?, ?, ?, ?)", [nome, email, cpf, senha, tipo_usuario]);

		if(resultado.affectedRows === 0) {
			return res.status(404).json({ message: "Nenhum usuario adicionado" });
		};

		return res.status(201).json({ message: "Usuario adicionado com sucesso", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao adicionar usuario", error: error.message });
	};
};

export {getUsuarios, editarUsuarios, deletarUsuario, adicionarUsuario};