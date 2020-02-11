import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/");
  },
  getMultipleEmp: function(number) {
    return axios.get(`https://randomuser.me/api/?results=${number}&nat=us`)
  }
};
