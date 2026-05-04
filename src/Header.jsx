import HugRecipeLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={HugRecipeLogo}/>
            <h1>HuggingChef</h1>
        </header>
    )
}