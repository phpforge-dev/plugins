# TODO Hints

Instale em **Aparência › Plugins… › Instalar de pasta…** escolhendo esta pasta, ou copie-a para
`.php-ide/plugins/todo-hints` dentro de um projeto. Na primeira ativação, a IDE pede autorização
para ler `.todo-owners`, por meio da permissão `project.read`. Se você não autorizar,
os avisos e a contagem continuam funcionando; apenas as sugestões de responsáveis ficam indisponíveis.


## Exemplo

Em um arquivo PHP, Blade ou Markdown, escreva `TODO: revisar` ou `FIXME: corrigir` para ver os diagnósticos e a contagem no editor.

Para sugerir responsáveis, crie `.todo-owners` na raiz do projeto com um nome por linha. Depois digite `TODO(` no editor.

## Distribuir

Instale esta pasta diretamente ou compacte `plugin.json`, `main.js`, `README.md` e `LICENSE` em um ZIP. O manifesto deve estar na raiz do ZIP ou em sua única pasta principal.

Requer PHP IDE 0.2.0 ou superior e a API de plugins correspondente. O plugin roda em um Web Worker, sem Node ou acesso direto à rede.
