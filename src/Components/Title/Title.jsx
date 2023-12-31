
const Title = ({head1, head2}) => {
    return (
        <div className="my-4">
            <h1 className="text-3xl md:text-5xl italic text-orange text-center font-extrabold">{head1} <span className="text-white">{head2}</span></h1>
        </div>
    );
};

export default Title;