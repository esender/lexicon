import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchVerb = async (verb: string) => {
  return axios.get(`/words/${verb}.json`).then((res) => res.data);
};

const useVerb = function (verb: string) {
  return useQuery({ queryKey: ["word", verb], queryFn: () => fetchVerb(verb) });
};

export default useVerb;
