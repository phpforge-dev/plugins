# Plugins do PHP IDE

Este repositório guarda o catálogo que a IDE consulta para pesquisar e instalar plugins. Cada plugin tem seu próprio repositório. As contribuições JavaScript podem ser atualizadas pela IDE. Os backends Rust de PHP Intelligence, Git, Terminal, Docker Services, Agents e Database são bibliotecas externas vinculadas à compilação da IDE; mudar esses backends exige recompilar a aplicação. Debugger, Composer e testes PHP usam executáveis independentes.

| Plugin | Repositório |
|---|---|
| Laravel | [plugin-laravel](https://github.com/phpforge-dev/plugin-laravel) |
| .env | [plugin-dotenv](https://github.com/phpforge-dev/plugin-dotenv) |
| Docker | [plugin-docker](https://github.com/phpforge-dev/plugin-docker) |
| Bash | [plugin-bash](https://github.com/phpforge-dev/plugin-bash) |
| TODO Hints | [plugin-todo-hints](https://github.com/phpforge-dev/plugin-todo-hints) |
| Prettier | [plugin-prettier](https://github.com/phpforge-dev/plugin-prettier) |
| PHP Debugger / Xdebug | [plugin-php-debugger](https://github.com/phpforge-dev/plugin-php-debugger) |
| Composer | [plugin-composer](https://github.com/phpforge-dev/plugin-composer) |
| PHPUnit / Pest | [plugin-php-tests](https://github.com/phpforge-dev/plugin-php-tests) |
| Markdown | [plugin-markdown](https://github.com/phpforge-dev/plugin-markdown) |
| Symfony / Twig | [plugin-symfony](https://github.com/phpforge-dev/plugin-symfony) |
| Ignore files | [plugin-ignore](https://github.com/phpforge-dev/plugin-ignore) |
| SVG Preview | [plugin-svg-preview](https://github.com/phpforge-dev/plugin-svg-preview) |
| Image Preview | [plugin-image-preview](https://github.com/phpforge-dev/plugin-image-preview) |
| PHP Intelligence | [plugin-php-intelligence](https://github.com/phpforge-dev/plugin-php-intelligence) |
| Docker Services | [plugin-docker-services](https://github.com/phpforge-dev/plugin-docker-services) |
| Terminal | [plugin-terminal](https://github.com/phpforge-dev/plugin-terminal) |
| Git | [plugin-git](https://github.com/phpforge-dev/plugin-git) |
| Agents | [plugin-agents](https://github.com/phpforge-dev/plugin-agents) |
| PHP Formatter | [plugin-php-formatter](https://github.com/phpforge-dev/plugin-php-formatter) |
| Database / SQL | [plugin-database](https://github.com/phpforge-dev/plugin-database) |
| Web Languages | [plugin-web-languages](https://github.com/phpforge-dev/plugin-web-languages) |

## Instalar

No PHP IDE **0.2.9 ou superior**, abra **Aparência → Plugins…**. Na aba **Marketplace**, procure o plugin e clique em **Instalar**. A IDE mostra a versão, a origem e as permissões antes de ativar.

Também é possível usar **Instalar pelo Git…** e colar a URL HTTPS do repositório. Uma tag, branch ou commit é opcional; a IDE registra o commit que foi instalado. O repositório precisa ter `plugin.json` e o JavaScript pronto na raiz. Nenhum script de build ou instalação é executado.

A lista de plugins padrão depende da versão da IDE. A integração dos doze novos pacotes é destinada à IDE 0.2.13; publicar o catálogo não publica um instalador dessa versão. Laravel, .env, Docker e Bash já acompanham as distribuições anteriores. Podem ser desativados, removidos ou substituídos por outra versão na aba **Instalados**. Os instaladores anteriores à 0.2.9 ainda usam a integração antiga e não têm Marketplace.

## Publicar no catálogo

1. Publique o plugin no seu repositório, com `plugin.json`, o JavaScript pronto e a licença.
2. Abra um pull request alterando `catalog.json` neste repositório.
3. Informe o ID, nome, descrição, autor, versão, versão mínima da IDE, URL HTTPS e o commit completo da publicação.
4. Execute `node scripts/validate-catalog.mjs` para conferir os dados. A revisão do PR verifica o pacote e a origem antes de publicar a entrada.

O catálogo usa commits fixos de 40 caracteres. Atualizar uma branch no repositório do autor não altera uma versão já listada: para publicar uma atualização, altere a versão e o commit no catálogo. A IDE oferece a atualização; ela não substitui plugins automaticamente.

O JSON é público e está em [`catalog.json`](catalog.json). A IDE guarda a última lista válida para continuar mostrando o catálogo quando estiver sem conexão. O download de um plugin ainda precisa de internet.

## Licença

MIT. Código e catálogo mantidos por Jeidison Farias, na PHP Forge.
