configurações JEST

instalando dependênciasÇ
    -- yarn add jest @types/jest -D

configurações do jest.config.ts:

    -- bail = true.
        Responsável por não continuar o teste em caso de erro.

    -- preset:
        Antes deve instalar a dependência yarn add ts-jest -D
        preset: "ts-jest", em jest.config.ts

     -- testMatch: [
         deve ser criada uma pasta com o nome __tests__, onde será criado também os arquivos de testes.
        "**/__tests__/*.test.ts"  // onde irá ler todos os arquivos com final tests.ts.

  ],