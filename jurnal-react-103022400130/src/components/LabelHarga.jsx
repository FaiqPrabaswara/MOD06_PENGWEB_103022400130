function harga({nilai}){
    return(
        <p>Rp. {nilai.toLocaleString("id-id")}</p>
    )
}

export default harga