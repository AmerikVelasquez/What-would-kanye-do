export default class Kanye {
  static async getQuote() {
      try {
          const response = await fetch(`https://api.kanye.rest`);
      if (!response.ok){
          throw Error(response.statusText);
      }
      return response.json();
      } catch (error) {
          return error.message;
      }
  }
}