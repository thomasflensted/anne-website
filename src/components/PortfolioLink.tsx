const PortfolioLink = ({ children, date, link }: { children: string, date: string, link: string }) => {
    return (
        <div className="flex items-center justify-between">
            <p className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap">
                <a href={link} target="_blank" className="hover:underline">
                    {children}
                </a>
            </p>
            <p className="whitespace-nowrap">{date}</p>
        </div>
    )
}
export default PortfolioLink