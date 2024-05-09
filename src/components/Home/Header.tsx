"use client"
import Dropdown from "../shared/Dropdown";
import { Categories } from "./CategoryPicker";

export function Header () {
    return (
        <header>
            <div className="justify-between px-5 flex text-white">
                <h1 className="text-3xl inline">Your Notes</h1>
                <span className="rounded-xl border-[white] border hover:bg-purple-700 hover:transition-colors flex text-3xl items-center justify-center w-10 h-10">+</span>
            </div>
            <div className="justify-between px-5 my-5 flex text-white">
                <Dropdown options={["Option 1", "Option 2", "Option 3"]} onSelect={(option) => console.log(option)}/>
            </div>
            <div className="my-5">
                <Categories categories={["all", "work", "poems", "random", "shopping"]}/>
            </div>
        </header>
    );
}