import React, {useState} from "react";

const SearchBar = () => {
    const [city,setCity] = useState("Santiago");

    const onSubmit =(e) => {
        e.preventDefault();
        console.log({city});
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3 mx-auto">
                    <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
                    <button type="submit" className="btn btn-secondary">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;