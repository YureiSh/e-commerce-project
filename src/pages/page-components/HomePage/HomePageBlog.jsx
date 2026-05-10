import BlogPost from "../../../components/BlogPost";


export const data = [
    {
        id: 1, title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021", commentCount: "10", url: "https://images.pexels.com/photos/29089597/pexels-photo-29089597/free-photo-of-stunning-autumn-beach-sunset-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        id: 2, title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021", commentCount: "10", url: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg"
    },
    {
        id: 3, title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021", commentCount: "10", url: "https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
]

function HomePageBlog() {

    return (
        <>
            <section className="flex flex-col gap-8 max-w-400 m-auto pt-12 pb-24 ">
                <div className="text-center">
                    <h6 className="font-semibold text-primary mt-3">Practice Advice</h6>
                    <h2 className="font-bold text-2xl text-secondary mt-3">Featured Posts </h2>
                    <p className="font-semibold text-md text-[#737373] mt-3">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                    {data.map((item) => (
                        <BlogPost key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </>
    );
}
export default HomePageBlog;