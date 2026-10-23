# PHP IDE Plugins

Aqui ficam os plugins do [PHP IDE](https://github.com/phpforge-dev/php-ide), mantidos por [Jeidison Farias](https://github.com/jeidison). O primeiro é o TODO Hints, que também serve de exemplo para quem quer criar uma extensão.

## TODO Hints

O TODO Hints marca comentários `TODO` e `FIXME` e mostra quantos existem no arquivo. Se você criar um arquivo `.todo-owners` com os nomes da equipe, ele também sugere responsáveis ao digitar `TODO(`.

### Instalar

1. Baixe ou clone este repositório.
2. Na IDE, abra **Aparência → Plugins… → Instalar pasta**.
3. Selecione `plugins/todo-hints` e revise a permissão `project.read`.
4. Abra um arquivo PHP, Blade ou Markdown com `TODO: revisar`.

Você só precisa autorizar `project.read` se quiser as sugestões de responsáveis. Sem essa permissão, as marcações e a contagem continuam funcionando. Veja os exemplos no [README do plugin](plugins/todo-hints/README.md).

## Licença

MIT. Copyright © 2026 Jeidison Farias.
