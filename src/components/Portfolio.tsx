import PortfolioLink from "./PortfolioLink"
import { portfolioData } from "./portfolioData"

const Portfolio = ({ language }: { language: string }) => {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <p className='font-bold '>{language === 'danish' ? 'Arbejde' : 'Work'}</p>
            {portfolioData.map(item =>
                <PortfolioLink date={item.date} link={item.link}>
                    {item.text}
                </PortfolioLink>
            )}
        </div >
    )
}
export default Portfolio