import { Link } from "react-router-dom";

export const carouselImages = [
    { id: 1, url: "https://images.pexels.com/photos/29089597/pexels-photo-29089597/free-photo-of-stunning-autumn-beach-sunset-with-waves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { id: 2, url: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg" },
    { id: 3, url: "https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
]


function BlogPost({item}) {

    return (
        <div className="flex flex-col justify-center max-w-87.5 max-h-150 shadow-xl border-gray-100 border">
            <div className="min-h-75 customImg pt-4 px-4" style={{ backgroundImage: `url(${item.url})` }}>
                <span className="p-2 bg-danger text-white">NEW</span>
            </div>

            <div className="flex flex-col p-4 gap-2">

                <div className="flex gap-3 text-xs">
                    <p href="#" className="text-blue-500 font-semibold">Google</p>
                    <p href="#" className="text-gray-400">Trending</p>
                    <p href="#" className="text-gray-400">New</p>
                </div>

                {/* Başlık */}
                <h2 className="text-base font-bold text-gray-900 leading-snug">
                    {item.title}
                </h2>

                {/* Açıklama */}
                <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                </p>

                {/* Meta bilgiler */}
                <div className="flex gap-5 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                        🕐 {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                        📈 {item.commentCount} comments
                    </span>
                </div>

                <Link href="#" className="flex items-center gap-1 text-sm font-bold text-gray-900 mt-1">
                    Learn More <span>›</span>
                </Link>
            </div>
        </div>
    );
}
export default BlogPost
