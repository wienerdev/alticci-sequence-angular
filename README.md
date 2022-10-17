<br>
<h1 align="center">
Calculadora Alticci Sequence (Frontend) ⚛️
</h1>
<br>

## 💬 Sobre o repositório

A Calculadora Alticci Sequence calcula um valor da sequência Alticci com base em um índice passado, na qual é definida da seguinte forma:

n=0 => a(0) = 0

n=1 => a(1) = 1

n=2 => a(2) = 1

n>2 => a(n) = a(n-3) + a(n-2)

O serviço principal tira partido de cálculos passados para acelerar cálculos futuros por meio do caching (utilizando memoização). Além do serviço principal, há também um serviço pelo Spring Cache, para demonstrar a diferença de performance quando não é utilizada a memoização.

## ⚠ Pré-requisitos para execução do projeto

* Angular (v14)
* Angular CLI
* Node.js

## 📌 Como utilizar?

* OBS: Para os projeto funcionar normalmente, deve-se rodar o backend localmente. [Clique aqui para navegar ao repositório.](https://github.com/wienerdev/alticci-sequence)

Digite o seguinte comando no diretório raiz para baixar as dependências necessárias:

```
npm install
```

Para executar o projeto, digite:

```
ng serve
```

Após o build, acesse o projeto pelo link: http://localhost:4200/
