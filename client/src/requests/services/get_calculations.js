import RequestBuilder from '../builder'

export function getCalculations(args) {
  const { frequency, init, monthly, rate } = args;
  let query = `?frequency=${frequency}&init=${init}&monthly=${monthly}&rate=${rate}`;
  return new RequestBuilder('get', 'calc').withParams(query).send();
}