import { useState } from "react";

export default function FormPrenotazioni({ aggiungiPrenotazione }) {

    const [nomeCliente, setNomeCliente] = useState("");
    const [prezzoBiglietto, setPrezzoBiglietto] = useState("");
    const [evento, setEvento] = useState("");
    const [numeroBiglietti, setNumeroBiglietti] = useState("");

    function inviaDati(e) {
        e.preventDefault();

        if (
            nomeCliente.trim() === "" ||
            Number(prezzoBiglietto) <= 0 ||
            evento.trim() === "" ||
            Number(numeroBiglietti) <= 0
        ) {
            alert("Compila tutti i campi");
            return;
        }

        const nuovaPrenotazione = {
            nomeCliente,
            prezzoBiglietto: Number(prezzoBiglietto),
            evento,
            numeroBiglietti: Number(numeroBiglietti)
        };

        aggiungiPrenotazione(nuovaPrenotazione);

        setNomeCliente("");
        setPrezzoBiglietto("");
        setEvento("");
        setNumeroBiglietti("");
    }

    return (
        <form onSubmit={inviaDati}>
            <h2>Nuova prenotazione</h2>

            <input
                type="text"
                placeholder="Nome cliente"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
            />

            <input
                type="text"
                placeholder="Prezzo biglietto"
                value={prezzoBiglietto}
                onChange={(e) => setPrezzoBiglietto(e.target.value)}
            />

            <select
                value={evento}
                onChange={(e) => setEvento(e.target.value)}
            >
                <option value="">Seleziona evento</option>
                <option value="Rock Night">Rock Night</option>
                <option value="Jazz Evening">Jazz Evening</option>
                <option value="Pop Festival">Pop Festival</option>
            </select>

            <input
                type="number"
                placeholder="Numero biglietti"
                value={numeroBiglietti}
                onChange={(e) => setNumeroBiglietti(e.target.value)}
            />

            <button type="submit">Aggiungi</button>
        </form>
    );
}
