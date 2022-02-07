function ContentSkillHardItem(props) {
    const { title } = props
    return (
        <div className="bg-black text-white rounded-lg p-2 m-2">
            <h4 className="text-lg pb-2">{title.title}</h4>
            <hr/>
            <p>{title.description.item1}</p>
            <p>{title.description.item2}</p>
        </div>
    );
}

export default ContentSkillHardItem;