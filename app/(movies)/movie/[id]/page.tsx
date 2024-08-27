export default function MovieDetails({
    params: { id },
}: {
    // type 명시
    params: { id: string };
}) {
    console.log(id);
    return (
        <div>
            <h1>Movie Details {id}</h1>
        </div>
    );
}
