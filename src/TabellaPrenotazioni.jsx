export default function TabellaPrenotazioni({
    prenotazioni,
    loading,
    eliminaPrenotazione
}) {
    const totaleBiglietti = prenotazioni.reduce((totale, prenotazione) => {
        return totale + Number(prenotazione.numeroBiglietti);
    }, 0);

    const totaleBigliettiRockNight = prenotazioni
        .filter((prenotazione) => prenotazione.evento === "Rock Night")
        .reduce((totale, prenotazione) => {
            return totale + Number(prenotazione.numeroBiglietti);
        }, 0);

    if (loading) {
        return <p>Caricamento...</p>;
    }

    return (
        <>
            <h2>Elenco prenotazioni</h2>

            <p>Totale prenotazioni: {prenotazioni.length}</p>
            <p>Totale biglietti: {totaleBiglietti}</p>
            <p>Totale biglietti per Rock Night: {totaleBigliettiRockNight}</p>

            <table border="1">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Costo Biglietto</th>
                        <th>Evento</th>
                        <th>Biglietti</th>
                        <th>Elimina</th>
                    </tr>
                </thead>

                <tbody>
                    {prenotazioni.map((prenotazione) => (
                        <tr key={prenotazione.id}>
                            <td>{prenotazione.nomeCliente}</td>
                            <td>{prenotazione.prezzoBiglietto}</td>
                            <td>{prenotazione.evento}</td>
                            <td>{prenotazione.numeroBiglietti}</td>
                            <td>
                                <button
                                    onClick={() => eliminaPrenotazione(prenotazione.id)}
                                >
                                    X   
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
