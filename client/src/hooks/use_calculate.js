import { useState, useEffect } from 'react'
import { getCalculations } from '../requests'

const useCalculate = () => {
  const [frequency, setFrequency] = useState('annually');
  const [init, setInit] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [rate, setRate] = useState(2.3);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([{ month: 1, amount: 0 }]);

  useEffect(() => {
    setLoading(true);
    requestData();
  }, [frequency, init, monthly, rate])

  const requestData = async () => {
    try {
      const res = await getCalculations({ frequency, init, monthly, rate });
      setData(res.data);
    } catch (e) {
      console.log("An error occured...");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return [
    setFrequency,
    setInit,
    setMonthly,
    setRate,
    loading,
    data
  ]
}

export default useCalculate;