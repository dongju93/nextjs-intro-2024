export default function MovieDetails({
    params: { id },
}: {
    params: { id: string };
}) {
    console.log(id);
    return (
        <div>
            <h1>Movie Details {id}</h1>
        </div>
    );
}
