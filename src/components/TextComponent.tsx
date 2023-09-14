import { ChangeEvent, useState } from 'react';

interface TextComponentProps {
    text: string
}

const TextComponent: React.FC<TextComponentProps> = ({text}) => {
    const [title, changeTitle] = useState(text);
    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        changeTitle(e.target.value);
      }
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" value={title} onChange={handleTitleChange}></input>
        </div>
    )
}
export default TextComponent