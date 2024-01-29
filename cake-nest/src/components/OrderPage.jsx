function OrderPage () {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = '/';
    }
    return (
        <div>
            <h1>Bonjour</h1>
            <form onSubmit={handleSubmit}>
                <button>Déconnexion</button>
            </form>
        </div>
    )
}

export default OrderPage;