import axios from "axios";

export default {
    getMovies: function () {
        // return axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=b513c137")
        return axios.get("https://fakestoreapi.com/products")
    }
}