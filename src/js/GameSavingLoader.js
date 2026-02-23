import read from './reader';
import json from './parser';

// export default class GameSavingLoader {
//   static async load() {
//     try {
//       const data = await read();
//       const value = await json(data);
//       return JSON.parse(value);
//     } catch (error) {
//       return error;
//     };
//   };
// };

import GameSaving from './GameSaving';
export default class GameSavingLoader {
  static async load() {
    try {
      const buffer = await read();
      const data = await json(buffer);
      const obj = JSON.parse(data);
      return new GameSaving (obj.id, obj.created, obj.userInfo);
    } catch (error) {
      return error;
    };
  };
};
