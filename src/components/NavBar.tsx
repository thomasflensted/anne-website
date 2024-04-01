type NavProps = {
    setLanguage: React.Dispatch<React.SetStateAction<"danish" | "english">>,
    language: string
}

const NavBar = ({ setLanguage, language }: NavProps) => {
    return (
        <nav className="w-full px-6 py-3">
            <ul className="flex justify-between ">
                <li className="text-lg">Anne Stampe Arndt</li>
                <li className="text-lg cursor-pointer"
                    onClick={() => language === 'danish' ? setLanguage('english') : setLanguage('danish')}>
                    {language === 'danish' ? 'DA' : 'EN'}
                </li>
            </ul>
        </nav >
    )
}
export default NavBar