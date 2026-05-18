import { Link } from "react-router-dom";

function EditorsPickLayout({ images }) {
    if (!images || images.length < 4) return null;

    return (
        <>
            <div className="hidden md:grid grid-cols-12 grid-rows-2 gap-2 h-150">
                <Link to={images[0].href} className="col-span-6 row-span-2 relative group overflow-hidden customImg">
                    <img src={images[0].url} alt={images[0].id} className="w-full h-full object-cover rounded-lg" />
                    <div className="px5py5ImgText">
                        <span className="px4ImgTextPadding">
                            {images[0].title}
                        </span>
                    </div>
                </Link>

                <Link to={images[1].href} className="col-span-4 row-span-2 relative group overflow-hidden customImg">
                    <img src={images[1].url} alt={images[1].id} className="w-full h-full object-cover rounded-lg" />
                    <div className="px5py5ImgText">
                        <span className="px4ImgTextPadding">
                            {images[1].title}
                        </span>
                    </div>
                </Link>

                <Link to={images[2].href} className="col-span-2 row-span-1 relative group overflow-hidden customImg">
                    <img src={images[2].url} alt={images[2].id} className="w-full h-full object-cover rounded-lg" />
                    <div className="px5py5ImgText">
                        <span className="px4ImgTextPadding">
                            {images[2].title}
                        </span>
                    </div>
                </Link>

                <Link to={images[3].href} className="col-span-2 row-span-1 relative group overflow-hidden customImg">
                    <img src={images[3].url} alt={images[3].id} className="w-full h-full object-cover rounded-lg" />
                    <div className="px5py5ImgText">
                        <span className="px4ImgTextPadding">
                            {images[3].title}
                        </span>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col items-center gap-4 md:hidden">
                {images.map((image) => (
                    <Link key={image.id} to={image.href} className="w-3/4 relative ">
                        <img src={image.url} alt={image.id} className="w-full h-64 object-cover rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 flex items-end px-5 py-5">
                            <span className="px-4 text-center py-4 bg-white text-xl rounded-xs hover:bg-[#FAFAFA] transition">
                                {image.title}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default EditorsPickLayout;