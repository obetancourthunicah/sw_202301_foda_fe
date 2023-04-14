import { FC, useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { getHomeData } from "./HomeService";
import Page from "../../components/Page";
import { useGetAllQuery } from '@/store/services/empServices';
export const Home: FC = () => {
  const {data: empresas} = useGetAllQuery({});
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getHomeData()
      .then((apiData) => {
        setData(apiData.msg);
        setIsLoading(false);
        setError(null);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Error while loading data");
      });
  }, [refresh]);
  return (
    <Page>
      <h1>Home Page</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <a
        onClick={() => {
          setRefresh(!refresh);
        }}
      >
        Refresh
      </a>
      {data && !isLoading && !error && (
        <Card>
          <h2>{data}</h2>
        </Card>
      )}
      { JSON.stringify(empresas) }
    </Page>
  );
};
