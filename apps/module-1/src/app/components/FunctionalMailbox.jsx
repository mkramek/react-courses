import React from 'react';

// ==================== Komponent funkcyjny ==================== //
// Jego charakterystyczną częścią jest to, że (od React 16.8)    //
// może używać hooków, tj. funkcji pomocniczych, które pozwalają //
// na lepsze zarządzanie komponentem, jego właściwościami        //
// i stanem.                                                     //
// ============================================================= //

// Ten komponent zawiera atrybut "unreadCount".
// W przeciwieństwie do komponentu klasowego, w komponencie funkcyjnym nie musimy określać propTypes
export default function FunctionalMailbox({ unreadCount }) {
    // Render warunkowy polega na renderowaniu w zależności od wartości zmiennej.
    // Poniżej zwrócimy wyrażenie trójwarunkowe, które w zależności od wartości zmiennej zmodyfikuje renderowaną wartość.
    // Pierwsza część wyrażenia trójwarunkowego zawiera test - musi on zwrócić wartość prawda/fałsz.
    return unreadCount === 1 ? (
        // Druga część wyrażenia trójwarunkowego jest brana pod uwagę, gdy test zadziała (zwróci true).
        <p>You have {unreadCount} message.</p>
    ) : (
        // Trzecia część wyrażenia trójwarunkowego jest brana pod uwagę, jeśli test nie zadziała (zwróci false).
        <p>You have {unreadCount} messages.</p>
    );
}
