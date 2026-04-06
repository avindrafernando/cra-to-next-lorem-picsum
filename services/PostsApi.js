import axios from "axios";
import { Headset } from "@material-ui/icons";

const PostsApi = {
  getPosts() {
    return axios.get("https://picsum.photos/list").then((response) => {
      return response.data;
    });
  },
  getPost(id) {
    return axios.get(`https://picsum.photos/id/${id}/info`).then((response) => {
      return response.data;
    });
  },
};

export default PostsApi;
