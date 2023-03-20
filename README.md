# Perfomance de [Array em React](https://cursos.alura.com.br/extra/alura-mais/melhore-a-performance-das-suas-listas-em-react-c1021)



## Perfomance das listas em React
- utilizar memo na exportação do componente
  - ele faz a renderização apenas do novo componete ou item
  - memo não funciona com funções
    - desse jeito a gente usa a função useCallBack do React

- evitar usar o index como key nos componetes 
  - usar key para linkar o virtualDom com o DOM real
  - caso remover o ultimo item não tem problema 
  - mas se for remover o primeiro ou algum do meio todos os outros sofrem alteração e são renderizados novamente.

- Evitar spread de props quando passa argumentos em componentes , devido a grande quantidades de proriedades que podem ser passados em ser usadas


- [Bumma](https://bulma.io/documentation/overview/start/) para estelização