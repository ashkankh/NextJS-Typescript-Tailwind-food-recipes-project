import ComparePage from "@/components/templates/comparePage";
import { menuType } from "@/types/menu.types";
import { GetServerSidePropsContext } from "next";
function index({
  dataFood1,
  dataFood2,
}: {
  dataFood1: menuType;
  dataFood2: menuType;
}) {
  return <ComparePage dataFood1={dataFood1} dataFood2={dataFood2}/>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { food1, food2 } = context.query;
  const [res1, res2] = await Promise.all([
    fetch(`${process.env.BASE_URL}/data/${food1}`),
    fetch(`${process.env.BASE_URL}/data/${food2}`),
  ]);

  if (!res1 || !res2) {
    return {
      notFound: true,
    };
  }

  const [dataFood1, dataFood2] = await Promise.all([
    res1.json() as Promise<menuType>,
    res2.json() as Promise<menuType>,
  ]);

  if (!dataFood1.name || !dataFood2.name) {
    return {
      notFound: true,
    };
  }
  console.log(dataFood1, dataFood2);
  return {
    props: { dataFood1, dataFood2 },
  };
}

export default index;
