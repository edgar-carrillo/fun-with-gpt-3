import axios from 'axios';

const server = {

  addUser: (user) => {
    axios.post('users/user', {
      email: user.email,
      name: user.name,
      photoURL: user.photoURL
    })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },

  addCard: (card) => new Promise ((resolve, reject) => {
    axios.post('cards/card', {
      id: card.id,
      userEmail: card.userEmail,
      prompt: card.prompt,
      aiResponse: card.aiResponse,
      timeStamp: card.timeStamp,
      engineModel: card.engineModel,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  }),

}

export default server;
