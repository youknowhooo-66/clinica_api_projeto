import { Router } from 'express';

const getConsultas = async (req, res) => {
    try {
		const [resultado] = await db.query("SELECT id, reason, date, time, description, medication, dosagePrecautions FROM consulta");

		if(resultado.length === 0) {
			return res.status(404).json({ message: "Nenhuma consulta encontrada" });
		}
		return res.status(200).json({ message: "Consultas encontradas", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao buscar consultas", error: error.message });
	}
};

const editarConsultas = async (req, res) => {
	try {
		const [resultado] = await db.query("UPDATE consulta SET reason = ?, date = ?, WHERE id = ?", [req.body.motivo, req.body.horario, req.params.id]);

		if (resultado.affectedRows === 0) {  
			return res.status(404).json({ message: "Consulta não encontrada" });  
		}
		return res.status(200).json({ message: "Consulta editada com sucesso", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao editar consulta", error: error.message });
	}
};

const deletarConsulta = async (req, res) => {
	try {
		const [resultado] = await db.query("DELETE FROM consulta WHERE id = ?", [req.params.id]);

		if (resultado.affectedRows === 0) {  
			return res.status(404).json({ message: "Consulta não encontrada" });  
		}
		return res.status(200).json({ message: "Consulta deletada com sucesso", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao deletar consulta", error: error.message });
	}
};

const adicionarConsulta = async (req, res) => {
    try {
		const { reason, date, time, description, medication, dosagePrecautions } = req.body;

		const hrOcupada = req.body.date;
		if(hrOcupada){
			return res.status(400).json({message: "Horário ocupado"})
		}

		const [resultado] = await db.query("INSERT INTO consulta (reason, date, time, description, medication, dosagePrecautions) VALUES (?, ?, ?)", [reason, date, time, description, medication,dosagePrecautions]);

		if(resultado.affectedRows === 0) {
			return res.status(404).json({ message: "Nenhuma consulta adicionada" });
		}

		return res.status(201).json({ message: "Consulta adicionada com sucesso", data: resultado });
	} catch (error) {
		return res.status(500).json({ message: "Erro ao adicionar consulta", error: error.message });
	}
};

export { getConsultas, editarConsultas, deletarConsulta, adicionarConsulta};
