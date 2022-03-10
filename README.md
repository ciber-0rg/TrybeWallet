# TrybeWallet
React and Redux

# Habilidades

Neste projeto, voce é capaz de:

- Criar um store Redux em aplicações React

- Criar reducers no Redux em aplicações React

- Criar actions no Redux em aplicações React

- Criar dispatchers no Redux em aplicações React

- Conectar Redux aos componentes React

- Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---

# Entregáveis

Neste projeto, eu desenvolvi uma carteira de controle de gastos com conversor de moedas, ao utilizar essa aplicação um usuário deverá ser capaz de:

- Adicionar, remover e editar um gasto;
- Visualizar uma tabelas com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha;


# Requisitos do projeto

## Lista de requisitos

### Página de Login

Uma página para que a pessoa usuária se identifique, com email e senha. Esta página deve ser a página inicial de seu aplicativo.

#### 1. Crie uma página inicial de login com os seguintes campos e características

- A rota para esta página deve ser ‘/’.

- Você deve criar um local para que a pessoa usuária insira seu email e senha. Utilize o atributo `data-testid="email-input"` para o email e `data-testid="password-input"` para a senha.

- Crie um botão com o texto ‘Entrar’.

- Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:

  - O email está no formato válido, como 'alguem@alguem.com'.

  - A senha possui 6 ou mais caracteres.

- Salve o email no estado da aplicação, com a chave **_email_**, assim que a pessoa usuária logar.

- A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.

  **O que será verificado:**

- A rota para esta página deve ser "/"

- Crie um local para que o usuário insira seu email e senha

- Crie um botão com o texto "Entrar"

- Realize as seguintes verificações nos campos de email, senha e botão:

- Se é um e-mail no formato válido;

- Se a senha tem 6 ou mais caracteres;

- Desabilitar o botão `Entrar` caso e-mail e/ou senha estiverem no formato inválido

- Habilitar o botão `Entrar` caso e-mail e senha sejam válidos

- Salve o email no estado da aplicação, com a chave email, assim que o usuário logar

- A rota deve ser mudada para "/carteira" após o clique no botão

### Página da Carteira

Uma página para gerenciar a carteira de gastos em diversas moedas, e que traga a despesa total em real que é representado pelo código 'BRL'. Esta página deve ser renderizada por um componente chamado **_Wallet_**.

### Configurando sua página

#### 2. Crie uma página para sua carteira com as seguintes características

- A rota para esta página deve ser `/carteira`

- O componente deve se chamar Wallet e estar localizado na pasta `src/pages` no arquivo `Wallet.js`

  **O que será verificado:**

- A rota para esta página deve ser "/carteira"

- O componente deve se chamar Wallet e estar localizado na pasta "src/pages"

### Header

#### 3. Crie um header para a página de carteira contendo as seguintes características

- Um elemento que exiba o email da pessoa usuária que fez login.

  - Adicione o atributo `data-testid="email-field"`.

- Um elemento com a despesa total gerada pela lista de gastos.

  - Adicione o atributo `data-testid="total-field"`.

  - Inicialmente esse elemento deve exibir o valor `0`

- Um elemento que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.

  - Adicione o atributo `data-testid="header-currency-field"`.

**O que será verificado:**

- Um elemento que exiba o email do usuário que fez login.
- Crie um elemento com a despesa total gerada pela lista de gastos.
- Crie um elemento que mostre que qual câmbio está sendo utilizado, que será neste caso "BRL"

### Formulário de adição de Despesa

#### 4. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características

- Um campo para adicionar valor da despesa.

  - Adicione o atributo `data-testid="value-input"`.

- Um campo para adicionar a descrição da despesa.

  - Adicione o atributo `data-testid="description-input"`.

- Um campo para selecionar em qual moeda será registrada a despesa.

  - Adicione o atributo `data-testid="currency-input"`.

  - O campo deve ter a label `Moeda`.

  - O campo deve ser um `<select>`.

- Um campo para adicionar qual método de pagamento será utilizado.

  - Adicione o atributo `data-testid="method-input"`.

  - Este campo deve ser um dropdown. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

- Um campo para selecionar uma categoria (tag) para a despesa.

  - Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

  - Adicione o atributo `data-testid="tag-input"`.

- Um botão com o texto \'Adicionar despesa\' que salva as informações da despesa no estado global e atualiza a soma de despesas no header.

  - Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:

  - Os valores dos campos devem ser salvos no estado da aplicação, na chave **_expenses_**, dentro de um array contendo todos gastos que serão adicionados:

  - Após adicionar a despesa, atualize a soma total das despesas (utilize a chave `ask` para realizar essa soma). Essa informação deve ficar no header dentro do elemento com `data-testid="total-field"`

  - Após adicionar a despesa, limpe o valor do campo `valor da despesa`

    As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:

**O que será verificado:**

- Um campo para adicionar o valor da despesa
- Um campo para adicionar a descrição da despesa
- Um campo para selecionar em qual moeda será registrada a despesa
- Um campo para selecionar qual método de pagamento será utilizado
- Um campo para selecionar uma categoria (tag) para a despesa
- Um botão com o texto "Adicionar despesa" que salva as informações da despesa no estado global e atualiza a soma de despesas no header

#### 5. Implemente a lógica para preencher as opções do campo "Moedas" buscando as siglas da API

- Os valores do campo de moedas devem ser puxados através de uma requisição à API, que deve ser feita ao entra na página `/carteira`.

- A label do select deve possuir o nome `Moeda`.

- Os valores do campo de moedas devem vir da API sendo representado pela sigla de cada moeda, exemplo: 'USD', 'CAD', 'EUR'...

  - Adicione um atributo _data-testid_ para cada uma das opções acima com o câmbio correspondente, como por exemplo `data-testid="USD"`.

  - O endpoint utilizado deve ser: <https://economia.awesomeapi.com.br/json/all> .

  - Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo).

  **O que será verificado:**

- O campo para selecionar em qual moeda será registrada a despesa tem as opções corretas

### Tabela de Gastos

#### 6. Desenvolva uma tabela com os gastos contendo as seguintes características

- A tabela deve possuir um cabeçalho **exatamente** com os campos `Descrição`, `Tag`, `Método de pagamento`, `Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido`, `Moeda de conversão` e `Editar/Excluir`.

**O que será verificado:**

- A tabela deve possuir um cabeçalho com os campos `Descrição`, `Tag`, `Método de pagamento`, `Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido`, `Moeda de conversão` e `Editar/Excluir`.

#### 7. Implemente a lógica para que a tabela seja alimentada pelo estado da aplicação

- A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave **_expenses_** que vem do reducer `wallet`.

  - O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente

  - Por padrão, o elemento que exibe a 'Moeda de conversão' deverá ser sempre 'Real'.

  - Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).

  - Utilize sempre o formato `0.00` (número - ponto - duas casas decimais)

  **O que será verificado:**

  - A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave expenses que vem do reducer wallet.

#### 8. Crie um botão para deletar uma despesa da tabela contendo as seguintes características


- O botão deve ser o último item da linha da tabela e deve possuir `data-testid="delete-btn"`.

- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global e o header.

**O que será verificado:**

- O botão deve estar dentro do último item da linha da tabela e deve possuir `data-testid="delete-btn"`
- Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global
- Ao clicar no botão para remover uma despesa, o valor correspondente deve ser subtraído e a despesa total deve ser atualizada no header
