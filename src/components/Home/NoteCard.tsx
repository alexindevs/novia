export function NoteCard(props: {
    title: string;
    date: string;
    content: string
}) {
    return (
        <div className="w-100 h-64 border flex-[45%] bg-white overflow-clip rounded-3xl border-white p-4">
            <h1 className="text-xl text-black pb-3">{props.title}</h1>
            <h4 className="text-gray-500 text-sm pb-3">{props.date}</h4>
            <p className="text-black text-sm pb-3">{props.content.slice(0, 70)}...</p>
        </div>
    );
}