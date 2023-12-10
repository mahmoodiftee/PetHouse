
const Title = ({head1, head2}) => {
    return (
        <div>
            <h1 className="text-3xl md:text-7xl italic text-orange text-center font-extrabold">{head1} <span className="text-white">{head2}</span></h1>
        </div>
    );
};

export default Title;