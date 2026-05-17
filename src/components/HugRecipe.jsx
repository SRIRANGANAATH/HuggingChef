import ReactMarkdown from 'react-markdown'
export default function HugRecipe(props) {
    return (
        <ReactMarkdown>
        {props.recipe}
        </ReactMarkdown>
    )
}