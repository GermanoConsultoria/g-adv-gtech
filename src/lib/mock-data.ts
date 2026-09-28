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

export function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatDate(value: string) {
  if (value === "—") return value;
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}
