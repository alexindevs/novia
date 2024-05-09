import Image from "next/image";

export function Nav(props: { name: string }) {
    return (
        <nav className="flex justify-between px-6 py-6">
            <h1 className="text-[13px]"><span className="text-neutral-600">Welcome back,</span> {props.name}</h1>
            <div className="flex items-center justify-evenly">
                <div className="icon px-2">
                <Image width="18" height="18" color="white" src="https://img.icons8.com/ios/50/ffffff/search--v1.png" alt="search--v1"/>
                </div>
                <div className="icon">
                    <Image width="18" height="18" src="https://img.icons8.com/ios/25/ffffff/appointment-reminders--v1.png" alt="appointment-reminders--v1"/>
                </div>
            </div>
        </nav>
    );
}