-- G-ADV — schema inicial + dados de demonstração
-- Execute este arquivo inteiro no Supabase SQL Editor do projeto apouzkxfwwneoepimfxg.

-- ============================================================
-- TABELAS
-- ============================================================

create table if not exists public.clientes (
  id text primary key,
  nome text not null,
  tipo text not null check (tipo in ('PF','PJ')),
  documento text not null,
  email text not null,
  telefone text not null,
  processos_ativos integer not null default 0,
  cliente_desde date not null
);

create table if not exists public.processos (
  id text primary key,
  numero text not null,
  cliente text not null,
  area text not null,
  status text not null check (status in ('Em andamento','Aguardando','Concluído')),
  fase text not null,
  responsavel text not null,
  proximo_prazo text not null,
  valor_causa double precision not null default 0
);

create table if not exists public.prazos (
  id text primary key,
  processo_numero text not null,
  cliente text not null,
  descricao text not null,
  tipo text not null,
  data date not null,
  prioridade text not null check (prioridade in ('Urgente','Alta','Normal')),
  responsavel text not null
);

create table if not exists public.movimentos (
  id text primary key,
  tipo text not null check (tipo in ('Receita','Despesa')),
  descricao text not null,
  cliente text not null,
  categoria text not null,
  valor double precision not null,
  data date not null,
  status text not null check (status in ('Pago','Pendente'))
);

create table if not exists public.documentos (
  id text primary key,
  nome text not null,
  processo text not null,
  tipo text not null,
  tamanho text not null,
  data date not null
);

create table if not exists public.agendamentos (
  id text primary key,
  cliente text not null,
  tipo text not null,
  data date not null,
  hora text not null,
  responsavel text not null,
  modalidade text not null check (modalidade in ('Presencial','Online')),
  status text not null check (status in ('Confirmado','Pendente','Cancelado'))
);

create table if not exists public.atendimentos (
  id text primary key,
  cliente text not null,
  assunto text not null,
  ultima_mensagem text not null,
  canal text not null check (canal in ('WhatsApp','E-mail','Portal do cliente')),
  data date not null,
  nao_lidas integer not null default 0,
  status text not null check (status in ('Aberto','Resolvido'))
);

create table if not exists public.usuarios (
  id text primary key,
  nome text not null,
  email text not null,
  cargo text not null check (cargo in ('Advogado','Estagiário','Financeiro','Administrador')),
  status text not null check (status in ('Ativo','Inativo')),
  ultimo_acesso date not null
);

create table if not exists public.tarefas (
  id text primary key,
  titulo text not null,
  projeto text not null,
  responsavel text not null,
  prazo date not null,
  prioridade text not null check (prioridade in ('Alta','Normal','Baixa')),
  coluna text not null check (coluna in ('A fazer','Em andamento','Em revisão','Concluído'))
);

create table if not exists public.posts (
  id text primary key,
  titulo text not null,
  categoria text not null,
  autor text not null,
  data date not null,
  status text not null check (status in ('Publicado','Rascunho')),
  visualizacoes integer not null default 0
);

create table if not exists public.transacoes_pix (
  id text primary key,
  tipo text not null check (tipo in ('Recebido','Enviado')),
  descricao text not null,
  valor double precision not null,
  data date not null,
  status text not null check (status in ('Concluído','Processando'))
);

create table if not exists public.notas_fiscais (
  id text primary key,
  numero text not null,
  cliente text not null,
  servico text not null,
  valor double precision not null,
  data date not null,
  status text not null check (status in ('Emitida','Processando','Cancelada'))
);

create table if not exists public.acessos_processos (
  processo_numero text primary key,
  cliente text not null,
  responsavel_principal text not null,
  advogados_com_acesso text[] not null default '{}'
);

-- ============================================================
-- ROW LEVEL SECURITY
-- Ambiente de demonstração: leitura pública liberada (anon + authenticated).
-- Nenhuma política de escrita é criada — grave alterações direto no
-- SQL Editor, ou adicione políticas de insert/update/delete quando a
-- autenticação real dos usuários for implementada.
-- ============================================================

alter table public.clientes enable row level security;
alter table public.processos enable row level security;
alter table public.prazos enable row level security;
alter table public.movimentos enable row level security;
alter table public.documentos enable row level security;
alter table public.agendamentos enable row level security;
alter table public.atendimentos enable row level security;
alter table public.usuarios enable row level security;
alter table public.tarefas enable row level security;
alter table public.posts enable row level security;
alter table public.transacoes_pix enable row level security;
alter table public.notas_fiscais enable row level security;
alter table public.acessos_processos enable row level security;

create policy "clientes_select_public" on public.clientes for select using (true);
create policy "processos_select_public" on public.processos for select using (true);
create policy "prazos_select_public" on public.prazos for select using (true);
create policy "movimentos_select_public" on public.movimentos for select using (true);
create policy "documentos_select_public" on public.documentos for select using (true);
create policy "agendamentos_select_public" on public.agendamentos for select using (true);
create policy "atendimentos_select_public" on public.atendimentos for select using (true);
create policy "usuarios_select_public" on public.usuarios for select using (true);
create policy "tarefas_select_public" on public.tarefas for select using (true);
create policy "posts_select_public" on public.posts for select using (true);
create policy "transacoes_pix_select_public" on public.transacoes_pix for select using (true);
create policy "notas_fiscais_select_public" on public.notas_fiscais for select using (true);
create policy "acessos_processos_select_public" on public.acessos_processos for select using (true);

-- ============================================================
-- SEED — mesmos dados de demonstração que já existiam no front-end
-- ============================================================

insert into public.clientes (id, nome, tipo, documento, email, telefone, processos_ativos, cliente_desde) values
('c1','Marcos Andrade','PF','123.456.789-00','marcos.andrade@email.com','(11) 98765-4321',2,'2023-02-10'),
('c2','Construtora Horizonte Ltda.','PJ','12.345.678/0001-90','juridico@horizonteconstrutora.com.br','(11) 3456-7890',3,'2022-08-22'),
('c3','Fernanda Lima Souza','PF','987.654.321-00','fernanda.lima@email.com','(21) 99887-6655',1,'2024-01-15'),
('c4','Comércio Bela Vista S.A.','PJ','23.456.789/0001-11','contato@belavistacomercio.com.br','(31) 3222-4455',2,'2021-11-05'),
('c5','Ricardo Tavares Moreira','PF','456.789.123-00','ricardo.moreira@email.com','(41) 98123-4567',1,'2024-06-30'),
('c6','Indústria Metalúrgica Aço Forte','PJ','34.567.890/0001-22','juridico@acoforte.com.br','(19) 3344-5566',2,'2020-04-18'),
('c7','Juliana Prado Carvalho','PF','321.654.987-00','juliana.prado@email.com','(51) 99765-1234',1,'2025-03-02')
on conflict (id) do nothing;

insert into public.processos (id, numero, cliente, area, status, fase, responsavel, proximo_prazo, valor_causa) values
('p1','0801234-56.2025.8.02.0001','Marcos Andrade','Trabalhista','Em andamento','Instrução','Dra. Camila Reis','2026-10-03',45000),
('p2','0805678-90.2025.8.02.0001','Construtora Horizonte Ltda.','Cível','Em andamento','Recursal','Dr. Paulo Nogueira','2026-10-01',320000),
('p3','0002345-11.2024.5.02.0003','Fernanda Lima Souza','Trabalhista','Aguardando','Aguardando sentença','Dra. Camila Reis','2026-10-15',18500),
('p4','0809988-77.2023.8.02.0001','Comércio Bela Vista S.A.','Tributário','Em andamento','Perícia','Dr. Eduardo Martins','2026-10-06',128000),
('p5','0003456-22.2022.5.02.0004','Comércio Bela Vista S.A.','Trabalhista','Concluído','Arquivado','Dra. Camila Reis','—',22000),
('p6','0807711-44.2025.8.02.0001','Ricardo Tavares Moreira','Família','Em andamento','Conciliação','Dra. Beatriz Lopes','2026-10-09',0),
('p7','0806622-33.2024.8.02.0001','Indústria Metalúrgica Aço Forte','Cível','Em andamento','Instrução','Dr. Paulo Nogueira','2026-10-04',540000),
('p8','0004567-33.2025.5.02.0005','Indústria Metalúrgica Aço Forte','Trabalhista','Aguardando','Aguardando audiência','Dra. Camila Reis','2026-10-20',67000),
('p9','0801111-99.2025.8.02.0001','Juliana Prado Carvalho','Consumidor','Em andamento','Contestação','Dr. Eduardo Martins','2026-10-02',8900),
('p10','0805544-21.2023.8.02.0001','Construtora Horizonte Ltda.','Cível','Concluído','Arquivado','Dr. Paulo Nogueira','—',95000)
on conflict (id) do nothing;

insert into public.prazos (id, processo_numero, cliente, descricao, tipo, data, prioridade, responsavel) values
('d1','0805678-90.2025.8.02.0001','Construtora Horizonte Ltda.','Contrarrazões de apelação','Recurso','2026-10-01','Urgente','Dr. Paulo Nogueira'),
('d2','0801111-99.2025.8.02.0001','Juliana Prado Carvalho','Protocolo de contestação','Petição','2026-10-02','Urgente','Dr. Eduardo Martins'),
('d3','0801234-56.2025.8.02.0001','Marcos Andrade','Audiência de instrução','Audiência','2026-10-03','Alta','Dra. Camila Reis'),
('d4','0807711-44.2024.8.02.0001','Indústria Metalúrgica Aço Forte','Réplica à contestação','Petição','2026-10-04','Alta','Dr. Paulo Nogueira'),
('d5','0809988-77.2023.8.02.0001','Comércio Bela Vista S.A.','Quesitos periciais','Petição','2026-10-06','Normal','Dr. Eduardo Martins'),
('d6','0807711-44.2025.8.02.0001','Ricardo Tavares Moreira','Audiência de conciliação','Audiência','2026-10-09','Normal','Dra. Beatriz Lopes'),
('d7','0002345-11.2024.5.02.0003','Fernanda Lima Souza','Acompanhar publicação de sentença','Prazo processual','2026-10-15','Normal','Dra. Camila Reis'),
('d8','0004567-33.2025.5.02.0005','Indústria Metalúrgica Aço Forte','Preparação para audiência','Audiência','2026-10-20','Normal','Dra. Camila Reis')
on conflict (id) do nothing;

insert into public.movimentos (id, tipo, descricao, cliente, categoria, valor, data, status) values
('f1','Receita','Honorários contratuais — outubro','Construtora Horizonte Ltda.','Honorários',8500,'2026-10-01','Pago'),
('f2','Receita','Honorários de êxito','Comércio Bela Vista S.A.','Honorários',15200,'2026-09-28','Pago'),
('f3','Despesa','Custas processuais','Indústria Metalúrgica Aço Forte','Custas',1240,'2026-09-26','Pago'),
('f4','Receita','Honorários contratuais — outubro','Indústria Metalúrgica Aço Forte','Honorários',6200,'2026-10-05','Pendente'),
('f5','Despesa','Diligência e cartório','Marcos Andrade','Despesas processuais',380,'2026-09-24','Pago'),
('f6','Receita','Consulta jurídica avulsa','Juliana Prado Carvalho','Consultoria',900,'2026-09-22','Pago'),
('f7','Despesa','Perícia técnica','Comércio Bela Vista S.A.','Perícia',3500,'2026-10-06','Pendente'),
('f8','Receita','Honorários contratuais — outubro','Ricardo Tavares Moreira','Honorários',2400,'2026-10-08','Pendente')
on conflict (id) do nothing;

insert into public.documentos (id, nome, processo, tipo, tamanho, data) values
('doc1','Petição inicial — Andrade x Empregador.pdf','0801234-56.2025.8.02.0001','Petição','412 KB','2026-09-12'),
('doc2','Contrato social — Horizonte.pdf','0805678-90.2025.8.02.0001','Contrato','1.1 MB','2026-09-15'),
('doc3','Laudo pericial preliminar.pdf','0809988-77.2023.8.02.0001','Laudo','3.4 MB','2026-09-20'),
('doc4','Procuração — Ricardo Moreira.pdf','0807711-44.2025.8.02.0001','Procuração','180 KB','2026-09-23'),
('doc5','Contestação — Aço Forte.docx','0807711-44.2024.8.02.0001','Petição','268 KB','2026-09-25'),
('doc6','Comprovante de pagamento — custas.pdf','0806622-33.2024.8.02.0001','Financeiro','96 KB','2026-09-27')
on conflict (id) do nothing;

insert into public.agendamentos (id, cliente, tipo, data, hora, responsavel, modalidade, status) values
('a1','Marcos Andrade','Reunião de alinhamento','2026-09-29','09:00','Dra. Camila Reis','Online','Confirmado'),
('a2','Construtora Horizonte Ltda.','Audiência de instrução','2026-09-29','14:30','Dr. Paulo Nogueira','Presencial','Confirmado'),
('a3','Fernanda Lima Souza','Consulta inicial','2026-09-30','10:00','Dra. Camila Reis','Online','Pendente'),
('a4','Comércio Bela Vista S.A.','Reunião de perícia','2026-10-01','11:00','Dr. Eduardo Martins','Presencial','Confirmado'),
('a5','Ricardo Tavares Moreira','Audiência de conciliação','2026-10-02','13:00','Dra. Beatriz Lopes','Presencial','Pendente'),
('a6','Juliana Prado Carvalho','Reunião de acompanhamento','2026-10-03','16:00','Dr. Eduardo Martins','Online','Cancelado')
on conflict (id) do nothing;

insert into public.atendimentos (id, cliente, assunto, ultima_mensagem, canal, data, nao_lidas, status) values
('at1','Marcos Andrade','Dúvida sobre audiência','Preciso confirmar o horário da audiência de instrução.','WhatsApp','2026-09-28',2,'Aberto'),
('at2','Construtora Horizonte Ltda.','Envio de documentos','Segue em anexo o contrato solicitado.','Portal do cliente','2026-09-27',0,'Resolvido'),
('at3','Fernanda Lima Souza','Status do processo','Alguma novidade sobre a sentença?','E-mail','2026-09-27',1,'Aberto'),
('at4','Ricardo Tavares Moreira','Agendamento de conciliação','Combinado, nos vemos na audiência.','WhatsApp','2026-09-25',0,'Resolvido'),
('at5','Indústria Metalúrgica Aço Forte','Solicitação de honorários','Podem emitir a nota fiscal deste mês?','Portal do cliente','2026-09-24',3,'Aberto')
on conflict (id) do nothing;

insert into public.usuarios (id, nome, email, cargo, status, ultimo_acesso) values
('u1','Camila Reis','camila.reis@reisenogueira.adv.br','Administrador','Ativo','2026-09-28'),
('u2','Paulo Nogueira','paulo.nogueira@reisenogueira.adv.br','Advogado','Ativo','2026-09-28'),
('u3','Eduardo Martins','eduardo.martins@reisenogueira.adv.br','Advogado','Ativo','2026-09-27'),
('u4','Beatriz Lopes','beatriz.lopes@reisenogueira.adv.br','Advogado','Ativo','2026-09-26'),
('u5','Larissa Fontes','larissa.fontes@reisenogueira.adv.br','Estagiário','Ativo','2026-09-25'),
('u6','Tiago Vasconcelos','tiago.vasconcelos@reisenogueira.adv.br','Financeiro','Ativo','2026-09-24'),
('u7','Renata Duarte','renata.duarte@reisenogueira.adv.br','Estagiário','Inativo','2026-08-30')
on conflict (id) do nothing;

insert into public.tarefas (id, titulo, projeto, responsavel, prazo, prioridade, coluna) values
('t1','Levantar jurisprudência — caso Horizonte','Cível','Dr. Paulo Nogueira','2026-09-30','Alta','A fazer'),
('t2','Preparar quesitos periciais','Tributário','Dr. Eduardo Martins','2026-10-02','Normal','A fazer'),
('t3','Redigir contrarrazões de apelação','Cível','Dr. Paulo Nogueira','2026-10-01','Alta','Em andamento'),
('t4','Reunir provas — caso Andrade','Trabalhista','Dra. Camila Reis','2026-09-29','Alta','Em andamento'),
('t5','Revisar procuração digital','Família','Dra. Beatriz Lopes','2026-09-29','Baixa','Em revisão'),
('t6','Conferir cálculo de honorários','Financeiro interno','Tiago Vasconcelos','2026-09-28','Normal','Em revisão'),
('t7','Protocolar petição inicial — Prado Carvalho','Consumidor','Dr. Eduardo Martins','2026-09-25','Alta','Concluído'),
('t8','Enviar comprovante de custas','Cível','Larissa Fontes','2026-09-24','Baixa','Concluído')
on conflict (id) do nothing;

insert into public.posts (id, titulo, categoria, autor, data, status, visualizacoes) values
('bl1','Como funciona a reforma trabalhista em 2026','Trabalhista','Dra. Camila Reis','2026-09-20','Publicado',1840),
('bl2','Guia prático de planejamento sucessório','Família','Dra. Beatriz Lopes','2026-09-12','Publicado',962),
('bl3','O que muda no processo tributário municipal','Tributário','Dr. Eduardo Martins','2026-09-05','Publicado',1275),
('bl4','Direitos do consumidor em contratos digitais','Consumidor','Dr. Eduardo Martins','2026-09-26','Rascunho',0),
('bl5','Cláusulas essenciais em contratos empresariais','Cível','Dr. Paulo Nogueira','2026-09-27','Rascunho',0)
on conflict (id) do nothing;

insert into public.transacoes_pix (id, tipo, descricao, valor, data, status) values
('px1','Recebido','Honorários — Construtora Horizonte',8500,'2026-09-27','Concluído'),
('px2','Recebido','Honorários — Comércio Bela Vista',15200,'2026-09-25','Concluído'),
('px3','Enviado','Reembolso de custas — Marcos Andrade',380,'2026-09-24','Concluído'),
('px4','Recebido','Consulta jurídica — Juliana Prado',900,'2026-09-22','Processando')
on conflict (id) do nothing;

insert into public.notas_fiscais (id, numero, cliente, servico, valor, data, status) values
('nf1','2026/0142','Construtora Horizonte Ltda.','Honorários contratuais',8500,'2026-09-27','Emitida'),
('nf2','2026/0141','Comércio Bela Vista S.A.','Honorários de êxito',15200,'2026-09-25','Emitida'),
('nf3','2026/0140','Indústria Metalúrgica Aço Forte','Honorários contratuais',6200,'2026-09-28','Processando'),
('nf4','2026/0139','Juliana Prado Carvalho','Consultoria jurídica',900,'2026-09-22','Emitida')
on conflict (id) do nothing;

insert into public.acessos_processos (processo_numero, cliente, responsavel_principal, advogados_com_acesso) values
('0801234-56.2025.8.02.0001','Marcos Andrade','Dra. Camila Reis','{"Dra. Camila Reis","Larissa Fontes"}'),
('0805678-90.2025.8.02.0001','Construtora Horizonte Ltda.','Dr. Paulo Nogueira','{"Dr. Paulo Nogueira"}'),
('0002345-11.2024.5.02.0003','Fernanda Lima Souza','Dra. Camila Reis','{"Dra. Camila Reis"}'),
('0809988-77.2023.8.02.0001','Comércio Bela Vista S.A.','Dr. Eduardo Martins','{"Dr. Eduardo Martins","Renata Duarte"}'),
('0807711-44.2025.8.02.0001','Ricardo Tavares Moreira','Dra. Beatriz Lopes','{"Dra. Beatriz Lopes"}'),
('0806622-33.2024.8.02.0001','Indústria Metalúrgica Aço Forte','Dr. Paulo Nogueira','{"Dr. Paulo Nogueira","Dra. Camila Reis"}')
on conflict (processo_numero) do nothing;
