import axios from 'axios';
import { config } from '../constants';

// scalable request builder method
// would be possible to expand it's functionality with more complicated routing etc.
export default class RequestBuilder {
  constructor(method, type) {
    this.method = method || null;
    this.type = type || "";
    this.args = null;
    this.route = null;
  }

  withRoute(route) {
    this.route = route;
    return this;
  }

  withParams(args) {
    this.args = args;
    return this;
  }

  async send() {
    if (!(this.method && this.type)) {
      throw new Error("Missing arguments!");
    }
    
    const method = methods[this.method];

    if (!this.route) {
      this.route = routes[this.type];
    }

    if (this.args) {
      this.route = this.route + "/" + this.args;
    }

    const route = config.API_ROOT + this.route;

    if(this.method === 'post') {
      // f.i. for POST request which requires body
      return;
    }

    return method(route);
  }
}

const routes = {
  calc: "/calc",
}

const methods = {
  post: axios.post,
  get: axios.get,
}