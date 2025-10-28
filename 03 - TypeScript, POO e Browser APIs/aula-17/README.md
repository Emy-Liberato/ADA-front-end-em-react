  # Configuração TypeScript

  1. Inicializar um projeto Node.js
    1.1 npm init - mostra as informações dos projetos, e podemos colocar `npm init -y`, para já responder yes para todas as perguntas

  2. Instalar o TypeScript
    2.1 Instalação Global: `npm install -g typescript`
    2.2 Instalação local (apenas dentro do projeto ) `npm install typescript`

  3. Utilizar o TypeScript instalado para transpilar o nosso código (convertendo nosso código TS para JS)
    3.1 `npx tsc index.ts`
    3.2 `npx tsc index.ts --watch` - para que seja transpilado automaticamente

  4. Configirar o TypeScript `npx tsc --init`, cria um arquivo com as configurações
    4.1 "target": "es6" - versão do JS
    4.2 "strict": true - faz a validação da checagem de tipo
    4.3 "noEmitonError": false - transpila apenas se tiver nenhum erro
    4.4 "outDir": ./dist  - nos permite deixar os arquivos transpilador em umas pasta