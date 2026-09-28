export type StatusProcesso = "Em andamento" | "Aguardando" | "Concluído";
export type PrioridadePrazo = "Urgente" | "Alta" | "Normal";
export type TipoMovimento = "Receita" | "Despesa";
export type StatusMovimento = "Pago" | "Pendente";

export type Cliente = {
  id: string;
  nome: string;
  tipo: "PF" | "PJ";
  documento: string;
  email: string;
  telefone: string;
  processosAtivos: number;
  clienteDesde: string;
};

export type Processo = {
  id: string;
  numero: string;
  cliente: string;
  area: string;
  status: StatusProcesso;
  fase: string;
  responsavel: string;
  proximoPrazo: string;
  valorCausa: number;
};

export type Prazo = {
  id: string;
  processoNumero: string;
  cliente: string;
  descricao: string;
  tipo: string;
  data: string;
  prioridade: PrioridadePrazo;
  responsavel: string;
};

export type Movimento = {
  id: string;
  tipo: TipoMovimento;
  descricao: string;
  cliente: string;
  categoria: string;
  valor: number;
  data: string;
  status: StatusMovimento;
};

export type Documento = {
  id: string;
  nome: string;
  processo: string;
  tipo: string;
  tamanho: string;
  data: string;
};

export type StatusAgendamento = "Confirmado" | "Pendente" | "Cancelado";
export type Agendamento = {
  id: string;
  cliente: string;
  tipo: string;
  data: string;
  hora: string;
  responsavel: string;
  modalidade: "Presencial" | "Online";
  status: StatusAgendamento;
};

export type StatusAtendimento = "Aberto" | "Resolvido";
export type Canal = "WhatsApp" | "E-mail" | "Portal do cliente";
export type Atendimento = {
  id: string;
  cliente: string;
  assunto: string;
  ultimaMensagem: string;
  canal: Canal;
  data: string;
  naoLidas: number;
  status: StatusAtendimento;
};

export type CargoUsuario = "Advogado" | "Estagiário" | "Financeiro" | "Administrador";
export type StatusUsuario = "Ativo" | "Inativo";
export type Usuario = {
  id: string;
  nome: string;
  email: string;
  cargo: CargoUsuario;
  status: StatusUsuario;
  ultimoAcesso: string;
};

export type ColunaTarefa = "A fazer" | "Em andamento" | "Em revisão" | "Concluído";
export type PrioridadeTarefa = "Alta" | "Normal" | "Baixa";
export type Tarefa = {
  id: string;
  titulo: string;
  projeto: string;
  responsavel: string;
  prazo: string;
  prioridade: PrioridadeTarefa;
  coluna: ColunaTarefa;
};

export type StatusPost = "Publicado" | "Rascunho";
export type Post = {
  id: string;
  titulo: string;
  categoria: string;
  autor: string;
  data: string;
  status: StatusPost;
  visualizacoes: number;
};

export type TransacaoPix = {
  id: string;
  tipo: "Recebido" | "Enviado";
  descricao: string;
  valor: number;
  data: string;
  status: "Concluído" | "Processando";
};

export type NotaFiscal = {
  id: string;
  numero: string;
  cliente: string;
  servico: string;
  valor: number;
  data: string;
  status: "Emitida" | "Processando" | "Cancelada";
};

export type AcessoProcesso = {
  processoNumero: string;
  cliente: string;
  responsavelPrincipal: string;
  advogadosComAcesso: string[];
};

export function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatDate(value: string) {
  if (value === "—") return value;
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}
