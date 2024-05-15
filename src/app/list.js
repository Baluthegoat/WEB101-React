export default function list({menuData}) {
    const listItems = menuData.map((item) =><li>(item.name)</li>);
    return <ul>{listItems}</ul>;
}