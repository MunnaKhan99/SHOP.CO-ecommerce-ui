import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.1;

    return (
        <div className="flex items-center gap-1">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}

            {/* Half star */}
            {hasHalf && (
                <div className="relative w-4 h-4">
                    <Star className="absolute w-4 h-4 text-gray-300" />
                    <Star className="absolute w-4 h-4 fill-yellow-400 text-yellow-400 [clip-path:inset(0_50%_0_0)]" />
                </div>
            )}

            {/* Empty stars */}
            {[...Array(5 - fullStars - (hasHalf ? 1 : 0))].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}

            {/* Rating number */}
            <span className="text-sm text-black ml-1">
                {rating}/<span className="text-neutral-600">5</span>
            </span>
        </div>
    );
};

export default RatingStars;