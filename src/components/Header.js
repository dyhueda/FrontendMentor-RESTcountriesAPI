import ToggleTheme from "./ToggleTheme";

export default function Header(){
    return(
        <section className="flex justify-between p-4 shadow-md dark:bg-darkblueelements bg-white">
          <button className="font-bold text-sm">
            Where in the world?
          </button>
          <ToggleTheme></ToggleTheme>
        </section>
    )
}
