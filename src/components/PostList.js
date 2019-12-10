import React, { Component } from 'react';
import PostItem from './PostItem';
// import { Container } from './styles';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/400?img=59"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/400?img=50"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/400?img=12"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 4,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/400?img=10"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!"
          },
          {
            id: 5,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/400?img=13"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 5,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://i.pravatar.cc/400?img=8"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 6,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/400?img=10"
            },
            content: "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };  

  render() {
    const {posts} = this.state;
    return (
      <ul className="postList">
        {posts.map(post => <li key={String(post.id)}> <PostItem {...post} /></li>)}
      </ul>
    );
  }
}
