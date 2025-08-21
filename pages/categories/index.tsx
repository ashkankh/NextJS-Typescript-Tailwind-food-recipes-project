import CategoriesPage from '@/components/templates/categoriesPage/categoriesPage'
import { menuType } from '@/types/menu.types';
import { Context } from 'vm';

function index({ data }: { data: menuType[] }) {
    return (
        <>
            <CategoriesPage data={data} />
        </>
    )
}


export async function getServerSideProps(context: Context) {
    const { query: { difficulty, time } } = context;
    const res = await fetch("http://localhost:3001/data/")
    const data: menuType[] = await res.json()

    const filteredData = data.filter(item => {
        const matchDifficulty = difficulty ? item.details[2].Difficulty === difficulty : true;
        const [detail] = item.details[4]['Cooking Time'].split(" ")
        const matchTime = time
            ? time === "more40"
                ? +detail >= 40
                : +detail <= +time
            : true;
        return matchDifficulty && matchTime;
    });
    return {
        props: {
            data: filteredData
        }
    }

}



export default index