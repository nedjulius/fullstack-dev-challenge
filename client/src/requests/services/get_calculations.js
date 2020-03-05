import RequestBuilder from '../builder'

export function getCalculations(args) {
  const { frequency, init, monthly, rate } = args;
  return new RequestBuilder('get', 'calc').withArguments(`${frequency}/${init}/${monthly}/${rate}`).send();
}