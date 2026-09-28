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

export const clientes: Cliente[] = [
  { id: "c1", nome: "Marcos Andrade", tipo: "PF", documento: "123.456.789-00", email: "marcos.andrade@email.com", telefone: "(11) 98765-4321", processosAtivos: 2, clienteDesde: "2023-02-10" },
  { id: "c2", nome: "Construtora Horizonte Ltda.", tipo: "PJ", documento: "12.345.678/0001-90", email: "juridico@horizonteconstrutora.com.br", telefone: "(11) 3456-7890", processosAtivos: 3, clienteDesde: "2022-08-22" },
  { id: "c3", nome: "Fernanda Lima Souza", tipo: "PF", documento: "987.654.321-00", email: "fernanda.lima@email.com", telefone: "(21) 99887-6655", processosAtivos: 1, clienteDesde: "2024-01-15" },
  { id: "c4", nome: "Comércio Bela Vista S.A.", tipo: "PJ", documento: "23.456.789/0001-11", email: "contato@belavistacomercio.com.br", telefone: "(31) 3222-4455", processosAtivos: 2, clienteDesde: "2021-11-05" },
  { id: "c5", nome: "Ricardo Tavares Moreira", tipo: "PF", documento: "456.789.123-00", email: "ricardo.moreira@email.com", telefone: "(41) 98123-4567", processosAtivos: 1, clienteDesde: "2024-06-30" },
  { id: "c6", nome: "Indústria Metalúrgica Aço Forte", tipo: "PJ", documento: "34.567.890/0001-22", email: "juridico@acoforte.com.br", telefone: "(19) 3344-5566", processosAtivos: 2, clienteDesde: "2020-04-18" },
  { id: "c7", nome: "Juliana Prado Carvalho", tipo: "PF", documento: "321.654.987-00", email: "juliana.prado@email.com", telefone: "(51) 99765-1234", processosAtivos: 1, clienteDesde: "2025-03-02" },
];

export const processos: Processo[] = [
  { id: "p1", numero: "0801234-56.2025.8.02.0001", cliente: "Marcos Andrade", area: "Trabalhista", status: "Em andamento", fase: "Instrução", responsavel: "Dra. Camila Reis", proximoPrazo: "2026-10-03", valorCausa: 45000 },
  { id: "p2", numero: "0805678-90.2025.8.02.0001", cliente: "Construtora Horizonte Ltda.", area: "Cível", status: "Em andamento", fase: "Recursal", responsavel: "Dr. Paulo Nogueira", proximoPrazo: "2026-10-01", valorCausa: 320000 },
  { id: "p3", numero: "0002345-11.2024.5.02.0003", cliente: "Fernanda Lima Souza", area: "Trabalhista", status: "Aguardando", fase: "Aguardando sentença", responsavel: "Dra. Camila Reis", proximoPrazo: "2026-10-15", valorCausa: 18500 },
  { id: "p4", numero: "0809988-77.2023.8.02.0001", cliente: "Comércio Bela Vista S.A.", area: "Tributário", status: "Em andamento", fase: "Perícia", responsavel: "Dr. Eduardo Martins", proximoPrazo: "2026-10-06", valorCausa: 128000 },
  { id: "p5", numero: "0003456-22.2022.5.02.0004", cliente: "Comércio Bela Vista S.A.", area: "Trabalhista", status: "Concluído", fase: "Arquivado", responsavel: "Dra. Camila Reis", proximoPrazo: "—", valorCausa: 22000 },
  { id: "p6", numero: "0807711-44.2025.8.02.0001", cliente: "Ricardo Tavares Moreira", area: "Família", status: "Em andamento", fase: "Conciliação", responsavel: "Dra. Beatriz Lopes", proximoPrazo: "2026-10-09", valorCausa: 0 },
  { id: "p7", numero: "0806622-33.2024.8.02.0001", cliente: "Indústria Metalúrgica Aço Forte", area: "Cível", status: "Em andamento", fase: "Instrução", responsavel: "Dr. Paulo Nogueira", proximoPrazo: "2026-10-04", valorCausa: 540000 },
  { id: "p8", numero: "0004567-33.2025.5.02.0005", cliente: "Indústria Metalúrgica Aço Forte", area: "Trabalhista", status: "Aguardando", fase: "Aguardando audiência", responsavel: "Dra. Camila Reis", proximoPrazo: "2026-10-20", valorCausa: 67000 },
  { id: "p9", numero: "0801111-99.2025.8.02.0001", cliente: "Juliana Prado Carvalho", area: "Consumidor", status: "Em andamento", fase: "Contestação", responsavel: "Dr. Eduardo Martins", proximoPrazo: "2026-10-02", valorCausa: 8900 },
  { id: "p10", numero: "0805544-21.2023.8.02.0001", cliente: "Construtora Horizonte Ltda.", area: "Cível", status: "Concluído", fase: "Arquivado", responsavel: "Dr. Paulo Nogueira", proximoPrazo: "—", valorCausa: 95000 },
];

export const prazos: Prazo[] = [
  { id: "d1", processoNumero: "0805678-90.2025.8.02.0001", cliente: "Construtora Horizonte Ltda.", descricao: "Contrarrazões de apelação", tipo: "Recurso", data: "2026-10-01", prioridade: "Urgente", responsavel: "Dr. Paulo Nogueira" },
  { id: "d2", processoNumero: "0801111-99.2025.8.02.0001", cliente: "Juliana Prado Carvalho", descricao: "Protocolo de contestação", tipo: "Petição", data: "2026-10-02", prioridade: "Urgente", responsavel: "Dr. Eduardo Martins" },
  { id: "d3", processoNumero: "0801234-56.2025.8.02.0001", cliente: "Marcos Andrade", descricao: "Audiência de instrução", tipo: "Audiência", data: "2026-10-03", prioridade: "Alta", responsavel: "Dra. Camila Reis" },
  { id: "d4", processoNumero: "0807711-44.2024.8.02.0001", cliente: "Indústria Metalúrgica Aço Forte", descricao: "Réplica à contestação", tipo: "Petição", data: "2026-10-04", prioridade: "Alta", responsavel: "Dr. Paulo Nogueira" },
  { id: "d5", processoNumero: "0809988-77.2023.8.02.0001", cliente: "Comércio Bela Vista S.A.", descricao: "Quesitos periciais", tipo: "Petição", data: "2026-10-06", prioridade: "Normal", responsavel: "Dr. Eduardo Martins" },
  { id: "d6", processoNumero: "0807711-44.2025.8.02.0001", cliente: "Ricardo Tavares Moreira", descricao: "Audiência de conciliação", tipo: "Audiência", data: "2026-10-09", prioridade: "Normal", responsavel: "Dra. Beatriz Lopes" },
  { id: "d7", processoNumero: "0002345-11.2024.5.02.0003", cliente: "Fernanda Lima Souza", descricao: "Acompanhar publicação de sentença", tipo: "Prazo processual", data: "2026-10-15", prioridade: "Normal", responsavel: "Dra. Camila Reis" },
  { id: "d8", processoNumero: "0004567-33.2025.5.02.0005", cliente: "Indústria Metalúrgica Aço Forte", descricao: "Preparação para audiência", tipo: "Audiência", data: "2026-10-20", prioridade: "Normal", responsavel: "Dra. Camila Reis" },
];

export const movimentos: Movimento[] = [
  { id: "f1", tipo: "Receita", descricao: "Honorários contratuais — outubro", cliente: "Construtora Horizonte Ltda.", categoria: "Honorários", valor: 8500, data: "2026-10-01", status: "Pago" },
  { id: "f2", tipo: "Receita", descricao: "Honorários de êxito", cliente: "Comércio Bela Vista S.A.", categoria: "Honorários", valor: 15200, data: "2026-09-28", status: "Pago" },
  { id: "f3", tipo: "Despesa", descricao: "Custas processuais", cliente: "Indústria Metalúrgica Aço Forte", categoria: "Custas", valor: 1240, data: "2026-09-26", status: "Pago" },
  { id: "f4", tipo: "Receita", descricao: "Honorários contratuais — outubro", cliente: "Indústria Metalúrgica Aço Forte", categoria: "Honorários", valor: 6200, data: "2026-10-05", status: "Pendente" },
  { id: "f5", tipo: "Despesa", descricao: "Diligência e cartório", cliente: "Marcos Andrade", categoria: "Despesas processuais", valor: 380, data: "2026-09-24", status: "Pago" },
  { id: "f6", tipo: "Receita", descricao: "Consulta jurídica avulsa", cliente: "Juliana Prado Carvalho", categoria: "Consultoria", valor: 900, data: "2026-09-22", status: "Pago" },
  { id: "f7", tipo: "Despesa", descricao: "Perícia técnica", cliente: "Comércio Bela Vista S.A.", categoria: "Perícia", valor: 3500, data: "2026-10-06", status: "Pendente" },
  { id: "f8", tipo: "Receita", descricao: "Honorários contratuais — outubro", cliente: "Ricardo Tavares Moreira", categoria: "Honorários", valor: 2400, data: "2026-10-08", status: "Pendente" },
];

export const documentos: Documento[] = [
  { id: "doc1", nome: "Petição inicial — Andrade x Empregador.pdf", processo: "0801234-56.2025.8.02.0001", tipo: "Petição", tamanho: "412 KB", data: "2026-09-12" },
  { id: "doc2", nome: "Contrato social — Horizonte.pdf", processo: "0805678-90.2025.8.02.0001", tipo: "Contrato", tamanho: "1.1 MB", data: "2026-09-15" },
  { id: "doc3", nome: "Laudo pericial preliminar.pdf", processo: "0809988-77.2023.8.02.0001", tipo: "Laudo", tamanho: "3.4 MB", data: "2026-09-20" },
  { id: "doc4", nome: "Procuração — Ricardo Moreira.pdf", processo: "0807711-44.2025.8.02.0001", tipo: "Procuração", tamanho: "180 KB", data: "2026-09-23" },
  { id: "doc5", nome: "Contestação — Aço Forte.docx", processo: "0807711-44.2024.8.02.0001", tipo: "Petição", tamanho: "268 KB", data: "2026-09-25" },
  { id: "doc6", nome: "Comprovante de pagamento — custas.pdf", processo: "0806622-33.2024.8.02.0001", tipo: "Financeiro", tamanho: "96 KB", data: "2026-09-27" },
];

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

export const agendamentos: Agendamento[] = [
  { id: "a1", cliente: "Marcos Andrade", tipo: "Reunião de alinhamento", data: "2026-09-29", hora: "09:00", responsavel: "Dra. Camila Reis", modalidade: "Online", status: "Confirmado" },
  { id: "a2", cliente: "Construtora Horizonte Ltda.", tipo: "Audiência de instrução", data: "2026-09-29", hora: "14:30", responsavel: "Dr. Paulo Nogueira", modalidade: "Presencial", status: "Confirmado" },
  { id: "a3", cliente: "Fernanda Lima Souza", tipo: "Consulta inicial", data: "2026-09-30", hora: "10:00", responsavel: "Dra. Camila Reis", modalidade: "Online", status: "Pendente" },
  { id: "a4", cliente: "Comércio Bela Vista S.A.", tipo: "Reunião de perícia", data: "2026-10-01", hora: "11:00", responsavel: "Dr. Eduardo Martins", modalidade: "Presencial", status: "Confirmado" },
  { id: "a5", cliente: "Ricardo Tavares Moreira", tipo: "Audiência de conciliação", data: "2026-10-02", hora: "13:00", responsavel: "Dra. Beatriz Lopes", modalidade: "Presencial", status: "Pendente" },
  { id: "a6", cliente: "Juliana Prado Carvalho", tipo: "Reunião de acompanhamento", data: "2026-10-03", hora: "16:00", responsavel: "Dr. Eduardo Martins", modalidade: "Online", status: "Cancelado" },
];

export const atendimentos: Atendimento[] = [
  { id: "at1", cliente: "Marcos Andrade", assunto: "Dúvida sobre audiência", ultimaMensagem: "Preciso confirmar o horário da audiência de instrução.", canal: "WhatsApp", data: "2026-09-28", naoLidas: 2, status: "Aberto" },
  { id: "at2", cliente: "Construtora Horizonte Ltda.", assunto: "Envio de documentos", ultimaMensagem: "Segue em anexo o contrato solicitado.", canal: "Portal do cliente", data: "2026-09-27", naoLidas: 0, status: "Resolvido" },
  { id: "at3", cliente: "Fernanda Lima Souza", assunto: "Status do processo", ultimaMensagem: "Alguma novidade sobre a sentença?", canal: "E-mail", data: "2026-09-27", naoLidas: 1, status: "Aberto" },
  { id: "at4", cliente: "Ricardo Tavares Moreira", assunto: "Agendamento de conciliação", ultimaMensagem: "Combinado, nos vemos na audiência.", canal: "WhatsApp", data: "2026-09-25", naoLidas: 0, status: "Resolvido" },
  { id: "at5", cliente: "Indústria Metalúrgica Aço Forte", assunto: "Solicitação de honorários", ultimaMensagem: "Podem emitir a nota fiscal deste mês?", canal: "Portal do cliente", data: "2026-09-24", naoLidas: 3, status: "Aberto" },
];

export const usuarios: Usuario[] = [
  { id: "u1", nome: "Camila Reis", email: "camila.reis@reisenogueira.adv.br", cargo: "Administrador", status: "Ativo", ultimoAcesso: "2026-09-28" },
  { id: "u2", nome: "Paulo Nogueira", email: "paulo.nogueira@reisenogueira.adv.br", cargo: "Advogado", status: "Ativo", ultimoAcesso: "2026-09-28" },
  { id: "u3", nome: "Eduardo Martins", email: "eduardo.martins@reisenogueira.adv.br", cargo: "Advogado", status: "Ativo", ultimoAcesso: "2026-09-27" },
  { id: "u4", nome: "Beatriz Lopes", email: "beatriz.lopes@reisenogueira.adv.br", cargo: "Advogado", status: "Ativo", ultimoAcesso: "2026-09-26" },
  { id: "u5", nome: "Larissa Fontes", email: "larissa.fontes@reisenogueira.adv.br", cargo: "Estagiário", status: "Ativo", ultimoAcesso: "2026-09-25" },
  { id: "u6", nome: "Tiago Vasconcelos", email: "tiago.vasconcelos@reisenogueira.adv.br", cargo: "Financeiro", status: "Ativo", ultimoAcesso: "2026-09-24" },
  { id: "u7", nome: "Renata Duarte", email: "renata.duarte@reisenogueira.adv.br", cargo: "Estagiário", status: "Inativo", ultimoAcesso: "2026-08-30" },
];

export const tarefas: Tarefa[] = [
  { id: "t1", titulo: "Levantar jurisprudência — caso Horizonte", projeto: "Cível", responsavel: "Dr. Paulo Nogueira", prazo: "2026-09-30", prioridade: "Alta", coluna: "A fazer" },
  { id: "t2", titulo: "Preparar quesitos periciais", projeto: "Tributário", responsavel: "Dr. Eduardo Martins", prazo: "2026-10-02", prioridade: "Normal", coluna: "A fazer" },
  { id: "t3", titulo: "Redigir contrarrazões de apelação", projeto: "Cível", responsavel: "Dr. Paulo Nogueira", prazo: "2026-10-01", prioridade: "Alta", coluna: "Em andamento" },
  { id: "t4", titulo: "Reunir provas — caso Andrade", projeto: "Trabalhista", responsavel: "Dra. Camila Reis", prazo: "2026-09-29", prioridade: "Alta", coluna: "Em andamento" },
  { id: "t5", titulo: "Revisar procuração digital", projeto: "Família", responsavel: "Dra. Beatriz Lopes", prazo: "2026-09-29", prioridade: "Baixa", coluna: "Em revisão" },
  { id: "t6", titulo: "Conferir cálculo de honorários", projeto: "Financeiro interno", responsavel: "Tiago Vasconcelos", prazo: "2026-09-28", prioridade: "Normal", coluna: "Em revisão" },
  { id: "t7", titulo: "Protocolar petição inicial — Prado Carvalho", projeto: "Consumidor", responsavel: "Dr. Eduardo Martins", prazo: "2026-09-25", prioridade: "Alta", coluna: "Concluído" },
  { id: "t8", titulo: "Enviar comprovante de custas", projeto: "Cível", responsavel: "Larissa Fontes", prazo: "2026-09-24", prioridade: "Baixa", coluna: "Concluído" },
];

export const posts: Post[] = [
  { id: "bl1", titulo: "Como funciona a reforma trabalhista em 2026", categoria: "Trabalhista", autor: "Dra. Camila Reis", data: "2026-09-20", status: "Publicado", visualizacoes: 1840 },
  { id: "bl2", titulo: "Guia prático de planejamento sucessório", categoria: "Família", autor: "Dra. Beatriz Lopes", data: "2026-09-12", status: "Publicado", visualizacoes: 962 },
  { id: "bl3", titulo: "O que muda no processo tributário municipal", categoria: "Tributário", autor: "Dr. Eduardo Martins", data: "2026-09-05", status: "Publicado", visualizacoes: 1275 },
  { id: "bl4", titulo: "Direitos do consumidor em contratos digitais", categoria: "Consumidor", autor: "Dr. Eduardo Martins", data: "2026-09-26", status: "Rascunho", visualizacoes: 0 },
  { id: "bl5", titulo: "Cláusulas essenciais em contratos empresariais", categoria: "Cível", autor: "Dr. Paulo Nogueira", data: "2026-09-27", status: "Rascunho", visualizacoes: 0 },
];

export const transacoesPix: TransacaoPix[] = [
  { id: "px1", tipo: "Recebido", descricao: "Honorários — Construtora Horizonte", valor: 8500, data: "2026-09-27", status: "Concluído" },
  { id: "px2", tipo: "Recebido", descricao: "Honorários — Comércio Bela Vista", valor: 15200, data: "2026-09-25", status: "Concluído" },
  { id: "px3", tipo: "Enviado", descricao: "Reembolso de custas — Marcos Andrade", valor: 380, data: "2026-09-24", status: "Concluído" },
  { id: "px4", tipo: "Recebido", descricao: "Consulta jurídica — Juliana Prado", valor: 900, data: "2026-09-22", status: "Processando" },
];

export const notasFiscais: NotaFiscal[] = [
  { id: "nf1", numero: "2026/0142", cliente: "Construtora Horizonte Ltda.", servico: "Honorários contratuais", valor: 8500, data: "2026-09-27", status: "Emitida" },
  { id: "nf2", numero: "2026/0141", cliente: "Comércio Bela Vista S.A.", servico: "Honorários de êxito", valor: 15200, data: "2026-09-25", status: "Emitida" },
  { id: "nf3", numero: "2026/0140", cliente: "Indústria Metalúrgica Aço Forte", servico: "Honorários contratuais", valor: 6200, data: "2026-09-28", status: "Processando" },
  { id: "nf4", numero: "2026/0139", cliente: "Juliana Prado Carvalho", servico: "Consultoria jurídica", valor: 900, data: "2026-09-22", status: "Emitida" },
];

export const acessosProcessos: AcessoProcesso[] = [
  { processoNumero: "0801234-56.2025.8.02.0001", cliente: "Marcos Andrade", responsavelPrincipal: "Dra. Camila Reis", advogadosComAcesso: ["Dra. Camila Reis", "Larissa Fontes"] },
  { processoNumero: "0805678-90.2025.8.02.0001", cliente: "Construtora Horizonte Ltda.", responsavelPrincipal: "Dr. Paulo Nogueira", advogadosComAcesso: ["Dr. Paulo Nogueira"] },
  { processoNumero: "0002345-11.2024.5.02.0003", cliente: "Fernanda Lima Souza", responsavelPrincipal: "Dra. Camila Reis", advogadosComAcesso: ["Dra. Camila Reis"] },
  { processoNumero: "0809988-77.2023.8.02.0001", cliente: "Comércio Bela Vista S.A.", responsavelPrincipal: "Dr. Eduardo Martins", advogadosComAcesso: ["Dr. Eduardo Martins", "Renata Duarte"] },
  { processoNumero: "0807711-44.2025.8.02.0001", cliente: "Ricardo Tavares Moreira", responsavelPrincipal: "Dra. Beatriz Lopes", advogadosComAcesso: ["Dra. Beatriz Lopes"] },
  { processoNumero: "0806622-33.2024.8.02.0001", cliente: "Indústria Metalúrgica Aço Forte", responsavelPrincipal: "Dr. Paulo Nogueira", advogadosComAcesso: ["Dr. Paulo Nogueira", "Dra. Camila Reis"] },
];

export function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatDate(value: string) {
  if (value === "—") return value;
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}
