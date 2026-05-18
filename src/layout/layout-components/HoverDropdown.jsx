import { Link } from "react-router-dom";

function HoverDropdown({ womenItems, menItems }) {
    const topWomenItems = womenItems.slice(0,5);
    const topMenItems = menItems.slice(0,5);
    return (
        <div className='absolute hidden group-hover:block top-full left-0 z-10 w-100 bg-white rounded-2xl'>
            <div className='flex p-8 gap-32 font-semibold'>
                <div className="flex flex-col gap-4 w-full" >
                    <h4 className="text-secondary mb-3" >Kadın</h4>
                    {topWomenItems.map((cat) => (
                        <Link key={cat.id} to={`/shop/${cat.gender}/${cat.code.slice(2)}/${cat.id}`} className='block'>
                            {cat.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h4 className="text-secondary mb-3" >Erkek</h4>
                    {topMenItems.map((cat) => (
                        <Link key={cat.id} to={`/shop/${cat.gender}/${cat.code.slice(2)}/${cat.id}`} className='block '>
                            {cat.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default HoverDropdown;