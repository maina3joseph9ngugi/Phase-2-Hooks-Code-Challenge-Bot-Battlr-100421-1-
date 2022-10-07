export default function SortBar({ handleSort, handleFilter }) {
    return (
        <>
            <label>Sort by :</label>
            <select onChange={(e) => { handleSort(e.target.value) }} style={{ padding: "1rem" }}>
                <option value="id">ID</option>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
                <option value="name">Name</option>
                <option value="bot_class">Bot Class</option>
            </select><br/>
            <label>Filter :</label>
            {/*  `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`. */}
            <select onChange={(e) => { handleFilter(e.target.value) }} style={{ padding: "1rem" }}>
                <option value="Support">Support</option>
                <option value="Medic">Medic</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Captain">Captain</option>
                <option value="Witch">Witch</option>
            </select>
        </>
    );
}