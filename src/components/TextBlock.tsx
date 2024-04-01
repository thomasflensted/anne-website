import TextBlockDanish from "./TextBlockDanish"
import TextBlockEnglish from "./TextBlockEnglish"

const TextBlock = ({ language }: { language: string }) => {
    return language === 'danish'
        ? (<TextBlockDanish />)
        : (<TextBlockEnglish />)
}
export default TextBlock