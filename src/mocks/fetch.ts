import planetsData from "./planetsData";

const mockFetch = () => ({
  status: 200,
  ok: true,
  json: async () => planetsData,
} as Response);

export default mockFetch;
