const Error = ({ message }: { message: string }) => (
    <div className="w-full flex items-center justify-center h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12">
        {message}
    </div>
);

export default Error;
