export default function PageLoader() {
    return (
        <div className="h-screen bg-white w-full flex justify-center items-center z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span>
            </div>
        </div>
    )
}