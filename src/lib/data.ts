import { createClient } from "@/lib/supabase/server";
import type {
  Cliente,
  Processo,
  Prazo,
  Movimento,
  Documento,
  Agendamento,
  Atendimento,
  Usuario,
  Tarefa,
  Post,
  TransacaoPix,
  NotaFiscal,
  AcessoProcesso,
} from "@/lib/mock-data";

export async function getClientes(): Promise<Cliente[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("clientes")
    .select(
      'id, nome, tipo, documento, email, telefone, processosAtivos:processos_ativos, clienteDesde:cliente_desde'
    )
    .order("nome");
  if (error) throw error;
  return data as Cliente[];
}

export async function getProcessos(): Promise<Processo[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("processos")
    .select(
      'id, numero, cliente, area, status, fase, responsavel, proximoPrazo:proximo_prazo, valorCausa:valor_causa'
    )
    .order("numero");
  if (error) throw error;
  return data as Processo[];
}

export async function getPrazos(): Promise<Prazo[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("prazos")
    .select(
      'id, processoNumero:processo_numero, cliente, descricao, tipo, data, prioridade, responsavel'
    )
    .order("data");
  if (error) throw error;
  return data as Prazo[];
}

export async function getMovimentos(): Promise<Movimento[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("movimentos")
    .select("id, tipo, descricao, cliente, categoria, valor, data, status")
    .order("data", { ascending: false });
  if (error) throw error;
  return data as Movimento[];
}

export async function getDocumentos(): Promise<Documento[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("documentos")
    .select("id, nome, processo, tipo, tamanho, data")
    .order("data", { ascending: false });
  if (error) throw error;
  return data as Documento[];
}

export async function getAgendamentos(): Promise<Agendamento[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("agendamentos")
    .select("id, cliente, tipo, data, hora, responsavel, modalidade, status")
    .order("data")
    .order("hora");
  if (error) throw error;
  return data as Agendamento[];
}

export async function getAtendimentos(): Promise<Atendimento[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("atendimentos")
    .select(
      'id, cliente, assunto, ultimaMensagem:ultima_mensagem, canal, data, naoLidas:nao_lidas, status'
    )
    .order("data", { ascending: false });
  if (error) throw error;
  return data as Atendimento[];
}

export async function getUsuarios(): Promise<Usuario[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("usuarios")
    .select('id, nome, email, cargo, status, ultimoAcesso:ultimo_acesso')
    .order("nome");
  if (error) throw error;
  return data as Usuario[];
}

export async function getTarefas(): Promise<Tarefa[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tarefas")
    .select("id, titulo, projeto, responsavel, prazo, prioridade, coluna")
    .order("prazo");
  if (error) throw error;
  return data as Tarefa[];
}

export async function getPosts(): Promise<Post[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id, titulo, categoria, autor, data, status, visualizacoes")
    .order("data", { ascending: false });
  if (error) throw error;
  return data as Post[];
}

export async function getTransacoesPix(): Promise<TransacaoPix[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("transacoes_pix")
    .select("id, tipo, descricao, valor, data, status")
    .order("data", { ascending: false });
  if (error) throw error;
  return data as TransacaoPix[];
}

export async function getNotasFiscais(): Promise<NotaFiscal[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("notas_fiscais")
    .select("id, numero, cliente, servico, valor, data, status")
    .order("data", { ascending: false });
  if (error) throw error;
  return data as NotaFiscal[];
}

export async function getAcessosProcessos(): Promise<AcessoProcesso[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("acessos_processos")
    .select(
      'processoNumero:processo_numero, cliente, responsavelPrincipal:responsavel_principal, advogadosComAcesso:advogados_com_acesso'
    )
    .order("processo_numero");
  if (error) throw error;
  return data as AcessoProcesso[];
}
