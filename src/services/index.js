import axios from 'axios';
import mocks from "../mocks/mocks";

const api = axios.create({
    baseURL: "http://localhost:5000/"
  });
  




const mockFetcher = ({
  method,
  url,
  delay = 1000
}) => new Promise(res => setTimeout(() => res(mocks[`${method}__${url}`]), delay));

const useMocks = true;
const fetch = useMocks ? mockFetcher : api;

export const getVendorList = () => fetch({method: "GET", url: `/vendors`});
export const createVendor = data => fetch({method: "POST", url: `/vendors`, data});
export const updateVendor = (id,data) => fetch({method: "PUT", url: `/vendors/${id}`, data});