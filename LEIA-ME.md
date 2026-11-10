# Template de landing page – clínicas de estética

Cada site é a mesma pasta `template` com um arquivo `dados.js` diferente.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O site. Não precisa mexer. |
| `dados.js` | Nome, contatos, procedimentos, cor, fotos. É o único arquivo que você edita. |
| `vercel.json` | Impede o Google de indexar a prévia. **Apague quando o cliente fechar.** |
| `fotos/` | Crie esta pasta e coloque as fotos do cliente aqui. |

## Montar uma prévia (cerca de 10 minutos)

1. Copie a pasta `template` e renomeie com o nome da clínica, por exemplo `clinica-bella-pele`.
2. Abra `dados.js` em qualquer editor de texto (VS Code, Bloco de Notas) e troque os dados.
   - `whatsapp`: só números com DDD, por exemplo `43999990000`.
   - `google`: nota e número de avaliações reais do perfil no Google.
   - `corPrimaria`: uma cor da identidade da clínica (pegue do Instagram dela).
   - `procedimentos`: 4 a 6 itens tirados do Instagram ou do Google.
   - Deixe `previa: true`.
3. Dê dois cliques no `index.html` para conferir no navegador.
4. Publique na Vercel (veja abaixo) e teste o link no celular.

## Publicar na Vercel

**Opção A – pelo terminal (mais rápida depois da primeira vez)**

```bash
cd clinica-bella-pele
npx vercel --prod
```

Na primeira vez ele pede login e o nome do projeto. Use o nome da clínica, assim o link fica `clinica-bella-pele.vercel.app`.

**Opção B – pelo site**

Acesse vercel.com/new, escolha subir uma pasta e arraste a pasta da clínica.

## Quando o cliente fechar

1. Coloque as fotos em `fotos/` e preencha `fotos.destaque` e `fotos.sobre` em `dados.js`.
2. Preencha `sobre.texto`, `sobre.responsavel` e `sobre.registro` (nome e número no conselho).
3. Mude `previa` para `false` e **apague o `vercel.json`**.
4. Publique de novo e conecte o domínio da cliente em Settings → Domains na Vercel.

## Regras importantes

- Não use fotos do Instagram da clínica na prévia, nem depoimentos inventados.
- Para clínicas médicas, o site precisa mostrar nome e CRM do responsável técnico.
- Se a cliente recusar, apague o projeto na Vercel no mesmo dia.
- O plano gratuito (Hobby) da Vercel é para uso não comercial; para sites de clientes pagantes, use o plano Pro ou outra hospedagem.
