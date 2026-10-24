# Plugins do PHP IDE

Este repositório guarda o catálogo que a IDE consulta para pesquisar e instalar plugins. Cada plugin tem seu próprio repositório e pode ser atualizado sem recompilar a aplicação.

| Plugin | Repositório |
|---|---|
| Laravel e Blade | [plugin-laravel](https://github.com/phpforge-dev/plugin-laravel) |
| Variáveis de ambiente | [plugin-dotenv](https://github.com/phpforge-dev/plugin-dotenv) |
| Dockerfile e Compose | [plugin-docker](https://github.com/phpforge-dev/plugin-docker) |
| Bash | [plugin-bash](https://github.com/phpforge-dev/plugin-bash) |
| TODO Hints | [plugin-todo-hints](https://github.com/phpforge-dev/plugin-todo-hints) |

## Instalar

No PHP IDE **0.2.9 ou superior**, abra **Aparência → Plugins…**. Na aba **Marketplace**, procure o plugin e clique em **Instalar**. A IDE mostra a versão, a origem e as permissões antes de ativar.

Também é possível usar **Instalar pelo Git…** e colar a URL HTTPS do repositório. Uma tag, branch ou commit é opcional; a IDE registra o commit que foi instalado. O repositório precisa ter `plugin.json` e o JavaScript pronto na raiz. Nenhum script de build ou instalação é executado.

Laravel, .env, Docker e Bash já acompanham a distribuição da IDE. Podem ser desativados, removidos ou substituídos por outra versão na aba **Instalados**. Os instaladores anteriores à 0.2.9 ainda usam a integração antiga e não têm Marketplace.

## Publicar no catálogo

1. Publique o plugin no seu repositório, com `plugin.json`, o JavaScript pronto e a licença.
2. Abra um pull request alterando `catalog.json` neste repositório.
3. Informe o ID, nome, descrição, autor, versão, versão mínima da IDE, URL HTTPS e o commit completo da publicação.
4. Execute `node scripts/validate-catalog.mjs` para conferir os dados. A revisão do PR verifica o pacote e a origem antes de publicar a entrada.

O catálogo usa commits fixos de 40 caracteres. Atualizar uma branch no repositório do autor não altera uma versão já listada: para publicar uma atualização, altere a versão e o commit no catálogo. A IDE oferece a atualização; ela não substitui plugins automaticamente.

O JSON é público e está em [`catalog.json`](catalog.json). A IDE guarda a última lista válida para continuar mostrando o catálogo quando estiver sem conexão. O download de um plugin ainda precisa de internet.

## Licença

MIT. Código e catálogo mantidos por Jeidison Farias, na PHP Forge.
