import { Star } from "lucide-react";

function StarReview({ rating }) {
    return (
        <div className="flex gap-3">
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={24}
                        className={
                            star <= rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                        }
                    />
                ))}

            </div>
            <h6 className="font-semibold text-[#737373]" >0 Reviews</h6>
        </div>
    );
}

export default StarReview;