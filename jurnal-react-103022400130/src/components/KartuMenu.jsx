import labelHarga from "./LabelHarga.jsx"

function KartuMenu({nama, harga, kategori="Makanan"}){
    return(
        <>
        <div className="kartu">
            <h1>{nama}</h1>
            <labelHarga nilai={harga}/>
            <p>Kategori :{kategori}</p>
        </div>
        </>
    )
}

export default KartuMenu