// fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando
// vue, stampare a schermo una card per ogni album.

// BONUS 1: Creare una select con tutti i generi dei dischi. In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati

// BONUS 2: Ordinare i dischi per anno di uscita.

// link api: 'https://flynn.boolean.careers/exercises/api/array/music'

const app = new Vue({
    el: '#root',
    data: {
        songs: [],
        genres: [],
        currentGenre: ''
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                this.songs = result.data.response;
                this.songs.sort(compareYears);

                this.songs.forEach(song => {
                    if (!this.genres.includes(song.genre)) {
                        this.genres.push(song.genre);
                    }
                });
                this.genres.sort(compareGenres)

        });

    }
});

function compareGenres(a, b) {
    console.log(a, b);
    if (a < b) {
        return -1;
    }else {
        return 1;
    }
}

function compareYears(a, b) {
    if (parseInt(a.year) < parseInt(b.year)) {
        return -1;
    } else {
        return 1;
    }
}
