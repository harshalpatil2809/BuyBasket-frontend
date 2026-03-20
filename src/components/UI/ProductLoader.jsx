
const ProductLoader = () => {
    return (
        <div className="min-h-screen bg-green-200 flex items-center justify-center p-6 pt-16">
            <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-6xl w-full grid md:grid-cols-2 gap-10 animate-pulse">
                {/* Image Skeleton */}
                <div>
                    <div className="w-full max-w-md mx-auto h-80 bg-gray-300 rounded-2xl mb-6"></div>

                    <div className="flex gap-3 justify-center flex-wrap">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                        ))}
                    </div>
                </div>

                {/* Details Skeleton */}
                <div className="flex flex-col space-y-4">
                    <div className="h-8 bg-gray-300 rounded w-3/4"></div>

                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>

                    <div className="flex gap-6 mt-2">
                        <div className="h-4 w-16 bg-gray-300 rounded"></div>
                        <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <div className="h-8 w-32 bg-gray-300 rounded"></div>
                        <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <div className="h-5 w-32 bg-gray-300 rounded"></div>
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-4 bg-gray-300 rounded"></div>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-6">
                        <div className="w-1/2 h-12 bg-gray-300 rounded-xl"></div>
                        <div className="w-1/2 h-12 bg-gray-300 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLoader;
