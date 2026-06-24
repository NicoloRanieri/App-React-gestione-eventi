import { useEffect, useState } from "react";
import FormPrenotazioni from "./FormPrenotazioni";
import TabellaPrenotazioni from "./TabellaPrenotazioni";

const API_URL = "https://6a3b8d13e4a07f202e154519.mockapi.io/api/prenotazioni";

export default function PrenotazioniEventi() {
    const [prenotazioni, setPrenotazioni] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        caricaPrenotazioni();
    }, []);

    async function caricaPrenotazioni() {
        setLoading(true);

        const response = await fetch(API_URL);
        const dati = await response.json();

        setPrenotazioni(dati);
        setLoading(false);
    }

    async function aggiungiPrenotazione(nuovaPrenotazione) {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuovaPrenotazione)
        });

        caricaPrenotazioni();
    }

    async function eliminaPrenotazione(id) {
        
        const conferma = window.confirm("Vuoi davvero eliminare questa prenotazione?");

        if (!conferma) {
            return;
        }


        await fetch(API_URL + "/" + id, {
            method: "DELETE"
        });

        caricaPrenotazioni();
    }

    return (
        <>
            <h1>Prenotazioni Eventi Musicali</h1>

            <FormPrenotazioni
                aggiungiPrenotazione={aggiungiPrenotazione}
            />

            <TabellaPrenotazioni
                prenotazioni={prenotazioni}
                loading={loading}
                eliminaPrenotazione={eliminaPrenotazione}
            />
        </>
    );
}
